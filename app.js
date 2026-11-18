/* NOOR AL-DHIKR — Morning & Evening collection based on Hisn al-Muslim chapter 27/28.
   Arabic texts, counts and takhrij follow the referenced Quran.tv Hisn al-Muslim pages.
*/
const translations={
 ar:{brand:'نور الذكر',welcome:'مساحة هادئة لذكر الله',heroTitle:'وَاذْكُرُوا اللَّهَ كَثِيرًا',heroText:'اجعل لروحك نصيباً من السكينة… ذكرٌ تقرؤه أو تستمع إليه، في كل وقت.',startMorning:'ابدأ أذكار الصباح',openTasbih:'افتح المسبحة',mushaf:'المصحف الشريف',mushafSub:'القرآن الكريم · فهرس السور',reading:'القراءة',favSuras:'سور مفضلة',contSub:'متابعة القراءة · آية',pageWord:'صفحة',meccan:'مكية',medinan:'مدنية',suraWord:'سورة',soon:'قريباً إن شاء الله',noFavSuras:'لا توجد سور مفضلة بعد.',allFinished:'تقبّل الله منك · تمّ إكمال الأذكار وأُعيدت العدّادات',yourWorship:'عِبادتك اليومية',sections:'ماذا نقرأ اليوم؟',morning:'أذكار الصباح',morningSub:'ابدأ يومك بالذكر',evening:'أذكار المساء',eveningSub:'اختم يومك بالسكينة',tasbih:'المسبحة',tasbihSub:'سبّح واستغفر',library:'مكتبة الأذكار',librarySub:'أذكار منوعة',favorites:'المفضلة',favoritesSub:'أذكارك المحفوظة',dailyRemembrance:'ورد اليوم',digitalTasbih:'المسبحة الإلكترونية',takeBreath:'خذ لحظة للذكر',tasbihHint:'اختر الذكر، ثم المس الدائرة مع كل تسبيحة.',tapToCount:'اضغط للتسبيح',reset:'إعادة ضبط',target:'الهدف: 33',footer:'صُنع بمحبة · L-DESIGN DZ',listen:'استمع',stop:'إيقاف',markDone:'تمّ',done:'مكتمل',repeat:'التكرار',empty:'لا توجد أذكار هنا بعد.',morningTitle:'أذكار الصباح',eveningTitle:'أذكار المساء',libraryTitle:'مكتبة الأذكار',favoritesTitle:'الأذكار المفضلة',counted:'تقبّل الله ذكرك.',allDhikr:'الكل',sleepDhikr:'قبل النوم',wakeDhikr:'عند الاستيقاظ',prayerDhikr:'بعد الصلاة',countTap:'اضغط للعدّ',source:'المصدر',countProgress:'المنجز',remaining:'المتبقي'},
 en:{brand:'Noor Al-Dhikr',welcome:'A peaceful space for remembering Allah',heroTitle:'AND REMEMBER ALLAH OFTEN',heroText:'Give your soul a moment of peace through remembrance, reading or listening, at any time.',startMorning:'Morning adhkar',openTasbih:'Open tasbih',mushaf:'The Noble Quran',mushafSub:'Holy Quran · list of surahs',reading:'Reading',favSuras:'Favorite surahs',contSub:'Continue reading · verse',pageWord:'Page',meccan:'Meccan',medinan:'Medinan',suraWord:'Surah',soon:'Coming soon, in sha Allah',noFavSuras:'No favorite surahs yet.',allFinished:'May Allah accept it · adhkar completed, counters reset',yourWorship:'YOUR DAILY WORSHIP',sections:'What shall we read today?',morning:'Morning Adhkar',morningSub:'Begin your day with remembrance',evening:'Evening Adhkar',eveningSub:'End your day with peace',tasbih:'Tasbih',tasbihSub:'Glorify and seek forgiveness',library:'Dhikr Library',librarySub:'More remembrances',favorites:'Favorites',favoritesSub:'Your saved remembrances',dailyRemembrance:"TODAY'S REMEMBRANCE",digitalTasbih:'DIGITAL TASBIH',takeBreath:'Take a moment to remember',tasbihHint:'Choose a dhikr, then tap the circle with each recitation.',tapToCount:'TAP TO COUNT',reset:'Reset',target:'Target: 33',footer:'Made with care · L-DESIGN DZ',listen:'Listen',stop:'Stop',markDone:'Done',done:'Completed',repeat:'Repeat',empty:'No remembrances here yet.',morningTitle:'Morning Adhkar',eveningTitle:'Evening Adhkar',libraryTitle:'Dhikr Library',favoritesTitle:'Favorite Remembrances',counted:'May Allah accept your remembrance.',allDhikr:'All',sleepDhikr:'Before sleep',wakeDhikr:'Upon waking',prayerDhikr:'After prayer',countTap:'Tap to count',source:'Source',countProgress:'Completed',remaining:'Remaining'}
};
const common=[
{id:'kursi',ar:'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ\nاللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',en:'I seek refuge in Allah from the accursed Satan.\nAllah — there is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass nothing of His knowledge except what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.',count:1,ref:'Qur’an 2:255; al-Hakim 1/562; authenticated by al-Albani in Sahih al-Targhib 1/273'},
{id:'muawwidhat',ar:'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ\n\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِنْ شَرِّ مَا خَلَقَ ۝ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ\n\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ',en:'In the name of Allah, the Entirely Merciful, the Especially Merciful.\nSay: He is Allah, [who is] One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there any equivalent to Him.\n\nIn the name of Allah, the Entirely Merciful, the Especially Merciful.\nSay: I seek refuge in the Lord of daybreak, from the evil of that which He created, and from the evil of darkness when it settles, and from the evil of the blowers in knots, and from the evil of an envier when he envies.\n\nIn the name of Allah, the Entirely Merciful, the Especially Merciful.\nSay: I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind, from the evil of the retreating whisperer — who whispers in the breasts of mankind — among jinn and among mankind.',note:['سورة الإخلاص، ثم الفلق، ثم الناس.','Surah al-Ikhlas, then al-Falaq, then an-Nas.'],count:3,ref:'Abu Dawud 5082; al-Tirmidhi 3575'},
{id:'sayyid',ar:'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',en:'O Allah, You are my Lord. There is no deity except You. You created me and I am Your servant, and I keep Your covenant and Your promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your blessings upon me, and I acknowledge my sin, so forgive me, for none forgives sins except You.',count:1,ref:'Sahih al-Bukhari 6306'},
{id:'witness',ar:'اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ',en:'O Allah, this morning I call upon You, the bearers of Your Throne, Your angels and all Your creation to witness that You are Allah; there is no deity but You alone, without partner, and Muhammad is Your servant and Messenger.',count:4,ref:'Abu Dawud 5069; al-Bukhari in al-Adab al-Mufrad 1201'},
{id:'blessing',ar:'اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ',en:'O Allah, whatever blessing has come to me or to any of Your creation this morning is from You alone, without partner. To You belongs all praise and thanks.',count:1,ref:'Abu Dawud 5073; an-Nasa’i, Amal al-Yawm wa al-Laylah 7'},
{id:'health',ar:'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ',en:'O Allah, grant me well-being in my body, hearing and sight. There is no deity except You. I seek refuge in You from disbelief, poverty and the punishment of the grave.',count:3,ref:'Abu Dawud 5090; Ahmad 5/42'},
{id:'hasbi',ar:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ ۖ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',en:'Allah is sufficient for me. There is no deity except Him. In Him I put my trust, and He is the Lord of the Mighty Throne.',count:7,ref:'Abu Dawud 5081; Ibn as-Sunni 71'},
{id:'afw',ar:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي',en:'O Allah, I ask You for pardon and well-being in this world and the Hereafter. Grant me well-being in my religion, worldly life, family and wealth. Conceal my faults, calm my fears and protect me from every direction.',count:1,ref:'Abu Dawud 5074; Ibn Majah 3871'},
{id:'alim',ar:'اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ',en:'O Allah, Knower of the unseen and seen, Creator of the heavens and earth, Lord and Sovereign of everything: I seek refuge in You from the evil within myself, from Satan and his trap, and from bringing harm upon myself or another Muslim.',count:1,ref:'Abu Dawud 5067; al-Tirmidhi 3529'},
{id:'bismillah',ar:'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',en:'In the name of Allah, with whose name nothing on earth or in heaven can cause harm. He is the All-Hearing, All-Knowing.',count:3,ref:'Abu Dawud 5088; al-Tirmidhi 3388; Ibn Majah 3869'},
{id:'pleased',ar:'رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا',en:'I am pleased with Allah as my Lord, Islam as my religion and Muhammad ﷺ as my Prophet.',count:3,ref:'Abu Dawud 5072; al-Tirmidhi 3389'},
{id:'hayyu',ar:'يَا حَيُّ يَا قَيُّومُ، بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ',en:'O Ever-Living, O Sustainer, by Your mercy I seek help. Set right all my affairs and do not leave me to myself even for the blink of an eye.',count:1,ref:'Al-Hakim 1/545; Sahih at-Targhib 1/273'},
{id:'tasbih100',ar:'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',en:'Glory be to Allah and praise be to Him.',count:100,ref:'Sahih Muslim 2692; al-Bukhari 6405'},
{id:'tahlil10',ar:'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',en:'There is no deity but Allah alone, without partner. His is the dominion and praise, and He has power over all things.',count:10,ref:'An-Nasa’i, Amal al-Yawm wa al-Laylah 24; Sahih at-Targhib 1/272'},
{id:'tahlil100',ar:'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',en:'There is no deity but Allah alone, without partner. His is the dominion and praise, and He has power over all things.',count:100,ref:'Sahih al-Bukhari 3293; Sahih Muslim 2691'},
{id:'istighfar',ar:'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ',en:'I seek Allah’s forgiveness and repent to Him.',count:100,ref:'Sahih al-Bukhari 6307; Sahih Muslim 2702'},
{id:'salawat',ar:'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ',en:'O Allah, send Your blessings and peace upon our Prophet Muhammad.',count:10,ref:'At-Tabarani; Sahih at-Targhib wa at-Tarhib 1/273'},
{id:'salam',ar:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا',en:'O Allah, I ask You for beneficial knowledge, good provision and accepted deeds.',count:1,ref:'Ibn Majah 925'},
{id:'creation',ar:'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ',en:'Glory and praise be to Allah, as numerous as His creation, as pleasing to Him, as weighty as His Throne and as endless as His words.',count:3,ref:'Sahih Muslim 2726'},
];
const morningExtra=[
{id:'morning-opening',ar:'الْحَمْدُ لِلَّهِ وَحْدَهُ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى مَنْ لَا نَبِيَّ بَعْدَهُ',en:'All praise belongs to Allah alone, and peace and blessings be upon the one after whom there is no prophet.',count:1,ref:'Abu Dawud 3667; graded Hasan by al-Albani'},
{id:'morning-mulk',ar:'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ. رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ',en:'We have entered the morning and all dominion belongs to Allah. Praise be to Allah. There is no deity but Allah alone, without partner. His is the dominion and His is the praise, and He has power over all things. My Lord, I ask You for the good of this day and the good of what follows it, and I seek refuge in You from the evil of this day and the evil of what follows it. My Lord, I seek refuge in You from laziness and the evils of old age. My Lord, I seek refuge in You from punishment in the Fire and punishment in the grave.',count:1,ref:'Sahih Muslim 2723'},
{id:'morning-by-you',ar:'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ',en:'O Allah, by You we reach the morning and evening, by You we live and die, and to You is the resurrection.',count:1,ref:'At-Tirmidhi 3391'},
{id:'morning-day',ar:'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ: فَتْحَهُ وَنَصْرَهُ وَنُورَهُ وَبَرَكَتَهُ وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ',en:'We have entered the morning and all dominion belongs to Allah, Lord of the worlds. O Allah, I ask You for the good of this day: its opening, victory, light, blessings and guidance; and I seek refuge in You from its evil and the evil that follows it.',count:1,ref:'Abu Dawud 5084; graded Hasan by al-Arna’ut'},
{id:'morning-fitrah',ar:'أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ',en:'We have entered the morning upon the natural religion of Islam, the word of sincerity, the religion of our Prophet Muhammad ﷺ and the way of our father Abraham, upright and Muslim, not of the polytheists.',count:1,ref:'Ahmad 3/406; Ibn as-Sunni 34'},
];
const eveningExtra=[
{id:'evening-mulk',ar:'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا. رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ',en:'We have entered the evening and all dominion belongs to Allah. Praise be to Allah. There is no deity but Allah alone, without partner. His is the dominion and His is the praise, and He has power over all things. My Lord, I ask You for the good of this night and the good of what follows it, and I seek refuge in You from the evil of this night and the evil of what follows it. My Lord, I seek refuge in You from laziness and the evils of old age. My Lord, I seek refuge in You from punishment in the Fire and punishment in the grave.',count:1,ref:'Sahih Muslim 2723'},
{id:'evening-by-you',ar:'اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ',en:'O Allah, by You we reach the evening and morning, by You we live and die, and to You is the final return.',count:1,ref:'At-Tirmidhi 3391'},
{id:'evening-fitrah',ar:'أَمْسَيْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ',en:'We have entered the evening upon the natural religion of Islam, the word of sincerity, the religion of our Prophet Muhammad ﷺ and the way of our father Abraham, upright and Muslim, not of the polytheists.',count:1,ref:'Ahmad 3/406; Ibn as-Sunni 34'},
{id:'evening-protection',ar:'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',en:'I seek refuge in the perfect words of Allah from the evil of what He has created.',count:3,ref:'Ahmad 2/290; an-Nasa’i, Amal al-Yawm wa al-Laylah 590'},
];
const morning=[morningExtra[0],common[0],common[1],morningExtra[1],morningExtra[2],common[2],common[3],common[4],common[5],common[6],common[7],common[8],common[9],common[10],common[11],morningExtra[3],morningExtra[4],common[12],common[13],common[14],common[18],common[17],common[15],common[16]];
const evening=[morningExtra[0],common[0],common[1],eveningExtra[0],eveningExtra[1],common[2],{...common[3],id:'evening-witness',ar:common[3].ar.replace('أَصْبَحْتُ','أَمْسَيْتُ'),en:common[3].en.replace('this morning','this evening')},{...common[4],id:'evening-blessing',ar:common[4].ar.replace('أَصْبَحَ بِي','أَمْسَى بِي'),en:common[4].en.replace('this morning','this evening')},common[5],common[6],common[7],common[8],common[9],common[10],common[11],{...morningExtra[3],id:'evening-day',ar:'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ فَتْحَهَا وَنَصْرَهَا وَنُورَهَا وَبَرَكَتَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا',en:'We have entered the evening and all dominion belongs to Allah. O Allah, I ask You for the good of this night: its opening, victory, light and blessings; and I seek refuge in You from the evil of what is in it and the evil of what follows it.'},eveningExtra[2],common[12],common[13],common[15],eveningExtra[3],common[16]];
const library=[{...common[12],id:'lib-subhan',group:'library',category:'all'},{...common[14],id:'lib-tahlil',group:'library',category:'all'},{...common[15],id:'lib-istighfar',group:'library',category:'all'},{id:'sleep',group:'library',category:'sleep',ar:'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',en:'In Your name, O Allah, I die and I live.',count:1,ref:'Sahih al-Bukhari 6324; Sahih Muslim 2711'},{id:'wake',group:'library',category:'wake',ar:'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',en:'Praise be to Allah who gave us life after causing us to die, and to Him is the resurrection.',count:1,ref:'Sahih al-Bukhari 6312; Sahih Muslim 2711'},{id:'prayer',group:'library',category:'prayer',ar:'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',en:'O Allah, help me to remember You, thank You and worship You well.',count:1,ref:'Abu Dawud 1522; an-Nasa’i 1303'}];

/* ───── Nouvelles rubriques + libellés ───── */
library.push(...extraLibrary);
Object.assign(translations.ar,{listenAll:'استمع إلى السلسلة',stopAll:'إيقاف السلسلة',stopOne:'إيقاف',recitation:'تلاوة بصوت الشيخ مشاري العفاسي',recitationFull:'تُتلى الآية كاملة',audioError:'تعذّر تحميل التلاوة، تحقّق من اتصالك بالإنترنت.',cat_all:'الكل',cat_general:'عامة',cat_sleep:'النوم',cat_wake:'الاستيقاظ',cat_prayer:'بعد الصلاة',cat_home:'الخروج من البيت',cat_mosque:'المسجد',cat_market:'السوق',cat_quran:'أدعية من القرآن'});
Object.assign(translations.en,{listenAll:'Play the whole series',stopAll:'Stop the series',stopOne:'Stop',recitation:'Recitation by Sheikh Mishary Alafasy',recitationFull:'the full verse is recited',audioError:'Could not load the recitation. Check your internet connection.',cat_all:'All',cat_general:'General',cat_sleep:'Sleep',cat_wake:'Waking',cat_prayer:'After prayer',cat_home:'Leaving home',cat_mosque:'Mosque',cat_market:'Market',cat_quran:'Duas from the Quran'});
const libraryCats=['all','general','sleep','wake','prayer','home','mosque','market','quran'];

/* ───── Récitation MP3 (voix d'homme) — Islamic Network CDN, numéro d'ayah global ─────
   https://cdn.islamic.network/quran/audio/128/ar.alafasy/{n}.mp3  (streaming, rien n'est embarqué) */
const RECITER='ar.alafasy',BITRATE=128;
const range=(a,b)=>Array.from({length:b-a+1},(_,i)=>a+i);
const recitation={kursi:[262],s2:[262],muawwidhat:[...range(6222,6225),...range(6226,6230),...range(6231,6236)],s3:range(6222,6225),s4:range(6226,6230),s5:range(6231,6236),q1:[208],q2:[293],q3:[977],q4:range(2373,2376),q5:[2462],q6:[2929]};
const audioUrl=n=>`https://cdn.islamic.network/quran/audio/${BITRATE}/${RECITER}/${n}.mp3`;
const allItems=[...morning.map(x=>({...x,group:'morning'})),...evening.map(x=>({...x,group:'evening'})),...library];
const adhkar=allItems.map(x=>({...x,aud:recitation[x.id]||null}));

/* ───── État ───── */
const safeGet=(k,f)=>{try{return JSON.parse(localStorage.getItem(k))??f}catch(e){return f}};
const safeSet=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
let lang=(()=>{try{return localStorage.getItem('noor-lang')||'ar'}catch(e){return'ar'}})(),page='morning',activeFilter='all',
 done={},favs=safeGet('noor-favs',[]),counts={},count=0,target=33,mushafTab='mushaf';
/* Compteurs des adhkar : jamais sauvegardés. Ils repartent de zéro à chaque ouverture / fermeture de l'app. */
const keyOf=x=>x.group+':'+x.id;
function wipeCounters(){counts={};done={};try{localStorage.removeItem('noor-counts');localStorage.removeItem('noor-done')}catch(e){}}
wipeCounters();
addEventListener('pagehide',()=>{try{localStorage.removeItem('noor-counts');localStorage.removeItem('noor-done')}catch(e){}});
const $=s=>document.querySelector(s),t=k=>translations[lang][k]||k;
const pick=v=>Array.isArray(v)?v[lang==='ar'?0:1]:(v||'');
function showToast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(showToast.h);showToast.h=setTimeout(()=>el.classList.remove('show'),2600)}
function setLang(){document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));$('#langBtn').textContent=lang==='ar'?'EN':'عربي';$('#todayDate').textContent=new Intl.DateTimeFormat(lang==='ar'?'ar':'en',{weekday:'long',day:'numeric',month:'long'}).format(new Date());render()}

