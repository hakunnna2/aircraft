from PIL import Image
import os

# Folder containing your images (same folder as script)
folder = os.path.dirname(os.path.abspath(__file__))

# Allowed image extensions (add AVIF and WebP)
image_extensions = (".png", ".bmp", ".gif", ".tiff", ".jpeg", ".jpg", ".webp", ".avif")

for filename in os.listdir(folder):
    input_path = os.path.join(folder, filename)

    # Skip if not a file
    if not os.path.isfile(input_path):
        continue

    # Skip files that are not images
    if not filename.lower().endswith(image_extensions):
        continue

    try:
        # Open image
        with Image.open(input_path) as img:
            img = img.convert("RGB")  # convert to RGB for JPG

            # Keep same name, change extension to .jpg
            base_name = os.path.splitext(filename)[0]
            output_path = os.path.join(folder, f"{base_name}.jpg")

            img.save(output_path, "JPEG", quality=98, optimize=True, subsampling=0)

            # Remove original if not already JPG
            if not filename.lower().endswith(".jpg"):
                os.remove(input_path)

    except Exception as e:
        print(f"Failed to convert {filename}: {e}")

print("All images converted to JPG!")
