// Cloudinary configuration for image hosting
// This provides automatic optimization, CDN delivery, and responsive images

// Your Cloudinary cloud name (you'll get this from cloudinary.com after signup)
const CLOUDINARY_CLOUD_NAME: string = 'dccyjw8lu'; // Your cloud name
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`;

// Image transformation presets for different use cases
export const IMAGE_TRANSFORMS = {
  // Thumbnail for cards (small, optimized)
  thumbnail: 'c_fill,w_400,h_300,q_auto,f_auto',
  
  // Detail page (larger, high quality)
  detail: 'c_fill,w_1200,h_900,q_auto:good,f_auto',
  
  // Hero images (extra large)
  hero: 'c_fill,w_1920,h_1080,q_auto:best,f_auto',
  
  // Lazy load placeholder (tiny blur)
  placeholder: 'c_fill,w_50,h_38,q_auto:low,e_blur:1000,f_auto'
};

/**
 * Generate Cloudinary URL for an aircraft image
 * @param imageId - The image identifier (e.g., aircraft ID or filename without extension)
 * @param transform - Transformation preset (thumbnail, detail, hero, placeholder)
 * @returns Optimized Cloudinary URL
 */
export const getCloudinaryUrl = (imageId: string, transform: keyof typeof IMAGE_TRANSFORMS = 'thumbnail'): string => {
  // If using local images (fallback), return the original path
  if (CLOUDINARY_CLOUD_NAME === 'YOUR_CLOUD_NAME') {
    // Fallback to local images during development
    return `/images/aircraft/${imageId}.jpg`;
  }
  
  const transformation = IMAGE_TRANSFORMS[transform];
  // Cloudinary folder structure: aircraft/imageId.jpg
  return `${CLOUDINARY_BASE_URL}/${transformation}/aircraft/${imageId}.jpg`;
};

/**
 * Generate Cloudinary URL for a category image
 * @param imagePath - The image path or filename
 * @param transform - Transformation preset (thumbnail, detail, hero, placeholder)
 * @returns Optimized Cloudinary URL
 */
export const getCategoryCloudinaryUrl = (imagePath: string, transform: keyof typeof IMAGE_TRANSFORMS = 'thumbnail'): string => {
  // Extract filename from path like '/images/categories/Avions de Ligne.jpg'
  let filename = imagePath.split('/').pop() || imagePath;
  
  // Sanitize the filename (replace & ? # with _) while keeping extension
  const nameWithSanitization = filename.replace(/&/g, '_').replace(/\?/g, '_').replace(/#/g, '_');
  
  // If using local images (fallback), return the original path
  if (CLOUDINARY_CLOUD_NAME === 'YOUR_CLOUD_NAME') {
    return `/images/categories/${filename}`;
  }
  
  const transformation = IMAGE_TRANSFORMS[transform];
  // Cloudinary folder structure: categories/filename-with-extension
  // The public_id includes the extension for proper file type detection
  return `${CLOUDINARY_BASE_URL}/${transformation}/categories/${nameWithSanitization}`;
};

/**
 * Check if Cloudinary is configured
 */
export const isCloudinaryEnabled = (): boolean => {
  return CLOUDINARY_CLOUD_NAME !== 'YOUR_CLOUD_NAME';
};

/**
 * Generate srcset for responsive images
 */
export const getResponsiveSrcSet = (imageId: string): string => {
  if (!isCloudinaryEnabled()) return '';
  
  return [
    `${getCloudinaryUrl(imageId, 'thumbnail')} 400w`,
    `${getCloudinaryUrl(imageId, 'detail')} 800w`,
    `${getCloudinaryUrl(imageId, 'hero')} 1200w`
  ].join(', ');
};

/**
 * Generate srcset for responsive category images
 */
export const getCategoryResponsiveSrcSet = (imagePath: string): string => {
  if (!isCloudinaryEnabled()) return '';
  
  return [
    `${getCategoryCloudinaryUrl(imagePath, 'thumbnail')} 400w`,
    `${getCategoryCloudinaryUrl(imagePath, 'detail')} 800w`,
    `${getCategoryCloudinaryUrl(imagePath, 'hero')} 1200w`
  ].join(', ');
};
