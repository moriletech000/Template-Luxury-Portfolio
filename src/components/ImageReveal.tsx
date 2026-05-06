import { useState, useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { unsplashUrl, withFallback, blurPlaceholder, picsumBlurPlaceholder } from '../utils/images';
import type { ImageSize } from '../utils/images';

interface ImageRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const ImageReveal = ({
  children,
  delay = 0,
  className = '',
}: ImageRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      animate={
        isInView
          ? { clipPath: 'inset(0% 0 0 0)' }
          : { clipPath: 'inset(100% 0 0 0)' }
      }
      transition={{
        duration: 0.9,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ResilientImageProps {
  unsplashId: string;
  seed: string;
  alt: string;
  size: ImageSize;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export const ResilientImage = ({
  unsplashId,
  seed,
  alt,
  size,
  className = '',
  loading = 'lazy',
}: ResilientImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const primaryUrl = unsplashUrl(unsplashId, size);
  const placeholderUrl = hasError 
    ? picsumBlurPlaceholder(seed)
    : blurPlaceholder(unsplashId);

  const aspectRatio = size.w / size.h;

  return (
    <div
      className={`image-container ${className}`}
      style={{ aspectRatio: aspectRatio.toString() }}
    >
      {/* Blur placeholder */}
      <motion.div
        className="blur-placeholder"
        style={{ backgroundImage: `url(${placeholderUrl})` }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Actual image */}
      <motion.img
        {...withFallback(primaryUrl, seed, size)}
        alt={alt}
        loading={loading}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onLoad={() => setIsLoaded(true)}
        onError={(e) => {
          setHasError(true);
          // withFallback already handles the src change
          if (withFallback(primaryUrl, seed, size).onError) {
            withFallback(primaryUrl, seed, size).onError(e);
          }
        }}
      />
    </div>
  );
};
