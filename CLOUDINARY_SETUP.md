# Cloudinary Setup Guide

## Why Cloudinary?
- ✅ **Free tier**: 25GB storage, 25GB bandwidth/month
- ✅ **CDN delivery**: Fast global image loading
- ✅ **Auto optimization**: Automatic format & quality optimization
- ✅ **Responsive images**: Multiple sizes generated automatically
- ✅ **Reduce GitHub repo size**: From ~490MB to almost nothing

## Setup Steps

### 1. Create Cloudinary Account
1. Go to https://cloudinary.com
2. Sign up for free account
3. Verify your email

### 2. Get Credentials
1. Go to your Dashboard: https://cloudinary.com/console
2. Copy these values:
   - **Cloud Name**: (e.g., "dxxxxxx")
   - **API Key**: (e.g., "123456789012345")
   - **API Secret**: (click "Reveal" to see)

### 3. Install Python Package
```bash
pip install cloudinary
```

### 4. Upload Images
Run the upload script:

```bash
# Option 1: Edit the script directly
# Open scripts/upload_to_cloudinary.py
# Replace YOUR_CLOUD_NAME, YOUR_API_KEY, YOUR_API_SECRET with your values

python scripts/upload_to_cloudinary.py
```

Or use environment variables (more secure):
```bash
# Windows PowerShell
$env:CLOUDINARY_CLOUD_NAME="your_cloud_name"
$env:CLOUDINARY_API_KEY="your_api_key"
$env:CLOUDINARY_API_SECRET="your_api_secret"
python scripts/upload_to_cloudinary.py

# Linux/Mac
export CLOUDINARY_CLOUD_NAME="your_cloud_name"
export CLOUDINARY_API_KEY="your_api_key"
export CLOUDINARY_API_SECRET="your_api_secret"
python scripts/upload_to_cloudinary.py
```

### 5. Update Frontend Configuration
Edit `utils/cloudinaryConfig.ts`:
```typescript
const CLOUDINARY_CLOUD_NAME = 'your_actual_cloud_name'; // Replace this!
```

### 6. Test
1. Start dev server: `npm run dev`
2. Check browser console for any image errors
3. Verify images load from Cloudinary (check Network tab - should see `res.cloudinary.com`)

### 7. Clean Up Local Images (Optional)
After verifying everything works, you can remove local images:
```bash
# DO THIS ONLY AFTER CONFIRMING CLOUDINARY WORKS!
# git rm -r public/images/aircraft/*
# git commit -m "Remove local images (now using Cloudinary CDN)"
```

## Using Cloudinary in Components

### Option 1: Use OptimizedImage Component (Recommended)
```tsx
import { OptimizedImage } from '../components/OptimizedImage';

<OptimizedImage
  imageId="f-35-lightning-ii"
  alt="F-35 Lightning II"
  transform="thumbnail"  // or 'detail', 'hero'
  className="w-full h-48 object-cover"
/>
```

### Option 2: Use Helper Function
```tsx
import { getCloudinaryUrl } from '../utils/cloudinaryConfig';

<img src={getCloudinaryUrl(aircraft.id, 'thumbnail')} alt={aircraft.name} />
```

## Benefits After Setup

### Before (Local Images):
- GitHub repo: ~490MB
- Initial load: Slow (downloading from GitHub)
- Image optimization: Manual

### After (Cloudinary):
- GitHub repo: <5MB (just code)
- Initial load: Fast (CDN + auto-optimization)
- Image optimization: Automatic (WebP, AVIF, quality)
- Bandwidth: Unlimited on free tier (25GB/month)

## Troubleshooting

### Images not loading?
1. Check `utils/cloudinaryConfig.ts` has correct cloud name
2. Verify upload script completed successfully
3. Check browser console for errors
4. Visit Cloudinary media library to confirm images exist

### Upload failed?
- Check credentials are correct
- Verify API permissions in Cloudinary settings
- Check image file formats (should be jpg, png, avif, webp)

### Still using local images?
- Clear browser cache
- Check `isCloudinaryEnabled()` returns true
- Verify CLOUDINARY_CLOUD_NAME is set correctly

## Cost Monitoring
Free tier limits:
- Storage: 25GB
- Bandwidth: 25GB/month
- Transformations: 25,000/month

Check usage: https://cloudinary.com/console/usage

## Next Steps
Once working, you can:
1. Enable lazy loading with blur placeholders
2. Add progressive image loading
3. Implement advanced transformations (filters, effects)
4. Set up automatic backup uploads