function currentItems(){
  if(page==='favorites')return adhkar.filter(x=>favs.includes(x.id));
  if(page==='library')return adhkar.filter(x=>x.group==='library'&&(activeFilter==='all'||(activeFilter==='general'?x.category==='all':x.category===activeFilter)));
  return adhkar.filter(x=>x.group===page);
}
/* Texte arabe + traduction. Si l'invocation contient plusieurs blocs (ex. al-Ikhlas / al-Falaq / an-Nas),
   chaque bloc arabe est suivi directement de SA traduction (et non tous les blocs arabes, puis toutes les traductions). */
function textBlocks(x){
  const br=v=>v.replaceAll('\n','<br>'),A=x.ar.split('\n\n'),E=x.en.split('\n\n');
  if(A.length>1&&A.length===E.length)return A.map((a,i)=>`<div class="dhikr-part"><div class="dhikr-text" lang="ar" dir="rtl">${br(a)}</div><div class="dhikr-translation">${br(E[i])}</div></div>`).join('');
  return `<div class="dhikr-text" lang="ar" dir="rtl">${br(x.ar)}</div><div class="dhikr-translation">${br(x.en)}</div>`;
}
function cardHTML(x,i){
  const K=keyOf(x),n=counts[K]||0,note=pick(x.note),ref=pick(x.ref);
  return `<article class="dhikr-card" data-card="${x.id}"><div class="dhikr-top"><span class="dhikr-number">${String(i+1).padStart(2,'0')} · ${x.count}×</span><button class="fav-btn ${favs.includes(x.id)?'saved':''}" data-fav="${x.id}" aria-label="Favorite">${favs.includes(x.id)?'♥':'♡'}</button></div>
  ${textBlocks(x)}
  ${note?`<div class="dhikr-note">${note}</div>`:''}
  ${ref?`<div class="dhikr-source"><b>${t('source')}:</b> ${ref}</div>`:''}
  ${x.aud?`<div class="rec-tag">🎙 ${t('recitation')}${x.aud.length&&['q1','q2','q3','q5','q6'].includes(x.id)?' · '+t('recitationFull'):''}</div>`:''}
  <div class="dhikr-bottom">${x.count>1?`<span class="repeat-pill">${t('repeat')}: ${x.count}</span>`:'<span></span>'}<div class="dhikr-actions"><button class="small-btn" data-count="${K}">＋ ${n}/${x.count}</button>${hasAudio(x)?`<button class="small-btn" data-listen="${x.id}">♫ ${t('listen')}</button>`:''}<button class="small-btn ${done[K]?'done':''}" data-done="${K}">${done[K]?'✓ '+t('done'):t('markDone')}</button></div></div></article>`}
