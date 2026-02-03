import React, { useState } from 'react';
import { getCloudinaryUrl, getResponsiveSrcSet, isCloudinaryEnabled } from '../utils/cloudinaryConfig';

interface OptimizedImageProps {
  imageId: string;
  alt: string;
  className?: string;
  transform?: 'thumbnail' | 'detail' | 'hero' | 'placeholder';
  loading?: 'lazy' | 'eager';
  onError?: () => void;
}

/**
 * Optimized image component with Cloudinary CDN support
 * Automatically uses Cloudinary if configured, falls back to local images
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  imageId,
  alt,
  className = '',
  transform = 'thumbnail',
  loading = 'lazy',
  onError
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
    const localPath = `/images/aircraft/${imageId}.jpg`;
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
  const src = getCloudinaryUrl(imageId, transform);
  const srcSet = getResponsiveSrcSet(imageId);

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
