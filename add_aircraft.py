#!/usr/bin/env python3
"""
Aircraft Data Management Tool
Helps you add new aircraft safely with duplicate detection and validation
"""

import re
import json
import csv
from pathlib import Path
from typing import Dict, List, Tuple

# Valid values
VALID_CATEGORIES = {
    'Civil Jet Airliners',
    'Civil Turboprop Airliners',
    'Civil Utility',
    'Combat Aircraft',
    'Combat Support Aircraft',
    'Combat Training Aircraft',
    'Private Executive Aircraft',
    'Private Light Aircraft',
    'Helicopters',
    'Unmanned Aerial Vehicle (UAV)'
}

VALID_ENGINE_TYPES = {
    'Jet',
    'Turboprop',
    'Turbofan',
    'Turbofan (Poussée vectorielle)',
    'Propfan',
    'Piston',
    'Radial',
    'Ducted Fan',
    'Turbine',
    'Piston / Turboprop',
    'Radial / Turboprop',
    'Turboprop / Jet'
}

REQUIRED_FIELDS = {
    'id', 'name', 'category', 'role', 'manufacturer', 'country',
    'engineType', 'enginesCount', 'recognitionTips', 'description', 'specs'
}

REQUIRED_SPEC_FIELDS = {'wingspan', 'length', 'height', 'payload'}