function renderChips(){
  const box=$('#chips');box.hidden=page!=='library';if(page!=='library')return;
  box.innerHTML=libraryCats.map(c=>`<button class="chip ${c===activeFilter?'active':''}" data-cat="${c}" aria-pressed="${c===activeFilter}">${t('cat_'+c)}</button>`).join('');
}
function render(){
  const titles={morning:t('morningTitle'),evening:t('eveningTitle'),library:t('libraryTitle'),favorites:t('favoritesTitle')};
  $('#contentArea').hidden=page==='tasbih'||page==='mushaf';$('#tasbihPanel').hidden=page!=='tasbih';$('#mushafPanel').hidden=page!=='mushaf';
  document.querySelectorAll('.nav-card').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
  if(page==='mushaf'){renderMushaf();return}
  if(page==='tasbih')return;
  $('#pageTitle').textContent=titles[page]||t('dailyRemembrance');renderChips();
  const items=currentItems();$('#playAllBtn').hidden=!items.some(hasAudio);
  if(!items.length){$('#dhikrList').innerHTML=`<p class="dhikr-card">${t('empty')}</p>`;$('#progressLabel').textContent='0 / 0';$('#progressBar').style.width='0';return}
  const completed=items.filter(x=>done[keyOf(x)]).length;
  $('#progressLabel').textContent=`${completed} / ${items.length}`;$('#progressBar').style.width=(completed/items.length*100)+'%';
  $('#dhikrList').innerHTML=items.map(cardHTML).join('');updateAudioUI();
}

