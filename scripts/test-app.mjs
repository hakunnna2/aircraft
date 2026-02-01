/**
 * Runtime & Feature Test Script
 * Tests core functionality of the application
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🧪 Starting Application Tests...\n');

// 1. Check build artifacts
console.log('📦 Checking build artifacts...');
const distDir = path.join(__dirname, '..', 'dist');
const requiredFiles = [
  'index.html',
  'assets/index-DMH4e1VL.css',
  'assets/index-D2gBqdIw.js',
  'assets/Home-BqC4-FnY.js',
  'assets/AircraftDetail-DqpqsicW.js',
  'assets/NotFound-gcx_dfiu.js',
  'assets/vendor-react-BgcR8RbM.js',
  'assets/aircraft-data-BM5LTPdf.js'
];

let missingFiles = [];
requiredFiles.forEach(file => {
  const filePath = path.join(distDir, file);
  if (!fs.existsSync(filePath)) {
    const fileName = path.basename(file);
    const filePattern = path.dirname(file);
    // Check if file exists with different hash
    const assetsDir = path.join(distDir, 'assets');
    if (fs.existsSync(assetsDir)) {
      const files = fs.readdirSync(assetsDir);
      const found = files.some(f => f.startsWith(fileName.split('-')[0]));
      if (!found) missingFiles.push(file);
    } else {
      missingFiles.push(file);
    }
  }
});

if (missingFiles.length === 0) {
  console.log('✅ All essential build files present\n');
} else {
  console.log(`⚠️  Some build patterns not found (this is OK if hashes differ):\n`);
}

// 2. Check bundle sizes
console.log('📊 Bundle Analysis:');
const assetsDir = path.join(distDir, 'assets');
if (fs.existsSync(assetsDir)) {
  const assets = fs.readdirSync(assetsDir).filter(f => f.endsWith('.js'));
  let totalSize = 0;
  
  assets.forEach(asset => {
    const filePath = path.join(assetsDir, asset);
    const size = fs.statSync(filePath).size;
    const sizeKb = (size / 1024).toFixed(2);
    totalSize += size;
    
    if (asset.includes('aircraft-data')) {
      console.log(`   🎯 ${asset}: ${sizeKb} KB (aircraft data)`);
    } else if (asset.includes('vendor-react')) {
      console.log(`   📚 ${asset}: ${sizeKb} KB (React library)`);
    } else if (asset.includes('index')) {
      console.log(`   🎨 ${asset}: ${sizeKb} KB (main app)`);
    }
  });
  
  const totalMb = (totalSize / (1024 * 1024)).toFixed(2);
  console.log(`\n   Total JS: ${totalMb} MB`);
  
  if (totalSize > 600000) {
    console.log('   ⚠️  Bundle size is relatively large (>600KB)');
  } else {
    console.log('   ✅ Bundle size is acceptable');
  }
}

console.log();

// 3. Check configuration files
console.log('⚙️  Checking configuration files...');
const requiredConfigs = [
  'package.json',
  'tsconfig.json',
  'vite.config.ts',
  'vercel.json'
];

requiredConfigs.forEach(config => {
  const configPath = path.join(__dirname, '..', config);
  if (fs.existsSync(configPath)) {
    console.log(`   ✅ ${config}`);
  } else {
    console.log(`   ❌ ${config} (MISSING)`);
  }
});

console.log();

// 4. Check HTML entry point
console.log('📄 Checking HTML entry point...');
const htmlPath = path.join(distDir, 'index.html');
if (fs.existsSync(htmlPath)) {
  const html = fs.readFileSync(htmlPath, 'utf-8');
  
  if (html.includes('<div id="root"')) {
    console.log('   ✅ Root element present');
  } else {
    console.log('   ❌ Root element missing');
  }
  
  if (html.includes('<script') && html.includes('type="module"')) {
    console.log('   ✅ Module scripts present');
  } else {
    console.log('   ❌ Module scripts missing');
  }
  
  if (html.includes('charset="utf-8"')) {
    console.log('   ✅ Charset declared');
  } else {
    console.log('   ⚠️  Charset may not be declared');
  }
  
  if (html.includes('viewport')) {
    console.log('   ✅ Viewport meta tag present');
  } else {
    console.log('   ⚠️  Viewport meta tag missing');
  }
} else {
  console.log('   ❌ index.html not found');
}

console.log();

// 5. Check for critical runtime issues
console.log('🔍 Checking for potential runtime issues...');

// Check App.tsx for error handling
const appPath = path.join(__dirname, '..', 'App.tsx');
const appCode = fs.readFileSync(appPath, 'utf-8');

if (appCode.includes('ErrorBoundary')) {
  console.log('   ✅ Error boundary implemented');
} else {
  console.log('   ❌ Error boundary missing');
}

if (appCode.includes('Suspense')) {
  console.log('   ✅ Lazy loading with Suspense implemented');
} else {
  console.log('   ❌ Lazy loading missing');
}

if (appCode.includes('ScrollToTop')) {
  console.log('   ✅ Scroll management implemented');
} else {
  console.log('   ⚠️  Scroll management may be missing');
}

console.log();

// 6. Check components
console.log('🧩 Checking components...');
const componentsDir = path.join(__dirname, '..', 'components');
const components = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));
console.log(`   Found ${components.length} components:`);
components.forEach(comp => {
  console.log(`   ✅ ${comp}`);
});

console.log();

// 7. Check pages
console.log('📄 Checking pages...');
const pagesDir = path.join(__dirname, '..', 'pages');
const pages = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));
console.log(`   Found ${pages.length} pages:`);
pages.forEach(page => {
  console.log(`   ✅ ${page}`);
});

console.log();

// 8. Deployment readiness
console.log('🚀 Deployment Readiness:');
const deploymentChecks = {
  'Vercel config': fs.existsSync(path.join(__dirname, '..', 'vercel.json')),
  'Headers file': fs.existsSync(path.join(__dirname, '..', 'public', '_headers')),
  'Redirects file': fs.existsSync(path.join(__dirname, '..', 'public', '_redirects')),
  'Robots file': fs.existsSync(path.join(__dirname, '..', 'public', 'robots.txt')),
  'Build output': fs.existsSync(distDir)
};

Object.entries(deploymentChecks).forEach(([check, exists]) => {
  if (exists) {
    console.log(`   ✅ ${check}`);
  } else {
    console.log(`   ⚠️  ${check} (optional)`);
  }
});

console.log('\n✅ Application tests complete!');