class AircraftValidator:
    def __init__(self, aircraft_file: str = 'data/aircraft.ts'):
        self.aircraft_file = Path(aircraft_file)
        self.existing_aircraft = self._load_existing_aircraft()
        
    def _load_existing_aircraft(self) -> Dict[str, Tuple[str, str]]:
        """Load all existing aircraft IDs and names"""
        with open(self.aircraft_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        aircraft_pattern = r"id:\s*'([^']+)',\s+name:\s*'([^']+)',"
        matches = re.findall(aircraft_pattern, content, re.MULTILINE)
        return {
            aid.lower(): (aid, name) 
            for aid, name in matches
        }
    
    def _normalize_name(self, name: str) -> str:
        """Normalize aircraft name for comparison"""
        return name.strip().lower().replace('  ', ' ')
    
    def validate_aircraft(self, aircraft: Dict) -> Tuple[bool, List[str]]:
        """Validate a single aircraft object"""
        errors = []
        
        # Check required fields
        missing = REQUIRED_FIELDS - set(aircraft.keys())
        if missing:
            errors.append(f"❌ Missing fields: {', '.join(missing)}")
        
        # Validate ID
        if 'id' in aircraft:
            aircraft_id = aircraft['id']
            if not isinstance(aircraft_id, str):
                errors.append(f"❌ ID must be a string, got {type(aircraft_id)}")
            elif not aircraft_id:
                errors.append("❌ ID cannot be empty")
            elif aircraft_id.lower() in self.existing_aircraft:
                existing_id, existing_name = self.existing_aircraft[aircraft_id.lower()]
                errors.append(f"❌ ID '{aircraft_id}' already exists for '{existing_name}'")
        
        # Validate name
        if 'name' in aircraft:
            name = aircraft['name']
            if not isinstance(name, str):
                errors.append(f"❌ Name must be a string, got {type(name)}")
            elif not name:
                errors.append("❌ Name cannot be empty")
            else:
                normalized_name = self._normalize_name(name)
                for existing_id, (_, existing_name) in self.existing_aircraft.items():
                    if self._normalize_name(existing_name) == normalized_name:
                        errors.append(f"❌ Name '{name}' is a duplicate of '{existing_name}'")
                        break
        
        # Validate category
        if 'category' in aircraft:
            category = aircraft['category']
            if category not in VALID_CATEGORIES:
                errors.append(f"❌ Invalid category: '{category}'")
                errors.append(f"   Valid options: {', '.join(sorted(VALID_CATEGORIES))}")
        
        # Validate engine type
        if 'engineType' in aircraft:
            engine_type = aircraft['engineType']
            if engine_type not in VALID_ENGINE_TYPES:
                errors.append(f"❌ Invalid engineType: '{engine_type}'")
                errors.append(f"   Valid options: {', '.join(sorted(VALID_ENGINE_TYPES))}")
        
        # Validate engines count
        if 'enginesCount' in aircraft:
            count = aircraft['enginesCount']
            if not isinstance(count, int) or count < 1:
                errors.append(f"❌ enginesCount must be a positive integer, got {count}")
        
        # Validate recognition tips
        if 'recognitionTips' in aircraft:
            tips = aircraft['recognitionTips']
            if not isinstance(tips, list):
                errors.append(f"❌ recognitionTips must be a list, got {type(tips)}")
            elif len(tips) < 3:
                errors.append(f"❌ recognitionTips must have at least 3 items, got {len(tips)}")
            elif not all(isinstance(t, str) for t in tips):
                errors.append(f"❌ All recognitionTips must be strings")
        
        # Validate description
        if 'description' in aircraft:
            desc = aircraft['description']
            if not isinstance(desc, str):
                errors.append(f"❌ description must be a string, got {type(desc)}")
            elif len(desc) < 20:
                errors.append(f"❌ description too short (min 20 chars), got {len(desc)}")
        
        # Validate specs
        if 'specs' in aircraft:
            specs = aircraft['specs']
            if not isinstance(specs, dict):
                errors.append(f"❌ specs must be a dict, got {type(specs)}")
            else:
                missing_spec = REQUIRED_SPEC_FIELDS - set(specs.keys())
                if missing_spec:
                    errors.append(f"❌ specs missing: {', '.join(missing_spec)}")
                # Ensure no empty spec values
                for spec_key, spec_value in specs.items():
                    if not spec_value or not isinstance(spec_value, str):
                        errors.append(f"❌ specs.{spec_key} is empty or invalid")
        
        # Validate other string fields
        for field in ['manufacturer', 'country', 'role']:
            if field in aircraft:
                value = aircraft[field]
                if not isinstance(value, str) or not value:
                    errors.append(f"❌ {field} must be a non-empty string")
        
        return len(errors) == 0, errors
    
    def format_for_typescript(self, aircraft: Dict) -> str:
        """Format aircraft as TypeScript object"""
        lines = ["  {"]
        
        # ID - use single quotes, no apostrophes in ID
        aircraft_id = aircraft['id'].replace("'", "")
        lines.append(f"    id: '{aircraft_id}',")
        
        # Name - use double quotes to safely handle apostrophes
        name_escaped = aircraft['name'].replace('\\', '\\\\').replace('"', '\\"')
        lines.append(f"    name: \"{name_escaped}\",")
        
        # Category
        lines.append(f"    category: '{aircraft['category']}',")
        
        # Role - use double quotes for apostrophes
        role_escaped = aircraft['role'].replace('\\', '\\\\').replace('"', '\\"')
        lines.append(f"    role: \"{role_escaped}\",")
        
        # Manufacturer
        lines.append(f"    manufacturer: '{aircraft['manufacturer']}',")
        
        # Country
        lines.append(f"    country: '{aircraft['country']}',")
        
        # Engine Type
        lines.append(f"    engineType: '{aircraft['engineType']}',")
        
        # Engines Count
        lines.append(f"    enginesCount: {aircraft['enginesCount']},")
        
        # Recognition Tips - NO TRAILING COMMA on last item
        lines.append("    recognitionTips: [")
        tips = aircraft['recognitionTips']
        for i, tip in enumerate(tips):
            # Escape backslashes first, then quotes
            tip_escaped = tip.replace('\\', '\\\\').replace('"', '\\"')
            # No comma after the last tip
            comma = "" if i == len(tips) - 1 else ","
            lines.append(f"      \"{tip_escaped}\"{comma}")
        lines.append("    ],")
        
        # Description - use double quotes
        desc_escaped = aircraft['description'].replace('\\', '\\\\').replace('"', '\\"')
        lines.append(f"    description: \"{desc_escaped}\",")
        
        # Specs
        specs = aircraft['specs']
        lines.append("    specs: {")
        lines.append(f"      wingspan: '{specs['wingspan']}',")
        lines.append(f"      length: '{specs['length']}',")
        lines.append(f"      height: '{specs['height']}',")
        lines.append(f"      payload: '{specs['payload']}'")
        lines.append("    }")
        
        lines.append("  },")
        
        return "\n".join(lines)
    
    def validate_batch(self, aircraft_list: List[Dict]) -> Tuple[bool, Dict]:
        """Validate multiple aircraft"""
        results = {
            'valid': [],
            'invalid': []
        }
        
        for aircraft in aircraft_list:
            is_valid, errors = self.validate_aircraft(aircraft)
            if is_valid:
                results['valid'].append(aircraft)
            else:
                results['invalid'].append({
                    'aircraft': aircraft,
                    'errors': errors
                })
        
        return len(results['invalid']) == 0, results


def interactive_add():
    """Interactive mode to add a single aircraft"""
    print("\n" + "="*60)
    print("AIRCRAFT DATA MANAGEMENT TOOL - Interactive Add")
    print("="*60 + "\n")
    
    validator = AircraftValidator()
    
    aircraft = {}
    
    # Get basic info
    aircraft['id'] = input("Aircraft ID (lowercase, dashes): ").strip()
    aircraft['name'] = input("Aircraft Name: ").strip()
    aircraft['manufacturer'] = input("Manufacturer: ").strip()
    aircraft['country'] = input("Country: ").strip()
    
    # Category
    print("\nValid Categories:")
    for i, cat in enumerate(sorted(VALID_CATEGORIES), 1):
        print(f"  {i}. {cat}")
    aircraft['category'] = input("Select category name: ").strip()
    
    # Engine Type
    print("\nValid Engine Types:")
    engine_types = sorted(VALID_ENGINE_TYPES)
    for i, eng in enumerate(engine_types, 1):
        print(f"  {i}. {eng}")
    aircraft['engineType'] = input("Select engine type name: ").strip()
    
    # Other fields
    aircraft['enginesCount'] = int(input("Number of engines: "))
    aircraft['role'] = input("Aircraft role/purpose: ").strip()
    aircraft['description'] = input("Description (min 20 chars): ").strip()
    
    # Recognition tips
    print("\nRecognition Tips (at least 3):")
    tips = []
    for i in range(1, 4):
        tip = input(f"  Tip {i}: ").strip()
        if tip:
            tips.append(tip)
    aircraft['recognitionTips'] = tips
    
    # Specs
    print("\nSpecs:")
    aircraft['specs'] = {
        'wingspan': input("  Wingspan (e.g., '35.8 m'): ").strip(),
        'length': input("  Length (e.g., '70.7 m'): ").strip(),
        'height': input("  Height (e.g., '19.4 m'): ").strip(),
        'payload': input("  Payload (e.g., '350,000 kg'): ").strip(),
    }
    
    # Validate
    print("\n" + "-"*60)
    is_valid, errors = validator.validate_aircraft(aircraft)
    
    if is_valid:
        print("✓ VALIDATION PASSED!\n")
        print("Formatted TypeScript code:")
        print("-"*60)
        print(validator.format_for_typescript(aircraft))
        print("-"*60)
        
        save = input("\nSave to aircraft.ts? (y/n): ").lower()
        if save == 'y':
            # Append to file
            with open('data/aircraft.ts', 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Find the last aircraft before ];
            insert_pos = content.rfind('];')
            if insert_pos != -1:
                formatted = validator.format_for_typescript(aircraft)
                new_content = content[:insert_pos] + formatted + "\n" + content[insert_pos:]
                
                with open('data/aircraft.ts', 'w', encoding='utf-8') as f:
                    f.write(new_content)
                
                print("✓ Aircraft added to data/aircraft.ts!")
                print("✓ Refresh your browser to see the new aircraft.")
            else:
                print("❌ Could not find insertion point in aircraft.ts")
    else:
        print("✗ VALIDATION FAILED!\n")
        for error in errors:
            print(error)


def validate_file():
    """Validate the entire aircraft file"""
    print("\n" + "="*60)
    print("FILE VALIDATION")
    print("="*60 + "\n")
    
    validator = AircraftValidator()
    
    with open('data/aircraft.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Count aircraft
    aircraft_count = len(re.findall(r"id:\s*'[^']+',", content))
    
    print(f"Total aircraft entries: {aircraft_count}")
    print(f"Existing unique IDs: {len(validator.existing_aircraft)}")
    
    # Check for syntax issues
    errors = []
    
    # Check array structure
    if not re.search(r"const AIRCRAFT_DATA_RAW.*\[", content, re.DOTALL):
        errors.append("❌ AIRCRAFT_DATA_RAW array not found")
    
    if not re.search(r"\];", content):
        errors.append("❌ Array closing bracket not found")
    
    # Check for common issues
    if re.search(r',\s*,', content):
        errors.append("❌ Double commas found (syntax error)")
    
    if re.search(r'}\s*}\s*,', content):
        errors.append("❌ Double closing braces found (syntax error)")
    
    if errors:
        print("\n⚠️ ISSUES FOUND:")
        for error in errors:
            print(error)
    else:
        print("✓ File structure looks valid!")


def import_csv():
    """Import aircraft from CSV file"""
    print("\n" + "="*60)
    print("CSV IMPORT")
    print("="*60 + "\n")
    
    csv_file = input("Enter CSV file path (e.g., aircraft_data.csv): ").strip()
    
    if not Path(csv_file).exists():
        print(f"❌ File not found: {csv_file}")
        return
    
    try:
        aircraft_list = []
        
        with open(csv_file, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            
            if reader.fieldnames is None:
                print("❌ CSV file is empty or invalid")
                return
            
            print(f"CSV Columns found: {', '.join(reader.fieldnames)}\n")
            
            for row_num, row in enumerate(reader, 1):
                # Clean up the row (remove extra spaces)
                clean_row = {k: v.strip() if isinstance(v, str) else v for k, v in row.items() if v}
                
                # Parse recognition tips (can be semicolon or pipe separated)
                tips_str = clean_row.get('recognitionTips', '')
                if tips_str:
                    tips = [t.strip() for t in re.split(r'[;|]', tips_str) if t.strip()]
                else:
                    tips = []
                
                # Build aircraft object
                aircraft = {
                    'id': clean_row.get('id', ''),
                    'name': clean_row.get('name', ''),
                    'category': clean_row.get('category', ''),
                    'role': clean_row.get('role', ''),
                    'manufacturer': clean_row.get('manufacturer', ''),
                    'country': clean_row.get('country', ''),
                    'engineType': clean_row.get('engineType', ''),
                    'enginesCount': int(clean_row.get('enginesCount', 0)) if clean_row.get('enginesCount', '').isdigit() else 0,
                    'recognitionTips': tips,
                    'description': clean_row.get('description', ''),
                    'specs': {
                        'wingspan': clean_row.get('wingspan', ''),
                        'length': clean_row.get('length', ''),
                        'height': clean_row.get('height', ''),
                        'payload': clean_row.get('payload', '')
                    }
                }
                
                aircraft_list.append(aircraft)
        
        print(f"✓ Loaded {len(aircraft_list)} aircraft from CSV\n")
        
        # Validate
        validator = AircraftValidator()
        is_valid, results = validator.validate_batch(aircraft_list)
        
        print("-"*60)
        print(f"Valid: {len(results['valid'])} ✓")
        print(f"Invalid: {len(results['invalid'])} ❌")
        print("-"*60 + "\n")
        
        # Show invalid ones
        if results['invalid']:
            print("⚠️ INVALID AIRCRAFT:\n")
            for item in results['invalid']:
                aircraft = item['aircraft']
                print(f"  • {aircraft.get('name', 'Unknown')} (ID: {aircraft.get('id', 'N/A')})")
                for error in item['errors']:
                    print(f"    {error}")
                print()
        
        # Show valid ones
        if results['valid']:
            print("✓ VALID AIRCRAFT:\n")
            for aircraft in results['valid']:
                print(f"  • {aircraft['name']} ({aircraft['manufacturer']}) - {aircraft['country']}")
            print()
            
            # Ask to save
            save = input(f"Save {len(results['valid'])} aircraft to data/aircraft.ts? (y/n): ").lower()
            
            if save == 'y':
                with open('data/aircraft.ts', 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Find the last aircraft before ];
                insert_pos = content.rfind('];')
                if insert_pos != -1:
                    formatted_aircraft = []
                    for aircraft in results['valid']:
                        formatted_aircraft.append(validator.format_for_typescript(aircraft))
                    
                    new_content = content[:insert_pos] + "\n".join(formatted_aircraft) + "\n" + content[insert_pos:]
                    
                    with open('data/aircraft.ts', 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    
                    print(f"\n✓ Successfully added {len(results['valid'])} aircraft!")
                    print("✓ Refresh your browser to see the new aircraft.")
                else:
                    print("❌ Could not find insertion point in aircraft.ts")
    
    except Exception as e:
        print(f"❌ Error reading CSV: {str(e)}")


def main():
    """Main entry point"""
    while True:
        print("\n" + "="*60)
        print("AIRCRAFT DATA MANAGEMENT")
        print("="*60)
        print("1. Add aircraft interactively")
        print("2. Import from CSV file")
        print("3. Validate entire file")
        print("4. Exit")
        print("="*60)
        
        choice = input("Choose option (1-4): ").strip()
        
        if choice == '1':
            interactive_add()
        elif choice == '2':
            import_csv()
        elif choice == '3':
            validate_file()
        elif choice == '4':
            print("\nGoodbye!")
            break
        else:
            print("Invalid choice, try again.")


if __name__ == '__main__':
    main()
