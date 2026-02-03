// This script checks aircraft.ts for planes missing images and writes them to CSV
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images/aircraft');
const aircraftFile = path.join(__dirname, '../data/aircraft.ts');

const imageFiles = new Set(fs.readdirSync(imagesDir).map(f => f.replace(/\.[^.]+$/, '')));

const aircraftText = fs.readFileSync(aircraftFile, 'utf8');
const aircraftRegex = /{\s*id:\s*'([^']+)',\s*name:\s*'([^']+)'/g;
const missing = [];
let match;
while ((match = aircraftRegex.exec(aircraftText)) !== null) {
  const id = match[1];
  const name = match[2];
  if (!imageFiles.has(id)) {
    missing.push({ id, name });
  }
}

const csv = 'id,name\n' + missing.map(x => `${x.id},"${x.name}"`).join('\n');
fs.writeFileSync(path.join(__dirname, '../planes_missing_images.csv'), csv);
console.log('CSV generated:', missing.length, 'planes without images');
