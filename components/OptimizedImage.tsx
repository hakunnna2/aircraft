import React, { useState } from 'react';
import { getCloudinaryUrl, getResponsiveSrcSet, isCloudinaryEnabled, getCategoryCloudinaryUrl, getCategoryResponsiveSrcSet } from '../utils/cloudinaryConfig';

interface OptimizedImageProps {
  imageId?: string;
  imagePath?: string; // For category images with full path
  alt: string;
  className?: string;
  transform?: 'thumbnail' | 'detail' | 'hero' | 'placeholder';
  loading?: 'lazy' | 'eager';
  onError?: () => void;
  type?: 'aircraft' | 'category'; // Specify image type
}

/**
 * Optimized image component with Cloudinary CDN support
 * Automatically uses Cloudinary if configured, falls back to local images
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  imageId,
  imagePath,
  alt,
  className = '',
  transform = 'thumbnail',
  loading = 'lazy',
  onError,
  type = 'aircraft'
}) => {
  const [hasError, setHasError] = useState(false);
  const [useFallback, setUseFallback] = useState(!isCloudinaryEnabled());
  
  const handleError = () => {
    if (!useFallback && isCloudinaryEnabled()) {
      // First error: try local fallback
      setUseFallback(true);
    } else {
      // Second error or no Cloudinary: give up
      setHasError(true);
    }
    onError?.();
  };

  // If completely failed, show placeholder
  if (hasError) {
    return (
      <div 
        className={className} 
        style={{ 
          backgroundColor: '#f3f4f6', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          minHeight: '200px'
        }}
      >
        <span style={{ color: '#9ca3af' }}>Image unavailable</span>
      </div>
    );
  }

  // Use local images as fallback
  if (useFallback) {
    let localPath: string;
    
    if (type === 'category' && imagePath) {
      // Category image with full path
      localPath = imagePath;
    } else if (imageId) {
      // Aircraft image with ID
      localPath = `/images/aircraft/${imageId}.jpg`;
    } else {
      // Fallback to imagePath
      localPath = imagePath || '';
    }
    
    return (
      <img
        src={localPath}
        alt={alt}
        className={className}
        loading={loading}
        onError={handleError}
      />
    );
  }

  // Use Cloudinary with responsive images
  let src: string;
  let srcSet: string;
  
  if (type === 'category' && imagePath) {
    src = getCategoryCloudinaryUrl(imagePath, transform);
    srcSet = getCategoryResponsiveSrcSet(imagePath);
  } else if (imageId) {
    src = getCloudinaryUrl(imageId, transform);
    srcSet = getResponsiveSrcSet(imageId);
  } else {
    // Fallback
    src = imagePath || '';
    srcSet = '';
  }

  return (
    <img
      src={src}
      srcSet={srcSet || undefined}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      alt={alt}
      className={className}
      loading={loading}
      onError={handleError}
    />
  );
};