/* ───── Lecteur séquentiel : un seul son à la fois, l'item suivant démarre à la FIN du précédent ─────
   - Récitation MP3 (Mishary Alafasy) si disponible, sinon voix du navigateur.
   - Chaque étape est une Promise résolue UNE seule fois (fin, erreur ou annulation) : plus de double déclenchement.
   - Un seul élément <audio> réutilisé (nécessaire pour l'enchaînement automatique sur iPhone / Android). */
const player={token:0,queue:[],i:0,current:null,series:false,active:null};
const sharedAudio=new Audio();
const wait=ms=>new Promise(r=>setTimeout(r,ms));

function stopAudio(silent){
  player.token++;player.queue=[];player.i=0;player.current=null;player.series=false;
  const act=player.active;player.active=null;if(act)act();          // débloque l'étape en cours (annulée)
  sharedAudio.onended=sharedAudio.onerror=sharedAudio.onplaying=null;
  try{sharedAudio.pause();sharedAudio.removeAttribute('src');sharedAudio.load()}catch(e){}
  if(!silent)updateAudioUI();
}

/* Joue un MP3 jusqu'à la fin. Résultat : 'ended' | 'error' | 'cancelled' (toujours une seule fois). */
function playOne(url){
  return new Promise(resolve=>{
    let done=false;
    const fin=r=>{if(done)return;done=true;if(player.active===cancel)player.active=null;sharedAudio.onended=sharedAudio.onerror=null;resolve(r)};
    const cancel=()=>fin('cancelled');
    player.active=cancel;
    sharedAudio.onended=()=>fin('ended');
    sharedAudio.onerror=()=>fin('error');
    sharedAudio.src=url;
    const pr=sharedAudio.play();
    if(pr&&pr.catch)pr.catch(err=>fin(err&&err.name==='AbortError'?'cancelled':'error'));
  });
}

