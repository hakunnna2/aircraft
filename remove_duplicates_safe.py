import re
import json

def find_aircraft_entry(lines, id_line_num):
    """
    Find the complete aircraft entry starting from the id: line
    Returns (start_line, end_line) where lines are 0-indexed
    """
    # The entry starts with '  {' just before the id: line
    start = id_line_num - 1  # Line before id: should be the opening brace
    
    # Make sure it's actually the opening brace
    while start >= 0 and lines[start].strip() != '{':
        start -= 1
    
    if start < 0:
        return None
    
    # Now find the closing brace
    brace_count = 0
    i = start
    while i < len(lines):
        line = lines[i]
        # Count braces
        for char in line:
            if char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0:
                    # Found the end - include the comma if it's on the next line
                    if i + 1 < len(lines) and lines[i].strip() == '},':
                        return (start, i)
                    elif lines[i].strip().endswith('},'):
                        return (start, i)
                    else:
                        # The comma might be on the same line as }
                        return (start, i)
        i += 1
    
    return None

def remove_duplicates():
    # Read the file
    with open(r"c:\Users\hakun\Desktop\skypedia---aircraft-encyclopedia (2)\data\aircraft.ts", 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Find all aircraft IDs and their line numbers (1-indexed)
    id_pattern = re.compile(r"^\s*id: '([^']+)',\s*$")
    aircraft_ids = {}
    
    for i, line in enumerate(lines):
        match = id_pattern.match(line)
        if match:
            aircraft_id = match.group(1)
            if aircraft_id not in aircraft_ids:
                aircraft_ids[aircraft_id] = []
            aircraft_ids[aircraft_id].append(i)  # 0-indexed
    
    # Find duplicates (second occurrences to remove)
    duplicates = {k: v for k, v in aircraft_ids.items() if len(v) > 1}
    
    print(f"Found {len(duplicates)} duplicate IDs")
    
    # For each duplicate, remove the SECOND occurrence (keep the first)
    lines_to_remove = set()
    
    for aircraft_id, id_lines in sorted(duplicates.items()):
        # Remove all but the first occurrence
        for id_line in id_lines[1:]:
            entry_range = find_aircraft_entry(lines, id_line)
            if entry_range:
                start, end = entry_range
                for i in range(start, end + 1):
                    lines_to_remove.add(i)
                print(f"  Removing {aircraft_id}: lines {start+1}-{end+1}")
            else:
                print(f"  WARNING: Could not find complete entry for {aircraft_id} at line {id_line+1}")
    
    # Also remove the extra closing brace around line 10124
    # Find it
    for i in range(10120, min(10130, len(lines))):
        if lines[i].strip() == '}' and i > 0:
            # Check if this is likely the extra one
            prev_line = lines[i-1].strip()
            if prev_line.startswith('specs:') or prev_line == '},':
                # Check next line
                if i + 1 < len(lines):
                    next_line = lines[i+1].strip()
                    if next_line == '' and i + 2 < len(lines) and lines[i+2].strip() == '':
                        lines_to_remove.add(i)
                        print(f"  Removing extra brace at line {i+1}")
                        break
    
    # Create new content without removed lines
    new_lines = [line for i, line in enumerate(lines) if i not in lines_to_remove]
    
    # Write back
    with open(r"c:\Users\hakun\Desktop\skypedia---aircraft-encyclopedia (2)\data\aircraft.ts", 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    
    print(f"\nRemoved {len(lines_to_remove)} lines")
    print(f"File reduced from {len(lines)} to {len(new_lines)} lines")
    
    # Verify we still have all unique IDs
    id_pattern = re.compile(r"^\s*id: '([^']+)',\s*$")
    remaining_ids = set()
    for line in new_lines:
        match = id_pattern.match(line)
        if match:
            aircraft_id = match.group(1)
            if aircraft_id in remaining_ids:
                print(f"ERROR: {aircraft_id} still appears multiple times!")
            remaining_ids.add(aircraft_id)
    
    print(f"Final count: {len(remaining_ids)} unique aircraft")

if __name__ == '__main__':
    remove_duplicates()
