/* NOOR AL-DHIKR — dates (hijri + grégorien), horaires de prière par géolocalisation, compte à rebours Ramadan.
   Calcul 100 % local (aucun service externe, aucune clé). Chargé APRÈS app.js. */
(function(){
const I18N={
 ar:{startEvening:'ابدأ أذكار المساء',locGps:'📍 استخدم موقعي',locDefault:'الجزائر العاصمة (افتراضي)',locMine:'موقعك الحالي',method:'طريقة الحساب',nextPrayer:'الصلاة القادمة',in:'بعد',ramadanIn:'العدّ التنازلي لرمضان',days:'يوم',hours:'ساعة',minutes:'دقيقة',seconds:'ثانية',ramadanNow:'نحن في شهر رمضان المبارك — اليوم',ramadanNote:'التاريخ حسب تقويم أم القرى وقد يختلف بيوماً حسب رؤية الهلال.',geoDenied:'تعذّر تحديد الموقع، تم استخدام الجزائر العاصمة.',hijriSuffix:'هـ',notifyOn:'🔔 التنبيه مفعّل',notifyOff:'🔕 تفعيل التنبيه',notifyBody:'حان الآن موعد صلاة',notifyDenied:'الإشعارات مرفوضة في المتصفح، سيظهر التنبيه داخل الصفحة فقط.',notifyHint:'التنبيه يعمل ما دامت الصفحة مفتوحة.',notifyHintApp:'سيصلك تنبيه بالصوت عند دخول وقت كل صلاة، حتى لو كان التطبيق مغلقاً.',notifyHintWeb:'التنبيه يعمل والصفحة مفتوحة. لتنبيه التطبيق وهو مغلق ثبّت نسخة التطبيق (APK).',notifyExact:'اسمح بالمنبّهات الدقيقة لضبط وقت الأذان.',notifyErr:'تعذّرت جدولة التنبيه:',notifyCount:'تنبيه مجدول (يعمل والتطبيق مغلق)',qibla:'القبلة',compass:'🧭 بوصلة',compassDenied:'تعذّر تفعيل البوصلة على هذا الجهاز.',compassHint:'وجّه أعلى الهاتف حتى يشير السهم إلى الأعلى',
  Fajr:'الفجر',Sunrise:'الشروق',Dhuhr:'الظهر',Asr:'العصر',Maghrib:'المغرب',Isha:'العشاء',
  m_mwl:'رابطة العالم الإسلامي',m_egypt:'الهيئة المصرية',m_karachi:'كراتشي',m_makkah:'أم القرى',m_isna:'أمريكا الشمالية'},
 en:{startEvening:'Evening Adhkar',locGps:'📍 Use my location',locDefault:'Algiers (default)',locMine:'Your current location',method:'Calculation method',nextPrayer:'Next prayer',in:'in',ramadanIn:'Countdown to Ramadan',days:'days',hours:'hours',minutes:'min',seconds:'sec',ramadanNow:'It is the blessed month of Ramadan — day',ramadanNote:'Umm al-Qura calendar; may differ by a day depending on moon sighting.',geoDenied:'Could not get your location; using Algiers.',hijriSuffix:'AH',notifyOn:'🔔 Alerts on',notifyOff:'🔕 Enable alerts',notifyBody:'It is time for',notifyDenied:'Notifications are blocked in the browser; alerts will only show in the page.',notifyHint:'Alerts work while the page is open.',notifyHintApp:'You will get a sound alert at each prayer time, even when the app is closed.',notifyHintWeb:'Alerts work while the page is open. For alerts with the app closed, install the app version (APK).',notifyExact:'Allow exact alarms so alerts ring on time.',notifyErr:'Could not schedule alerts:',notifyCount:'alerts scheduled (work with the app closed)',qibla:'Qibla',compass:'🧭 Compass',compassDenied:'Compass is not available on this device.',compassHint:'Turn your phone until the arrow points up',
  Fajr:'Fajr',Sunrise:'Sunrise',Dhuhr:'Dhuhr',Asr:'Asr',Maghrib:'Maghrib',Isha:'Isha',
  m_mwl:'Muslim World League',m_egypt:'Egyptian Authority',m_karachi:'Karachi',m_makkah:'Umm al-Qura',m_isna:'ISNA'}
};
Object.assign(translations.ar,I18N.ar);Object.assign(translations.en,I18N.en);
const L=k=>I18N[lang][k]||k, $=s=>document.querySelector(s);

/* ───── Calcul des horaires (algorithme classique type PrayTimes) ───── */
const METHODS={mwl:{fajr:18,isha:17},egypt:{fajr:19.5,isha:17.5},karachi:{fajr:18,isha:18},makkah:{fajr:18.5,ishaMin:90},isna:{fajr:15,isha:15}};
const d2r=Math.PI/180,r2d=180/Math.PI;
const sin=d=>Math.sin(d*d2r),cos=d=>Math.cos(d*d2r),tan=d=>Math.tan(d*d2r),asin=x=>Math.asin(x)*r2d,acos=x=>Math.acos(x)*r2d,atan2=(y,x)=>Math.atan2(y,x)*r2d,arccot=x=>Math.atan(1/x)*r2d;
const fix=(a,b)=>{a=a-b*Math.floor(a/b);return a<0?a+b:a},fixA=a=>fix(a,360),fixH=a=>fix(a,24);
function julian(y,m,d){if(m<=2){y-=1;m+=12}const A=Math.floor(y/100),B=2-A+Math.floor(A/4);return Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+d+B-1524.5}
function sunPos(jd){const D=jd-2451545.0,g=fixA(357.529+0.98560028*D),q=fixA(280.459+0.98564736*D),Ls=fixA(q+1.915*sin(g)+0.020*sin(2*g)),e=23.439-0.00000036*D,RA=atan2(cos(e)*sin(Ls),cos(Ls))/15;return{decl:asin(sin(e)*sin(Ls)),eqt:q/15-fixH(RA)}}
function computeDay(date,lat,lng,mKey){
  const m=METHODS[mKey]||METHODS.mwl,noon=new Date(date.getFullYear(),date.getMonth(),date.getDate(),12);
  const tz=-noon.getTimezoneOffset()/60,jd=julian(date.getFullYear(),date.getMonth()+1,date.getDate())-lng/(15*24);
  const midDay=t=>fixH(12-sunPos(jd+t).eqt);
  const sat=(ang,t,ccw)=>{const dc=sunPos(jd+t).decl,v=(-sin(ang)-sin(dc)*sin(lat))/(cos(dc)*cos(lat));if(v<-1||v>1)return NaN;const T=acos(v)/15;return midDay(t)+(ccw?-T:T)};
  const asr=(f,t)=>{const dc=sunPos(jd+t).decl;return sat(-arccot(f+tan(Math.abs(lat-dc))),t)};
  let t={fajr:5/24,sunrise:6/24,dhuhr:.5,asr:13/24,maghrib:18/24,isha:18/24},r;
  for(let i=0;i<2;i++){
    r={fajr:sat(m.fajr,t.fajr,true),sunrise:sat(.833,t.sunrise,true),dhuhr:midDay(t.dhuhr),asr:asr(1,t.asr),maghrib:sat(.833,t.maghrib),isha:m.ishaMin?0:sat(m.isha,t.isha)};
    if(m.ishaMin)r.isha=r.maghrib+m.ishaMin/60;
    for(const k in r)t[k]=r[k]/24;
  }
  const shift=tz-lng/15,base=new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime(),out={};
  for(const k in r){const h=r[k]+shift;out[k]=isNaN(h)?null:new Date(Math.round((base+h*3600e3)/60000)*60000)}
  return out;
}

/* ───── Localisation ───── */
const ALGIERS={lat:36.7538,lng:3.0588,gps:false};
const store={get(k,f){try{return JSON.parse(localStorage.getItem(k))??f}catch(e){return f}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
let loc=store.get('noor-loc',null)||ALGIERS,method=store.get('noor-method','mwl');
function askLocation(manual){
  if(!navigator.geolocation){if(manual)toast(L('geoDenied'));return}
  navigator.geolocation.getCurrentPosition(p=>{loc={lat:+p.coords.latitude.toFixed(4),lng:+p.coords.longitude.toFixed(4),gps:true};store.set('noor-loc',loc);paint();scheduleAll()},
   ()=>{if(manual)toast(L('geoDenied'))},{timeout:10000,maximumAge:3600e3});
}
const toast=m=>{if(typeof showToast==='function')showToast(m)};

/* ───── Qibla ───── */
const KAABA={lat:21.4225,lng:39.8262};
function qiblaBearing(lat,lng){const dl=(KAABA.lng-lng)*d2r,p1=lat*d2r,p2=KAABA.lat*d2r;return fixA(Math.atan2(Math.sin(dl),Math.cos(p1)*Math.tan(p2)-Math.sin(p1)*Math.cos(dl))*r2d)}
const DIRS={ar:['شمال','شمال شرق','شرق','جنوب شرق','جنوب','جنوب غرب','غرب','شمال غرب'],en:['N','NE','E','SE','S','SW','W','NW']};
let heading=null,compassOn=false;
function paintQibla(){
  const b=qiblaBearing(loc.lat,loc.lng),dir=DIRS[lang][Math.round(b/45)%8];
  $('#qiblaText').textContent=`${L('qibla')}: ${Math.round(b)}° ${dir}`;
  const rot=heading==null?b:b-heading;$('#qiblaNeedle').style.transform=`rotate(${rot}deg)`;
  $('#qiblaDial').classList.toggle('live',heading!=null);
  const aligned=heading!=null&&Math.abs(((rot%360)+540)%360-180)<4;$('#qiblaDial').classList.toggle('ok',aligned);
  $('#qiblaHint').textContent=heading!=null?L('compassHint'):'';
}
function onOrient(e){let h=null;if(typeof e.webkitCompassHeading==='number')h=e.webkitCompassHeading;else if(e.absolute&&e.alpha!=null)h=fixA(360-e.alpha);else if(e.alpha!=null&&e.type==='deviceorientationabsolute')h=fixA(360-e.alpha);if(h!=null){heading=h;paintQibla()}}
async function toggleCompass(){
  if(compassOn){compassOn=false;heading=null;window.removeEventListener('deviceorientationabsolute',onOrient,true);window.removeEventListener('deviceorientation',onOrient,true);paintQibla();return}
  try{
    if(typeof DeviceOrientationEvent!=='undefined'&&typeof DeviceOrientationEvent.requestPermission==='function'){const r=await DeviceOrientationEvent.requestPermission();if(r!=='granted')throw 0}
    else if(typeof DeviceOrientationEvent==='undefined')throw 0;
    compassOn=true;window.addEventListener('deviceorientationabsolute',onOrient,true);window.addEventListener('deviceorientation',onOrient,true);
    setTimeout(()=>{if(heading==null){compassOn=false;toast(L('compassDenied'))}},2500);
  }catch(e){toast(L('compassDenied'))}
}

/* ───── Alertes de prière : arrière-plan + son à l'heure exacte ───── */
let notifyOn=store.get('noor-notify',false),audioCtx=null;
const TITLE='نور الذكر · Noor Al-Dhikr',SOUND_URL='assets/audio/noor_adhan.wav',NATIVE_SOUND='noor_adhan.wav',CHANNEL='noor-prayer-v2';
const PRAYERS=['Fajr','Dhuhr','Asr','Maghrib','Isha'],KEYS={Fajr:'fajr',Sunrise:'sunrise',Dhuhr:'dhuhr',Asr:'asr',Maghrib:'maghrib',Isha:'isha'};
/* Application Android (Capacitor) : notifications programmées par le système → marchent même app fermée */
const CAP=window.Capacitor;
const isNative=!!(CAP&&((typeof CAP.isNativePlatform==='function'&&CAP.isNativePlatform())||(typeof CAP.getPlatform==='function'&&CAP.getPlatform()!=='web')));
let LN=null;
if(isNative){try{LN=(CAP.Plugins&&CAP.Plugins.LocalNotifications)||(typeof CAP.registerPlugin==='function'?CAP.registerPlugin('LocalNotifications'):null)}catch(e){LN=null}}
/* Dans l'APK : PAS de service worker (il servait d'anciens fichiers en cache) → on le supprime */
const swOK=!isNative&&'serviceWorker' in navigator&&/^https?:$/.test(location.protocol);
if(swOK)navigator.serviceWorker.register('sw.js').catch(()=>{});
if(isNative){try{navigator.serviceWorker&&navigator.serviceWorker.getRegistrations().then(r=>r.forEach(x=>x.unregister()));window.caches&&caches.keys().then(k=>k.forEach(x=>caches.delete(x)))}catch(e){}}
const getReg=()=>swOK?Promise.race([navigator.serviceWorker.ready,new Promise(r=>setTimeout(()=>r(null),3000))]).catch(()=>null):Promise.resolve(null);
const canTrigger=()=>typeof TimestampTrigger!=='undefined'&&'Notification' in window&&'showTrigger' in Notification.prototype;
const adhan=new Audio(SOUND_URL);adhan.preload='auto';
let primed=false;
addEventListener('pointerdown',()=>{if(primed)return;primed=true;try{adhan.muted=true;const p=adhan.play();if(p&&p.then)p.then(()=>{adhan.pause();adhan.currentTime=0;adhan.muted=false}).catch(()=>{adhan.muted=false})}catch(e){}},{once:true,passive:true});
function oscChime(){
  try{audioCtx=audioCtx||new (window.AudioContext||window.webkitAudioContext)();const c=audioCtx,t0=c.currentTime;
   [[523.25,0],[659.25,.35],[783.99,.7]].forEach(([f,d])=>{const o=c.createOscillator(),g=c.createGain();o.type='sine';o.frequency.value=f;o.connect(g);g.connect(c.destination);g.gain.setValueAtTime(0,t0+d);g.gain.linearRampToValueAtTime(.18,t0+d+.05);g.gain.exponentialRampToValueAtTime(.001,t0+d+1.2);o.start(t0+d);o.stop(t0+d+1.25)})}catch(e){}
}
function chime(){try{adhan.currentTime=0;const p=adhan.play();if(p&&p.catch)p.catch(oscChime)}catch(e){oscChime()}}
const notifOpts=msg=>({body:msg,tag:'noor-prayer',renotify:true,icon:'assets/icon-192.png',badge:'assets/icon-192.png',vibrate:[250,120,250,120,500],silent:false});
async function systemNotify(msg){
  if(!('Notification' in window)||Notification.permission!=='granted')return;
  try{const reg=await getReg();if(reg){await reg.showNotification(TITLE,notifOpts(msg));return}}catch(e){}
  try{new Notification(TITLE,notifOpts(msg))}catch(e){}
}
function fireAlert(name){
  const msg=`${L('notifyBody')} ${L(name)}`;
  toast('🔔 '+msg);
  if(!LN){chime();systemNotify(msg)}   /* en app Android, la notification programmée joue déjà le son */
}
function checkAlerts(now,today,keys){
  if(!notifyOn)return;
  for(const n of PRAYERS){
    const d=today[keys[n]];if(!d)continue;const diff=now-d;
    if(diff>=0&&diff<90e3){const id=`noor-fired-${now.toDateString()}-${n}`;let seen=false;try{seen=sessionStorage.getItem(id)}catch(e){}
      if(!seen){try{sessionStorage.setItem(id,'1')}catch(e){}fireAlert(n)}}
  }
}
function upcoming(days){
  const out=[],now=new Date();
  for(let k=0;k<days;k++){
    const day=new Date(now.getFullYear(),now.getMonth(),now.getDate()+k),t=computeDay(day,loc.lat,loc.lng,method);
    PRAYERS.forEach((n,i)=>{const d=t[KEYS[n]];if(d&&d>now)out.push({n,d,id:100+k*10+i})});
  }
  return out;
}
let exactWarned=false;
async function ensureChannel(){
  let ok=false;
  try{const r=await LN.listChannels();ok=!!(r&&r.channels&&r.channels.some(c=>c.id===CHANNEL))}catch(e){}
  try{await LN.deleteChannel({id:'noor-prayer'})}catch(e){}
  if(!ok)await LN.createChannel({id:CHANNEL,name:'أوقات الصلاة · Prayer times',description:'Prayer time alerts',importance:5,sound:NATIVE_SOUND,vibration:true,visibility:1});
}
async function cancelPending(){const p=await LN.getPending();if(p&&p.notifications&&p.notifications.length)await LN.cancel({notifications:p.notifications})}
async function scheduleNative(){
  if(!notifyOn){await cancelPending();return 0}
  let perm=await LN.checkPermissions();
  if(perm.display!=='granted'){perm=await LN.requestPermissions();if(perm.display!=='granted'){toast(L('notifyDenied'));return 0}}
  try{const ex=await LN.checkExactNotificationSetting();if(ex&&ex.exact_alarm==='denied'&&!exactWarned){exactWarned=true;toast(L('notifyExact'));await LN.changeExactNotificationSetting()}}catch(e){}
  await ensureChannel();
  const list=upcoming(30).map(({n,d,id})=>({id,title:TITLE,body:`${L('notifyBody')} ${L(n)}`,schedule:{at:d,allowWhileIdle:true},channelId:CHANNEL,sound:NATIVE_SOUND}));
  /* on n'annule l'ancienne programmation qu'au dernier moment : si une étape échoue avant, rien n'est perdu */
  await cancelPending();
  try{await LN.schedule({notifications:list})}catch(e){await new Promise(r=>setTimeout(r,500));await LN.schedule({notifications:list})}
  const chk=await LN.getPending();return chk&&chk.notifications?chk.notifications.length:0;
}
/* Diagnostic + test : programme une alerte dans 60 s ; ferme l'app et attends */
async function testNotify(){
  if(!LN){alert('⚠️ هذه ليست نسخة APK (أو إضافة الإشعارات غير موجودة).\nCapacitor: '+(CAP?('platform='+(CAP.getPlatform&&CAP.getPlatform())):'غير موجود')+'\nالإضافات: '+(CAP&&CAP.Plugins?Object.keys(CAP.Plugins).join(', '):'-')+'\nالتنبيه والتطبيق مغلق يحتاج APK مبني بـ Capacitor.');return}
  const rep=[];
  try{
    let perm=await LN.checkPermissions();rep.push('الإشعارات: '+perm.display);
    if(perm.display!=='granted'){perm=await LN.requestPermissions();rep.push('بعد الطلب: '+perm.display)}
    try{const ex=await LN.checkExactNotificationSetting();rep.push('المنبّهات الدقيقة: '+(ex&&ex.exact_alarm));if(ex&&ex.exact_alarm==='denied'){alert('فعّل «المنبّهات والتذكيرات» لتطبيق نور في الإعدادات ثم أعد المحاولة');await LN.changeExactNotificationSetting();return}}catch(e){rep.push('exact: '+e.message)}
    await ensureChannel();
    try{const r=await LN.listChannels();const c=(r.channels||[]).find(x=>x.id===CHANNEL);rep.push('القناة: importance='+(c&&c.importance)+(c&&c.importance<4?' ⚠️ مخفّضة، فعّل الصوت/الظهور للقناة في إعدادات الإشعارات':''))}catch(e){}
    await LN.schedule({notifications:[{id:9001,title:TITLE,body:'🧪 اختبار — إذا وصلك هذا فالنظام يعمل',schedule:{at:new Date(Date.now()+60000),allowWhileIdle:true},channelId:CHANNEL,sound:NATIVE_SOUND}]});
    const p=await LN.getPending();rep.push('المجدولة الآن: '+(p.notifications||[]).length);
    alert(rep.join('\n')+'\n\n⏱️ سيصلك إشعار اختبار بعد دقيقة. أغلق التطبيق تماماً (اسحبه من التطبيقات الأخيرة) وانتظر.');
  }catch(e){alert('❌ خطأ: '+(e&&e.message||e)+'\n'+rep.join('\n'))}
}
/* Navigateur : programmation système si supporté (Notification Triggers), sinon alerte page ouverte */
async function scheduleWeb(){
  if(!canTrigger())return;
  const reg=await getReg();if(!reg)return;
  (await reg.getNotifications({includeTriggered:true})).filter(x=>x.tag&&x.tag.startsWith('noor-sched-')).forEach(x=>x.close());
  if(!notifyOn||Notification.permission!=='granted')return;
  for(const {n,d} of upcoming(3))await reg.showNotification(TITLE,{...notifOpts(`${L('notifyBody')} ${L(n)}`),tag:'noor-sched-'+(+d),showTrigger:new TimestampTrigger(+d)});
}
let schedBusy=false,schedAgain=false,lastCount=0,lastErr='';
async function scheduleAll(){
  if(schedBusy){schedAgain=true;return}
  schedBusy=true;lastErr='';
  try{if(LN)lastCount=await scheduleNative();else await scheduleWeb()}catch(e){lastErr=String(e&&e.message||e);try{console.error('noor schedule',e)}catch(_){}if(LN&&notifyOn)toast(L('notifyErr')+' '+lastErr)}
  schedBusy=false;
  if(schedAgain){schedAgain=false;scheduleAll()}
}
function paintNotifyBtn(){const b=$('#notifyBtn');if(b)b.textContent=notifyOn?L('notifyOn'):L('notifyOff')}
async function toggleNotify(){
  if(notifyOn){notifyOn=false;store.set('noor-notify',false);paintNotifyBtn();scheduleAll();return}
  notifyOn=true;store.set('noor-notify',true);chime();
  try{
    if(LN){
      try{const ex=await LN.checkExactNotificationSetting();if(ex&&ex.exact_alarm==='denied'){toast(L('notifyExact'));await LN.changeExactNotificationSetting()}}catch(e){}
    }else if('Notification' in window){
      if(Notification.permission==='default'){const r=await Notification.requestPermission();if(r!=='granted')toast(L('notifyDenied'))}
      else if(Notification.permission==='denied')toast(L('notifyDenied'));
    }
  }catch(e){}
  paintNotifyBtn();
  await scheduleAll();
  if(LN){if(!lastErr)toast(lastCount+' '+L('notifyCount'))}else toast(canTrigger()?L('notifyHintApp'):L('notifyHintWeb'));
}

/* ───── Dates ───── */
function dateLine(){
  const now=new Date(),ar=lang==='ar';
  const h=new Intl.DateTimeFormat(ar?'ar-SA-u-ca-islamic-umalqura-nu-latn':'en-u-ca-islamic-umalqura',{weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(now).replace(/\s*(هـ|AH)$/,'');
  const g=new Intl.DateTimeFormat(ar?'ar-SA-u-ca-gregory-nu-latn':'en-GB',{day:'numeric',month:'long',year:'numeric'}).format(now);
  $('#hijriDate').textContent=h+' '+L('hijriSuffix');$('#gregDate').textContent=g;
}

/* ───── Ramadan ───── */
const hijriParts=d=>{const p=new Intl.DateTimeFormat('en-u-ca-islamic-umalqura',{day:'numeric',month:'numeric',year:'numeric'}).formatToParts(d),o={};p.forEach(x=>o[x.type]=parseInt(x.value,10));return o};
let rdCache={key:'',target:null};
function nextRamadan(now){
  const key=now.toDateString();if(rdCache.key===key)return rdCache.target;
  let target=null;const today=hijriParts(now);
  if(today.month===9)target={inRamadan:true,day:today.day};
  else for(let i=1;i<=400;i++){const d=new Date(now.getFullYear(),now.getMonth(),now.getDate()+i,12),p=hijriParts(d);if(p.month===9&&p.day===1){target={date:new Date(d.getFullYear(),d.getMonth(),d.getDate()),year:p.year};break}}
  rdCache={key,target};return target;
}
const pad=n=>String(n).padStart(2,'0'),f2=d=>d.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'});
function paint(){
  const now=new Date();dateLine();
  /* horaires */
  const today=computeDay(now,loc.lat,loc.lng,method),order=['Fajr','Sunrise','Dhuhr','Asr','Maghrib','Isha'],keys={Fajr:'fajr',Sunrise:'sunrise',Dhuhr:'dhuhr',Asr:'asr',Maghrib:'maghrib',Isha:'isha'};
  let next=null;
  for(const n of ['Fajr','Dhuhr','Asr','Maghrib','Isha']){const d=today[keys[n]];if(d&&d>now){next={n,d};break}}
  if(!next){const tm=computeDay(new Date(now.getFullYear(),now.getMonth(),now.getDate()+1),loc.lat,loc.lng,method);next={n:'Fajr',d:tm.fajr}}
  $('#prayerGrid').innerHTML=order.map(n=>`<div class="pcell ${next&&next.n===n?'next':''}"><span>${L(n)}</span><strong>${today[keys[n]]?f2(today[keys[n]]):'--:--'}</strong></div>`).join('');
  checkAlerts(now,today,keys);paintNotifyBtn();
  paintQibla();
  $('#locLabel').textContent=loc.gps?`${L('locMine')} · ${loc.lat}, ${loc.lng}`:L('locDefault');
  if(next&&next.d){const s=Math.max(0,Math.floor((next.d-now)/1000));$('#nextPrayer').textContent=`${L('nextPrayer')}: ${L(next.n)} — ${L('in')} ${pad(Math.floor(s/3600))}:${pad(Math.floor(s%3600/60))}:${pad(s%60)}`}
  /* ramadan */
  const rd=nextRamadan(now),box=$('#ramadanBox');
  if(!rd){box.hidden=true}else{
    box.hidden=false;
    if(rd.inRamadan){$('#rdTitle').textContent=`${L('ramadanNow')} ${rd.day}`;$('#rdCount').hidden=true}
    else{const s=Math.max(0,Math.floor((rd.date-now)/1000));$('#rdTitle').textContent=`${L('ramadanIn')} ${rd.year}`;$('#rdCount').hidden=false;
      $('#rdCount').innerHTML=[[Math.floor(s/86400),'days'],[Math.floor(s%86400/3600),'hours'],[Math.floor(s%3600/60),'minutes'],[s%60,'seconds']].map(([v,k])=>`<div><strong>${pad(v)}</strong><small>${L(k)}</small></div>`).join('')}
    $('#rdNote').textContent=L('ramadanNote');
  }
}
function init(){
  if(!$('#prayerGrid'))return;
  $('#methodSelect').innerHTML=Object.keys(METHODS).map(k=>`<option value="${k}">${L('m_'+k)}</option>`).join('');$('#methodSelect').value=method;
  $('#methodSelect').addEventListener('change',e=>{method=e.target.value;store.set('noor-method',method);paint();scheduleAll()});
  $('#locBtn').addEventListener('click',()=>askLocation(true));
  $('#compassBtn').addEventListener('click',toggleCompass);
  $('#notifyBtn').addEventListener('click',toggleNotify);const tb=$('#testBtn');if(tb)tb.addEventListener('click',testNotify);
  $('#langBtn').addEventListener('click',()=>{document.querySelectorAll('#methodSelect option').forEach(o=>o.textContent=L('m_'+o.value));$('#locBtn').textContent=L('locGps');$('#compassBtn').textContent=L('compass');rdCache.key='';paint();scheduleAll()});
  document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));$('#locBtn').textContent=L('locGps');$('#compassBtn').textContent=L('compass');
  document.querySelectorAll('#methodSelect option').forEach(o=>o.textContent=L('m_'+o.value));
  paint();setInterval(paint,1000);scheduleAll();document.addEventListener('visibilitychange',()=>{if(!document.hidden)scheduleAll()});
  if(!store.get('noor-loc',null))askLocation(false);
}
init();
window.__noorPrayer={qiblaBearing,computeDay,hijriParts,nextRamadan};
})();