/* Lit UN item en entier (tous ses MP3 l'un après l'autre) puis rend la main.
   Aucune voix synthétique : seulement la récitation du Sheikh Mishary (Coran) ou tes propres enregistrements humains. */
async function playItem(x,token){
  const urls=x.aud?x.aud.map(audioUrl):[localAudioUrl(x.id)];
  for(let k=0;k<urls.length;k++){
    const r=await playOne(urls[k]);
    if(token!==player.token)return;
    if(r==='error'){showToast(t('audioError'));return}
  }
}
/* Enregistrements humains locaux : assets/audio/{id}.mp3 */
const localAudioUrl=id=>`assets/audio/${id}.mp3`;
/* Enregistrements HUMAINS ajoutés par toi dans assets/audio/{id}.mp3 : ajoute ici l'id de l'invocation, ex. ['m1','e3'] */
const ownAudio=[];
const hasAudio=x=>!!x.aud||ownAudio.includes(x.id);

async function runQueue(token){
  while(token===player.token&&player.i<player.queue.length){
    const id=player.queue[player.i],x=adhkar.find(a=>a.id===id);
    if(!x){player.i++;continue}
    player.current=id;updateAudioUI();
    const card=document.querySelector(`[data-card="${id}"]`);if(card&&player.series)card.scrollIntoView({behavior:'smooth',block:'center'});
    await playItem(x,token);
    if(token!==player.token)return;          // arrêté ou relancé pendant la lecture
    player.i++;
    await wait(500);                         // petite pause entre deux invocations
  }
  if(token===player.token)stopAudio();       // fin de la file
}
function startAudio(ids,series){stopAudio(true);player.queue=ids;player.series=series;runQueue(player.token)}
function toggleListen(id){if(player.current===id&&!player.series){stopAudio();return}startAudio([id],false)}
function toggleSeries(){if(player.series){stopAudio();return}startAudio(currentItems().filter(hasAudio).map(x=>x.id),true)}
function updateAudioUI(){
  document.querySelectorAll('[data-card]').forEach(c=>c.classList.toggle('playing',c.dataset.card===player.current));
  document.querySelectorAll('[data-listen]').forEach(b=>{const on=b.dataset.listen===player.current;b.textContent=(on?'■ ':'♫ ')+(on?t('stopOne'):t('listen'))});
  const pa=$('#playAllBtn');if(pa)pa.textContent=(player.series?'■ ':'▶ ')+(player.series?t('stopAll'):t('listenAll'));
}

