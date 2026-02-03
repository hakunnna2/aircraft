import re
from collections import defaultdict

# Read the file
with open(r"c:\Users\hakun\Desktop\skypedia---aircraft-encyclopedia (2)\data\aircraft.ts", 'r', encoding='utf-8') as f:
    content = f.read()
    lines = content.split('\n')

# Find all aircraft IDs and their line numbers
id_pattern = re.compile(r"^\s*id: '([^']+)',\s*$")
aircraft_ids = defaultdict(list)

for i, line in enumerate(lines, 1):
    match = id_pattern.match(line)
    if match:
        aircraft_id = match.group(1)
        aircraft_ids[aircraft_id].append(i)

# Find duplicates
print("=== DUPLICATE IDs (appearing more than once) ===\n")
duplicates = {k: v for k, v in aircraft_ids.items() if len(v) > 1}
for aircraft_id, line_numbers in sorted(duplicates.items()):
    print(f"{aircraft_id}: lines {line_numbers}")

print(f"\n\nTotal aircraft entries: {len(aircraft_ids)}")
print(f"Duplicate IDs: {len(duplicates)}")
print(f"Total duplicate entries: {sum(len(v) - 1 for v in duplicates.values())}")

# Check for entries after line 7800
print("\n\n=== All aircraft IDs after line 7800 ===\n")
late_entries = {k: v for k, v in aircraft_ids.items() if any(ln > 7800 for ln in v)}
for aircraft_id, line_numbers in sorted(late_entries.items(), key=lambda x: min(x[1])):
    is_dup = " (DUPLICATE)" if len(line_numbers) > 1 else ""
    print(f"{aircraft_id}: lines {line_numbers}{is_dup}")
