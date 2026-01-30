#!/usr/bin/env python3
"""Remove duplicate aircraft entries from aircraft.ts - improved version"""

import re
import json

# Read the file
file_path = r'c:\Users\hakun\Desktop\skypedia---aircraft-encyclopedia (2)\data\aircraft.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find the start of AIRCRAFT_DATA_RAW array
start_idx = None
for i, line in enumerate(lines):
    if 'const AIRCRAFT_DATA_RAW' in line and '[' in line:
        start_idx = i + 1
        break

if not start_idx:
    print("ERROR: Could not find AIRCRAFT_DATA_RAW start")
    exit(1)

# Find the end (the closing ];)
end_idx = None
for i in range(len(lines) - 1, start_idx, -1):
    if re.match(r'^\];', lines[i].strip()):
        end_idx = i
        break

if not end_idx:
    print("ERROR: Could not find AIRCRAFT_DATA_RAW end")
    exit(1)

print(f"Processing lines {start_idx} to {end_idx}")

# Parse aircraft entries
entries = []
current_entry_lines = []
brace_count = 0
in_entry = False
seen_ids = set()
duplicate_count = 0

for i in range(start_idx, end_idx):
    line = lines[i]
    
    # Count braces
    open_braces = line.count('{')
    close_braces = line.count('}')
    
    if not in_entry and open_braces > 0:
        # Start of new entry
        in_entry = True
        brace_count = open_braces - close_braces
        current_entry_lines = [line]
    elif in_entry:
        current_entry_lines.append(line)
        brace_count += open_braces - close_braces
        
        if brace_count == 0:
            # Entry complete
            entry_text = ''.join(current_entry_lines)
            
            # Extract ID
            id_match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", entry_text)
            if id_match:
                aircraft_id = id_match.group(1)
                
                if aircraft_id not in seen_ids:
                    entries.append(current_entry_lines)
                    seen_ids.add(aircraft_id)
                else:
                    duplicate_count += 1
                    print(f"Removing duplicate: {aircraft_id} at line {i-len(current_entry_lines)+1}")
            
            current_entry_lines = []
            in_entry = False

# Reconstruct file
output_lines = lines[:start_idx]

for i, entry_lines in enumerate(entries):
    # Add entry
    output_lines.extend(entry_lines)
    
    # Don't add comma after last entry
    if i < len(entries) - 1:
        # Make sure last line has comma
        if not output_lines[-1].rstrip().endswith(','):
            output_lines[-1] = output_lines[-1].rstrip() + ',\n'

output_lines.extend(lines[end_idx:])

# Write back
with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(output_lines)

print(f"\n✅ Deduplication complete!")
print(f"   - Kept: {len(seen_ids)} unique aircraft")
print(f"   - Removed: {duplicate_count} duplicates")
