import os
import re
from datetime import datetime
from typing import List, Dict

try:
    from openpyxl import Workbook
except ImportError as exc:
    raise SystemExit(
        "openpyxl is required. Install with: pip install openpyxl"
    ) from exc

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
AIRCRAFT_TS_PATH = os.path.join(ROOT_DIR, "data", "aircraft.ts")
OUTPUT_XLSX_PATH = os.path.join(ROOT_DIR, "aircraft_missing_images.xlsx")

ID_RE = re.compile(r"\bid\s*:\s*['\"](.*?)['\"]")
NAME_RE = re.compile(r"\bname\s*:\s*['\"](.*?)['\"]")
IMAGE_EXT_RE = re.compile(r"\bimageExt\s*:\s*['\"](.*?)['\"]")


def parse_aircraft(file_path: str) -> List[Dict[str, str]]:
    aircraft: List[Dict[str, str]] = []
    current: Dict[str, str] = {}
    in_block = False
    depth = 0

    with open(file_path, "r", encoding="utf-8") as f:
        for line in f:
            if "const AIRCRAFT_DATA_RAW" in line:
                in_block = True
                continue

            if not in_block:
                continue

            if depth == 0 and line.strip() == "];":
                break

            id_match = ID_RE.search(line)
            if id_match:
                current["id"] = id_match.group(1).strip()

            name_match = NAME_RE.search(line)
            if name_match:
                current["name"] = name_match.group(1).strip()

            image_ext_match = IMAGE_EXT_RE.search(line)
            if image_ext_match:
                current["imageExt"] = image_ext_match.group(1).strip()

            depth += line.count("{")
            depth -= line.count("}")

            if depth == 0 and current.get("id"):
                if "name" in current:
                    aircraft.append(current)
                current = {}

    # Deduplicate by normalized name (same logic as aircraft.ts)
    seen_names = set()
    deduplicated = []
    for a in aircraft:
        normalized = a.get("name", "").strip().lower().replace("  ", " ").replace("  ", " ")
        if normalized not in seen_names:
            seen_names.add(normalized)
            deduplicated.append(a)

    return deduplicated


def build_image_path(aircraft_id: str, image_ext: str | None) -> str:
    ext = image_ext or "jpg"
    return f"/images/aircraft/{aircraft_id}.{ext}"


def is_missing_image(image_path: str) -> bool:
    # image_path format: "/images/aircraft/id.ext"
    normalized = image_path.lstrip("/")  # "images/aircraft/id.ext"
    full_path = os.path.join(ROOT_DIR, "public", normalized)
    full_path = os.path.normpath(full_path)  # Normalize path separators
    exists = os.path.exists(full_path)
    return not exists


def main() -> None:
    aircraft = parse_aircraft(AIRCRAFT_TS_PATH)
    ids = {a.get("id") for a in aircraft if a.get("id")}

    images_dir = os.path.join(ROOT_DIR, "public", "images", "aircraft")
    image_files = [
        f for f in os.listdir(images_dir)
        if os.path.isfile(os.path.join(images_dir, f))
    ]
    image_basenames = {os.path.splitext(f)[0] for f in image_files}

    missing = []
    for a in aircraft:
        aircraft_id = a.get("id")
        if not aircraft_id:
            continue
        image_path = build_image_path(aircraft_id, a.get("imageExt"))
        if is_missing_image(image_path):
            missing.append({
                "id": aircraft_id,
                "name": a.get("name", ""),
                "image": image_path
            })

    unused = [
        f for f in image_files
        if os.path.splitext(f)[0] not in ids
    ]

    wb = Workbook()
    ws = wb.active
    ws.title = "Missing Images"

    ws.append(["ID", "Name", "Image Path"])
    for item in missing:
        ws.append([item.get("id", ""), item.get("name", ""), item.get("image", "")])

    ws_unused = wb.create_sheet(title="Unused Images")
    ws_unused.append(["Image File", "Reason"])
    for filename in sorted(unused):
        ws_unused.append([filename, "No matching aircraft id"])

    print(f"Aircraft parsed: {len(aircraft)}")
    print(f"Images found: {len(image_files)}")
    print(f"Missing images for aircraft: {len(missing)}")
    print(f"Unused images (no matching id): {len(unused)}")

    try:
        wb.save(OUTPUT_XLSX_PATH)
        print(f"Saved report to: {OUTPUT_XLSX_PATH}")
    except PermissionError:
        timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
        fallback_path = os.path.join(ROOT_DIR, f"aircraft_missing_images_{timestamp}.xlsx")
        wb.save(fallback_path)
        print(
            f"Target file is locked. Saved report to: {fallback_path}"
        )


if __name__ == "__main__":
    main()
