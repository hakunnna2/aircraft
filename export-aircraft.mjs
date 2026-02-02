#!/usr/bin/env node

// Simple script to extract all aircraft IDs and names
// Run: node export-aircraft.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read the aircraft data file
const aircraftDataPath = path.join(__dirname, 'data/aircraft.ts');
const fileContent = fs.readFileSync(aircraftDataPath, 'utf-8');

// Extract all aircraft objects using regex
const aircraftRegex = /\{\s*id:\s*'([^']+)',\s*name:\s*'([^']+)',/g;
const aircraftList = [];
let match;

while ((match = aircraftRegex.exec(fileContent)) !== null) {
  aircraftList.push({
    id: match[1],
    name: match[2]
  });
}

// Output formats
console.log('='.repeat(60));
console.log(`TOTAL AIRCRAFT: ${aircraftList.length}`);
console.log('='.repeat(60));
console.log('');

// Format 1: Simple list
console.log('ID | NAME');
console.log('-'.repeat(60));
aircraftList.forEach(aircraft => {
  console.log(`${aircraft.id} | ${aircraft.name}`);
});

// Format 2: JSON file
const jsonOutput = {
  total: aircraftList.length,
  timestamp: new Date().toISOString(),
  aircraft: aircraftList
};

const outputPath = path.join(__dirname, 'aircraft-list.json');
fs.writeFileSync(outputPath, JSON.stringify(jsonOutput, null, 2));
console.log(`\n✓ JSON exported to: aircraft-list.json`);

// Format 3: CSV file
const csvOutput = 'ID,NAME\n' + aircraftList.map(a => `${a.id},${a.name}`).join('\n');
const csvPath = path.join(__dirname, 'aircraft-list.csv');
fs.writeFileSync(csvPath, csvOutput);
console.log(`✓ CSV exported to: aircraft-list.csv`);

console.log('\n✓ Complete!');
