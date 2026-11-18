NOOR AL-DHIKR — v8.8

v8.8 (diagnostic notifications)
- Nouveau bouton 🧪 : programme une alerte test dans 60 s et affiche l'état (permission, alarmes exactes, canal, nb d'alertes). Ferme l'app et attends.
- La programmation n'annule plus les anciennes alertes avant d'avoir réussi les étapes risquées (avant : une erreur = zéro alerte).
- Le canal n'est plus supprimé/recréé à chaque ouverture.

NOOR AL-DHIKR — v8.7

v8.7 (correctif notifications app fermée)
- Détection Android plus fiable (registerPlugin) : avant, si elle échouait, l'app retombait en mode "page web" = alertes seulement app ouverte.
- Le service worker n'est plus utilisé dans l'APK (il pouvait servir d'anciens fichiers) et est supprimé s'il existe déjà.
- Permission USE_EXACT_ALARM ajoutée (Android 13/14 : alarmes exactes sans réglage manuel) + vérification à chaque ouverture.
- Le canal de notification est recréé à chaque programmation (son/importance toujours à jour).
- Programmation 30 jours à l'avance (au lieu de 14).
- Les erreurs ne sont plus silencieuses ; après avoir appuyé sur la cloche, un message indique le nombre d'alertes programmées.

NOOR AL-DHIKR — v8.6

v8.6
- Notifications de prière : l'app est maintenant installable (manifest.json + sw.js) et les alertes passent par le service worker.
- Son à l'entrée de l'heure : assets/audio/noor_adhan.wav.
- Pour que ça sonne APP FERMÉE : version APK (voir APK_ANDROID.txt). Le système Android programme les 14 prochains jours (5 prières/jour) et les reprogramme à chaque ouverture.
- Sans APK (simple page web) : la limite vient du navigateur, l'alerte marche seulement app/page ouverte.

NOOR AL-DHIKR — v8.5

v8.5
- Compteurs des adhkar (matin / soir) : plus jamais sauvegardés. Ils repartent à zéro à chaque ouverture/fermeture de l'app, et dès que toute la série est terminée.
- Les compteurs sont séparés entre matin et soir.
- Boutons en double du hero supprimés (ابدأ أذكار… / افتح المسبحة).
- Nouveau bouton المصحف الشريف au-dessus des adhkar : onglets, carte متابعة القراءة et liste des 114 sourates (suras.js). La lecture des sourates sera branchée ensuite.

NOOR AL-DHIKR — v8.4

v8.4
- Plus AUCUNE voix synthétique (voix de l'appareil / ElevenLabs supprimées).
- Seuls les passages du Coran (Ayat al-Kursi, Ikhlas/Falaq/Nas, 6 duas coraniques) sont lus, par la voix du Sheikh Mishary Alafasy (MP3 en streaming).
- Les autres invocations n'ont plus de bouton « Écouter » ; « Play the whole series » ne lit que celles qui ont une vraie récitation.
- Pour ajouter une voix d'homme réelle sur une invocation : mets le fichier dans assets/audio/{id}.mp3
  et ajoute l'id dans la liste ownAudio de app.js (ex. const ownAudio=['m1','e3'];).

NOOR AL-DHIKR — v4

Files: index.html, style.css, app.js, data.js, assets/ (bg.jpg, header.jpg, footer.jpg)
Keep everything in the same folder, open index.html.

Content
- Morning (24) and evening (22) adhkar, with Arabic, English, repetitions and reference.
- Library with filter buttons: general, sleep, waking, after prayer, leaving home,
  mosque (enter/leave), market, duas from the Quran. New entries live in data.js.
- Always verify every Arabic text, translation, count and reference with a trusted source before public release.

Audio
- Quranic passages play a MALE reciter MP3 (Sheikh Mishary Alafasy) streamed from the Islamic Network CDN:
  https://cdn.islamic.network/quran/audio/128/ar.alafasy/{ayah number}.mp3
  Nothing is bundled. Internet is required. Copyrights stay with the reciters; re-check terms before commercial release.
