// Copie les fichiers de l'app dans www/ (dossier lu par Capacitor)
const fs=require('fs');
fs.rmSync('www',{recursive:true,force:true});fs.mkdirSync('www');
for(const f of ['index.html','style.css','app.js','data.js','suras.js','prayer.js','manifest.json','sw.js'])fs.copyFileSync(f,'www/'+f);
fs.cpSync('assets','www/assets',{recursive:true});
console.log('www/ prêt');
