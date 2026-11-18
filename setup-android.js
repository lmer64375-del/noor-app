// À lancer après "npx cap add android" / "npx cap sync" : copie le son + ajoute les permissions
const fs=require('fs'),path=require('path');
const raw='android/app/src/main/res/raw';
fs.mkdirSync(raw,{recursive:true});
fs.copyFileSync('assets/audio/noor_adhan.wav',path.join(raw,'noor_adhan.wav'));
const mf='android/app/src/main/AndroidManifest.xml';
let x=fs.readFileSync(mf,'utf8');
for(const p of ['POST_NOTIFICATIONS','SCHEDULE_EXACT_ALARM','USE_EXACT_ALARM','VIBRATE','RECEIVE_BOOT_COMPLETED','WAKE_LOCK']){
  if(!x.includes('android.permission.'+p))x=x.replace('</manifest>','    <uses-permission android:name="android.permission.'+p+'" />\n</manifest>');
}
fs.writeFileSync(mf,x);
console.log('Son + permissions Android OK');
