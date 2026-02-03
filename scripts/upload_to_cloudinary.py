"""
Upload aircraft images to Cloudinary
Run this script after setting up your Cloudinary account

Prerequisites:
1. Sign up at https://cloudinary.com (free tier: 25GB storage, 25GB bandwidth/month)
2. Install: pip install cloudinary
3. Get your credentials from Cloudinary Dashboard
4. Set environment variables or update this script with your credentials
"""

import os
import sys
from pathlib import Path
import cloudinary
import cloudinary.uploader
import cloudinary.api
from datetime import datetime
import time

# ====== CONFIGURATION ======
# Get these from your Cloudinary dashboard: https://cloudinary.com/console
CLOUD_NAME = "dccyjw8lu"  # Your cloud name
API_KEY = "393835988599719"        # Your API key
API_SECRET = "S177NVmHzyet0hRfuRaKXJ2B67g"  # Your API secret

# Or use environment variables (recommended)
CLOUD_NAME = os.getenv("CLOUDINARY_CLOUD_NAME", CLOUD_NAME)
API_KEY = os.getenv("CLOUDINARY_API_KEY", API_KEY)
API_SECRET = os.getenv("CLOUDINARY_API_SECRET", API_SECRET)

# Configure Cloudinary
cloudinary.config(
    cloud_name=CLOUD_NAME,
    api_key=API_KEY,
    api_secret=API_SECRET,
    secure=True
)

def check_credentials():
    """Verify Cloudinary credentials are set"""
    if CLOUD_NAME == "YOUR_CLOUD_NAME" or not API_KEY or not API_SECRET:
        print("[ERROR] Cloudinary credentials not configured!")
        print("\nPlease:")
        print("1. Sign up at https://cloudinary.com")
        print("2. Get your credentials from the dashboard")
        print("3. Update this script or set environment variables:")
        print("   - CLOUDINARY_CLOUD_NAME")
        print("   - CLOUDINARY_API_KEY")
        print("   - CLOUDINARY_API_SECRET")
        return False
    return True

def upload_images(images_dir: Path, folder_name: str = "aircraft"):
    """Upload all images from a directory to Cloudinary"""
    
    if not check_credentials():
        return
    
    print("\n[INFO] Starting upload to Cloudinary...")
    print("[INFO] Cloud Name: " + CLOUD_NAME)
    print("[INFO] Folder: " + folder_name)
    print("[INFO] Source: " + str(images_dir) + "\n")
    
    # Get all image files
    image_extensions = {'.jpg', '.jpeg', '.png', '.avif', '.webp'}
    image_files = [f for f in images_dir.iterdir() 
                   if f.is_file() and f.suffix.lower() in image_extensions]
    
    total = len(image_files)
    print("[INFO] Found " + str(total) + " images to upload\n")
    
    if total == 0:
        print("[ERROR] No images found!")
        return
    
    uploaded = 0
    failed = 0
    skipped = 0
    
    for i, image_path in enumerate(image_files, 1):
        image_id = image_path.stem  # filename without extension
        # Sanitize public_id: replace invalid characters with underscores
        # Cloudinary doesn't allow: &, ?, #, etc.
        sanitized_id = image_id.replace('&', '_').replace('?', '_').replace('#', '_')
        
        max_retries = 3
        retry_count = 0
        success = False
        
        while retry_count < max_retries and not success:
            try:
                # Upload with public_id to maintain consistent naming
                print("[" + str(i) + "/" + str(total) + "] Uploading " + image_path.name + "...", end=" ", flush=True)
                
                result = cloudinary.uploader.upload(
                    str(image_path),
                    public_id=sanitized_id,
                    folder=folder_name,
                    overwrite=True,  # Replace if exists to keep exact names
                    unique_filename=False,  # Don't add random suffixes
                    resource_type="image",
                    quality="auto:good",  # Automatic quality optimization
                    timeout=120,  # Increase timeout to 120 seconds
                    invalidate=True  # Clear CDN cache when replacing
                )
                
                print("[OK]", flush=True)
                uploaded += 1
                success = True
                
            except cloudinary.exceptions.Error as e:
                if "already exists" in str(e).lower():
                    print("[SKIP]", flush=True)
                    skipped += 1
                    success = True
                else:
                    retry_count += 1
                    if retry_count < max_retries:
                        print("[RETRY " + str(retry_count) + "]", flush=True)
                        time.sleep(2)  # Wait before retry
                    else:
                        print("[FAIL] " + str(e), flush=True)
                        failed += 1
                        success = True
            except Exception as e:
                retry_count += 1
                if retry_count < max_retries:
                    print("[RETRY " + str(retry_count) + "]", flush=True)
                    time.sleep(2)  # Wait before retry
                else:
                    print("[FAIL] " + str(e), flush=True)
                    failed += 1
                    success = True
    
    # Summary
    print("\n" + "="*60)
    print("Upload Summary:")
    print("   [OK]   Uploaded: " + str(uploaded))
    print("   [SKIP] Skipped:  " + str(skipped))
    print("   [FAIL] Failed:   " + str(failed))
    print("   [INFO] Total:    " + str(total))
    print("="*60 + "\n")
    
    if uploaded > 0 or skipped > 0:
        print("[SUCCESS] Next steps:")
        print("1. Update utils/cloudinaryConfig.ts with your CLOUD_NAME")
        print("2. Replace 'YOUR_CLOUD_NAME' with your actual cloud name")
        print("3. Images will automatically load from Cloudinary CDN")
        print("\n[INFO] View your images: https://cloudinary.com/console/media_library")

def main():
    """Main upload function"""
    script_dir = Path(__file__).parent
    aircraft_dir = script_dir.parent / "public" / "images" / "aircraft"
    categories_dir = script_dir.parent / "public" / "images" / "categories"
    
    print("="*60)
    print("Cloudinary Image Uploader")
    print("="*60)
    
    # Upload aircraft images
    if aircraft_dir.exists():
        print("\n[INFO] Uploading aircraft images...")
        upload_images(aircraft_dir, folder_name="aircraft")
    else:
        print("[ERROR] Aircraft images directory not found: " + str(aircraft_dir))
    
    # Upload category images
    if categories_dir.exists():
        print("\n[INFO] Uploading category images...")
        upload_images(categories_dir, folder_name="categories")
    else:
        print("[WARNING] Categories images directory not found: " + str(categories_dir))

if __name__ == "__main__":
    main()
