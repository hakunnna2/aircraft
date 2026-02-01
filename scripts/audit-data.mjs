#!/usr/bin/env node
/**
 * Data Audit Script
 * Validates aircraft data for integrity and missing assets
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

console.log('🔍 Starting Data Audit...\n');

// 1. Check aircraft data file
console.log('📋 Checking aircraft data integrity...');
try {
  const dataPath = path.join(rootDir, 'data', 'aircraft.ts');
  const content = fs.readFileSync(dataPath, 'utf-8');
  
  // Extract AIRCRAFT_DATA count
  const exportMatch = content.match(/export const AIRCRAFT_DATA: Aircraft\[\]/);
  if (!exportMatch) {
    console.error('❌ AIRCRAFT_DATA export not found');
    process.exit(1);
  }
  
  // Count aircraft definitions
  const aircraftMatches = content.match(/id: '[^']+'/g) || [];
  console.log(`✅ Found ${aircraftMatches.length} aircraft records\n`);
} catch (error) {
  console.error('❌ Error reading aircraft data:', error.message);
  process.exit(1);
}

// 2. Check for missing images
console.log('🖼️  Checking aircraft images...');
const imagesDir = path.join(rootDir, 'public', 'images', 'aircraft');
const availableImages = new Set(fs.readdirSync(imagesDir).map(f => path.parse(f).name));

console.log(`✅ Found ${availableImages.size} image files\n`);

// 3. Check category images
console.log('📸 Checking category images...');
const categoriesDir = path.join(rootDir, 'public', 'images', 'categories');
const categoryImages = fs.readdirSync(categoriesDir);
console.log(`✅ Found ${categoryImages.length} category images`);
console.log(`   Images: ${categoryImages.join(', ')}\n`);

// 4. Check for data structure issues
console.log('🔬 Validating data structure...');
try {
  // Import the data using file:// URL
  const dataModulePath = path.join(rootDir, 'data', 'aircraft.ts');
  const fileUrl = new URL(`file:///${dataModulePath.replace(/\\/g, '/')}`).href;
  const dataModule = await import(fileUrl);
  const aircraftData = dataModule.AIRCRAFT_DATA || [];
  
  let issues = 0;
  const missingImages = [];
  
  aircraftData.forEach((aircraft, idx) => {
    // Check required fields
    const requiredFields = ['id', 'name', 'category', 'role', 'manufacturer', 'country', 'engineType', 'enginesCount', 'image', 'description', 'specs'];
    
    for (const field of requiredFields) {
      if (!aircraft[field]) {
        console.log(`❌ Aircraft #${idx + 1} (${aircraft.name || 'Unknown'}) missing field: ${field}`);
        issues++;
      }
    }
    
    // Check image exists
    if (aircraft.image && !aircraft.image.startsWith('http')) {
      const imageName = path.parse(aircraft.image).name;
      if (!availableImages.has(imageName)) {
        missingImages.push({
          aircraft: aircraft.name,
          id: aircraft.id,
          image: aircraft.image
        });
      }
    }
    
    // Check specs
    if (aircraft.specs) {
      const specFields = ['wingspan', 'length', 'height', 'payload'];
      for (const field of specFields) {
        if (!aircraft.specs[field]) {
          console.log(`⚠️  Aircraft ${aircraft.name} missing spec: ${field}`);
        }
      }
    }
  });
  
  if (missingImages.length > 0) {
    console.log(`\n⚠️  Missing Image Files (${missingImages.length}):`);
    missingImages.forEach(({ aircraft, id, image }) => {
      console.log(`   - ${aircraft} (${id}): ${image}`);
    });
  } else {
    console.log('✅ All aircraft images present in filesystem');
  }
  
  if (issues === 0) {
    console.log('✅ All aircraft records have required fields\n');
  }
  
  // 5. Validate category references
  console.log('🏷️  Validating category references...');
  const validCategories = new Set(dataModule.CATEGORIES.map(c => c.id));
  let invalidCategoryCount = 0;
  
  aircraftData.forEach(aircraft => {
    if (!validCategories.has(aircraft.category)) {
      console.log(`❌ Aircraft ${aircraft.name} has invalid category: ${aircraft.category}`);
      invalidCategoryCount++;
    }
  });
  
  if (invalidCategoryCount === 0) {
    console.log('✅ All aircraft have valid categories\n');
  }
  
  // 6. Summary Statistics
  console.log('📊 Data Summary:');
  console.log(`   Total Aircraft: ${aircraftData.length}`);
  console.log(`   Total Categories: ${dataModule.CATEGORIES.length}`);
  
  const enginesCount = new Set(aircraftData.map(a => a.engineType));
  console.log(`   Unique Engine Types: ${enginesCount.size}`);
  
  const countries = new Set(aircraftData.map(a => a.country));
  console.log(`   Countries: ${countries.size}`);
  
  const categoryBreakdown = {};
  aircraftData.forEach(a => {
    categoryBreakdown[a.category] = (categoryBreakdown[a.category] || 0) + 1;
  });
  
  console.log('\n📈 Aircraft by Category:');
  Object.entries(categoryBreakdown).sort((a, b) => b[1] - a[1]).forEach(([cat, count]) => {
    console.log(`   ${cat}: ${count}`);
  });
  
  console.log('\n✅ Data audit complete!');
  
} catch (error) {
  console.error('❌ Error during data validation:', error.message);
  process.exit(1);
}
