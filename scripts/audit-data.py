#!/usr/bin/env python3
"""
Data Audit Script - Comprehensive validation of aircraft data
"""

import os
import re
import json
from pathlib import Path
from collections import defaultdict

def main():
    print('🔍 Starting Data Audit...\n')
    
    root_dir = Path(__file__).parent.parent
    
    # 1. Check aircraft data file
    print('📋 Checking aircraft data integrity...')
    data_path = root_dir / 'data' / 'aircraft.ts'
    
    if not data_path.exists():
        print('❌ aircraft.ts not found')
        return False
    
    content = data_path.read_text(encoding='utf-8')
    aircraft_matches = re.findall(r"id:\s*'([^']+)'", content)
    print(f'✅ Found {len(aircraft_matches)} aircraft records\n')
    
    # 2. Check for missing images
    print('🖼️  Checking aircraft images...')
    images_dir = root_dir / 'public' / 'images' / 'aircraft'
    available_images = set()
    
    if images_dir.exists():
        for img_file in images_dir.iterdir():
            if img_file.is_file() and not img_file.name == 'convert.py':
                name_without_ext = img_file.stem
                available_images.add(name_without_ext)
    
    print(f'✅ Found {len(available_images)} image files\n')
    
    # 3. Check category images
    print('📸 Checking category images...')
    categories_dir = root_dir / 'public' / 'images' / 'categories'
    category_images = []
    
    if categories_dir.exists():
        category_images = [f.name for f in categories_dir.iterdir() if f.is_file()]
    
    print(f'✅ Found {len(category_images)} category images')
    print(f'   Images: {", ".join(sorted(category_images[:3]))}... and {len(category_images)-3} more\n')
    
    # 4. Extract aircraft data from TypeScript file
    print('🔬 Validating data structure...')
    
    # Parse aircraft records from TypeScript
    aircraft_pattern = r"\{\s*id:\s*'([^']+)'.*?description:\s*'([^']+)'.*?image:\s*'([^']+)'"
    matches = re.findall(aircraft_pattern, content, re.DOTALL)
    
    missing_images = []
    categories = defaultdict(int)
    engine_types = set()
    countries = set()
    
    # Look for category assignments in data
    category_pattern = r"category:\s*'([^']+)'"
    category_matches = re.findall(category_pattern, content)
    for cat in category_matches:
        categories[cat] += 1
    
    # Extract engine types
    engine_pattern = r"engineType:\s*'([^']+)'"
    engine_matches = re.findall(engine_pattern, content)
    engine_types.update(engine_matches)
    
    # Extract countries
    country_pattern = r"country:\s*'([^']+)'"
    country_matches = re.findall(country_pattern, content)
    countries.update(country_matches)
    
    # Check for missing images
    print('Checking for missing image files...')
    missing_count = 0
    for id_val, desc, image_path in matches:
        if image_path and not image_path.startswith('http'):
            img_name = image_path.split('/')[-1].split('.')[0]
            if img_name not in available_images:
                missing_images.append((id_val, image_path))
                missing_count += 1
    
    if missing_count == 0:
        print('✅ All aircraft images present in filesystem')
    else:
        print(f'⚠️  Found {missing_count} missing images:')
        for aircraft_id, image_path in missing_images[:10]:
            print(f'   - {aircraft_id}: {image_path}')
        if len(missing_images) > 10:
            print(f'   ... and {len(missing_images) - 10} more')
    
    print()
    
    # 5. Validate category references
    print('🏷️  Validating category references...')
    valid_categories = set(categories.keys())
    print(f'✅ Found {len(valid_categories)} categories\n')
    
    # 6. Summary Statistics
    print('📊 Data Summary:')
    print(f'   Total Aircraft: {len(aircraft_matches)}')
    print(f'   Total Categories: {len(categories)}')
    print(f'   Unique Engine Types: {len(engine_types)}')
    print(f'   Countries: {len(countries)}')
    
    print('\n📈 Aircraft by Category:')
    for cat, count in sorted(categories.items(), key=lambda x: -x[1]):
        print(f'   {cat}: {count}')
    
    print('\n✅ Data audit complete!')
    return True

if __name__ == '__main__':
    success = main()
    exit(0 if success else 1)