/* ───── Événements ───── */
document.addEventListener('click',e=>{
  const nav=e.target.closest('[data-page]'),go=e.target.closest('[data-go]'),fav=e.target.closest('[data-fav]'),listen=e.target.closest('[data-listen]'),mark=e.target.closest('[data-done]'),inc=e.target.closest('[data-count]'),chip=e.target.closest('[data-cat]');
  if(nav){stopAudio(true);page=nav.dataset.page;activeFilter='all';render()}
  if(go){stopAudio(true);page=go.dataset.go;render();$('#contentArea').scrollIntoView({behavior:'smooth'})}
  if(chip){stopAudio(true);activeFilter=chip.dataset.cat;render()}
  if(fav){const id=fav.dataset.fav;favs=favs.includes(id)?favs.filter(v=>v!==id):[...favs,id];safeSet('noor-favs',JSON.stringify(favs));render()}
  if(listen)toggleListen(listen.dataset.listen);
  if(mark){const K=mark.dataset.done,x=adhkar.find(a=>keyOf(a)===K);done[K]=!done[K];counts[K]=done[K]&&x?x.count:0;render();checkFinished()}
  if(inc){const K=inc.dataset.count,x=adhkar.find(a=>keyOf(a)===K);if(x){counts[K]=Math.min(x.count,(counts[K]||0)+1);if(counts[K]>=x.count){done[K]=true;showToast(t('counted'))}render();checkFinished()}}
});

