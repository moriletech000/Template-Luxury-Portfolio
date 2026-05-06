import type { SyntheticEvent } from 'react';

export type ImageSize = { w: number; h: number };

export const unsplashUrl = (
  id: string,
  size: ImageSize = { w: 1200, h: 800 }
): string =>
  `https://images.unsplash.com/photo-${id}?w=${size.w}&h=${size.h}&q=85&auto=format&fit=crop`;

export const picsumUrl = (
  seed: string,
  size: ImageSize = { w: 1200, h: 800 }
): string => `https://picsum.photos/seed/${seed}/${size.w}/${size.h}`;

export const withFallback = (
  primary: string,
  seed: string,
  size: ImageSize
) => ({
  src: primary,
  onError: (e: SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.src = picsumUrl(seed, size);
    target.onerror = null; // prevent infinite loop
  },
});

export const blurPlaceholder = (id: string): string =>
  `https://images.unsplash.com/photo-${id}?w=20&q=10&auto=format&fit=crop&blur=10`;

export const picsumBlurPlaceholder = (seed: string): string =>
  `https://picsum.photos/seed/${seed}/20/20`;
