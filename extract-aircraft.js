const fs = require('fs');

const content = fs.readFileSync('data/aircraft.ts', 'utf-8');
const lines = content.split('\n');
const aircraft = [];
let id = '';
let name = '';
const categories = ['Commercial', 'Combat Aircraft', 'General Aviation', 'Vintage', 'Combat Support Aircraft', 'Combat Training Aircraft', 'Civil Jet Airliners', 'Civil Turboprop Airliners', 'Civil Utility', 'Private Executive Aircraft', 'Private Light Aircraft', 'Helicopters'];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Extract id
  const idMatch = line.match(/id:\s*['"]([^'"]+)['"]/);
  if (idMatch) {
    id = idMatch[1];
  }
  
  // Extract name
  const nameMatch = line.match(/name:\s*['"]([^'"]+)['"]/);
  if (nameMatch) {
    name = nameMatch[1];
  }
  
  // Add if both exist and not a category
  if (id && name && !categories.includes(id)) {
    aircraft.push({ id, name });
    id = '';
    name = '';
  }
}

// Remove duplicates
const uniqueAircraft = Array.from(new Map(aircraft.map(a => [a.id, a])).values());

// Create CSV
let csv = 'id,name\n';
uniqueAircraft.forEach(a => {
  csv += `"${a.id}","${a.name.replace(/"/g, '""')}"\n`;
});

fs.writeFileSync('aircraft-list.csv', csv);
console.log(`✓ Created CSV with ${uniqueAircraft.length} aircraft entries`);
