#!/usr/bin/env python3
"""Remove duplicate aircraft entries from aircraft.ts"""

import re

# Read the file
with open(r'c:\Users\hakun\Desktop\skypedia---aircraft-encyclopedia (2)\data\aircraft.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Split into header (before AIRCRAFT_DATA_RAW) and data section
header_match = re.search(r'(.*?const AIRCRAFT_DATA_RAW.*?\[)', content, re.DOTALL)
footer_match = re.search(r'(\];\s*export const AIRCRAFT_DATA.*)', content, re.DOTALL)

if not header_match or not footer_match:
    print("ERROR: Could not find data boundaries")
    exit(1)

header = header_match.group(1)
footer = footer_match.group(1)

# Extract the aircraft data section
data_start = header_match.end()
data_end = footer_match.start()
data_section = content[data_start:data_end]

# Split into individual aircraft entries (each starts with {)
# We'll parse each entry and track by ID
entries = []
current_entry = []
brace_depth = 0
seen_ids = set()
duplicate_count = 0

for line in data_section.split('\n'):
    if line.strip().startswith('{'):
        brace_depth = 1
        current_entry = [line]
    elif current_entry:
        current_entry.append(line)
        brace_depth += line.count('{') - line.count('}')
        
        if brace_depth == 0 and line.strip().startswith('}'):
            # Entry complete
            entry_text = '\n'.join(current_entry)
            
            # Extract ID
            id_match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", entry_text)
            if id_match:
                aircraft_id = id_match.group(1)
                
                if aircraft_id not in seen_ids:
                    entries.append(entry_text)
                    seen_ids.add(aircraft_id)
                else:
                    duplicate_count += 1
                    print(f"Removing duplicate: {aircraft_id}")
            
            current_entry = []

# Reconstruct the file
# Remove trailing commas from each entry before joining
cleaned_entries = []
for entry in entries:
    entry = entry.rstrip()
    if entry.endswith(','):
        entry = entry[:-1]
    cleaned_entries.append(entry)

new_content = header + '\n' + ',\n'.join(cleaned_entries) + '\n' + footer

# Write back
with open(r'c:\Users\hakun\Desktop\skypedia---aircraft-encyclopedia (2)\data\aircraft.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"\n✅ Deduplication complete!")
print(f"   - Kept: {len(seen_ids)} unique aircraft")
print(f"   - Removed: {duplicate_count} duplicates")