/* ───── Fin de série : quand tous les adhkar du matin / du soir sont terminés, les compteurs repartent à zéro ───── */
function checkFinished(){
  if(page!=='morning'&&page!=='evening')return;
  const items=currentItems();if(!items.length||!items.every(x=>done[keyOf(x)]))return;
  showToast(t('allFinished'));
  const grp=page;
  setTimeout(()=>{
    items.forEach(x=>{delete done[keyOf(x)];delete counts[keyOf(x)]});
    if(page===grp)render();
  },2600);
}

/* ───── Mushaf : menu + liste des sourates (la lecture sera branchée ensuite) ───── */
const arAyat=n=>n===1?'آية':n===2?'آيتان':(n>=3&&n<=10)?'آيات':'آية';
const arDigits=s=>String(s);
function renderMushaf(){
  document.querySelectorAll('.mtab').forEach(b=>b.classList.toggle('active',b.dataset.mtab===mushafTab));
  const lastSura=SURAS[1];                                   // dernier endroit lu (par défaut : Al-Baqara, verset 22)
  $('#contName').textContent=(lang==='ar'?'سورة ':'')+lastSura[1];
  $('#contSub').textContent=t('contSub')+' '+22+(lang==='ar'?'':'');
  const box=$('#suraList');
  if(mushafTab!=='mushaf'){box.innerHTML=`<p class="dhikr-card sura-empty">${mushafTab==='favsuras'?t('noFavSuras'):t('soon')}</p>`;return}
  box.innerHTML=SURAS.map(([n,name,ayat,med,pg])=>{
    const kind=med?t('medinan'):t('meccan');
    const verses=lang==='ar'?`${ayat} ${arAyat(ayat)}`:`${ayat} ${ayat===1?'verse':'verses'}`;
    return `<button class="sura-row" type="button" data-sura="${n}"><span class="sura-num"><b>${n}</b></span><span class="sura-info"><strong>${name}</strong><small>${kind} · ${verses}</small></span><span class="sura-page">${t('pageWord')} ${pg}</span><i class="sura-go">‹</i></button>`}).join('');
}
document.addEventListener('click',e=>{
  const tab=e.target.closest('[data-mtab]');
  if(tab){mushafTab=tab.dataset.mtab;renderMushaf();return}
  if(e.target.closest('[data-sura]')||e.target.closest('#continueCard'))showToast(t('soon'));
});
$('#playAllBtn').addEventListener('click',toggleSeries);
$('#langBtn').addEventListener('click',()=>{stopAudio(true);lang=lang==='ar'?'en':'ar';safeSet('noor-lang',lang);setLang()});
$('#themeBtn').addEventListener('click',()=>document.body.classList.toggle('light'));
$('#countBtn').addEventListener('click',()=>{count++;$('#countNumber').textContent=count;$('#roundCount').textContent=(count%target)+' / '+target;if(count%target===0)showToast(t('counted'))});$('#resetCount').addEventListener('click',()=>{count=0;$('#countNumber').textContent='0';$('#roundCount').textContent='0 / '+target});$('#targetBtn').addEventListener('click',()=>{target=target===33?100:target===100?500:33;$('#targetBtn').textContent=t('target').replace('33',target);$('#roundCount').textContent=(count%target)+' / '+target});$('#tasbihSelect').addEventListener('change',e=>$('#countPhrase').textContent=e.target.value);
setLang();
