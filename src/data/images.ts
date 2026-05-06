export interface ImageData {
  id: string;
  unsplashId: string;
  seed: string;
  width: number;
  height: number;
}

export const portfolioImages: ImageData[] = [
  {
    id: 'hero-portrait',
    unsplashId: '1534528741775-53994a69daeb',
    seed: 'photographer-portrait',
    width: 900,
    height: 1200,
  },
  {
    id: 'project-1-cover',
    unsplashId: '1506794778202-cad84cf45f1d',
    seed: 'moody-portrait',
    width: 1600,
    height: 900,
  },
  {
    id: 'project-2-cover',
    unsplashId: '1531746804-0cb7d828c8',
    seed: 'fashion-editorial',
    width: 1600,
    height: 900,
  },
  {
    id: 'project-3-cover',
    unsplashId: '1529626455594-4ff0802cfb7e',
    seed: 'fashion-portrait',
    width: 900,
    height: 1200,
  },
  {
    id: 'project-4-cover',
    unsplashId: '1504703395950-b89145a5425b',
    seed: 'landscape-art',
    width: 1200,
    height: 800,
  },
  {
    id: 'project-5-cover',
    unsplashId: '1494790108377-be9c29b29330',
    seed: 'intimate-portrait',
    width: 1600,
    height: 900,
  },
  {
    id: 'project-6-cover',
    unsplashId: '1519741497674-4be9eb4a73c7',
    seed: 'editorial-dark',
    width: 1200,
    height: 800,
  },
  {
    id: 'gallery-1',
    unsplashId: '1517841905240-472988babdf9',
    seed: 'lifestyle-portrait',
    width: 1600,
    height: 900,
  },
  {
    id: 'gallery-2',
    unsplashId: '1500534314209-a157d0e901ff',
    seed: 'nature-photo',
    width: 900,
    height: 1200,
  },
  {
    id: 'gallery-3',
    unsplashId: '1465146344425-f00d5f5c8f07',
    seed: 'landscape-wide',
    width: 1200,
    height: 800,
  },
  {
    id: 'gallery-4',
    unsplashId: '1488161628813-04466f872be2',
    seed: 'street-photo',
    width: 1600,
    height: 900,
  },
  {
    id: 'gallery-5',
    unsplashId: '1507003211169-0a1dd7228f2d',
    seed: 'male-portrait',
    width: 900,
    height: 1200,
  },
  {
    id: 'gallery-6',
    unsplashId: '1522556189639-9b9e5b2a745e',
    seed: 'documentary',
    width: 1200,
    height: 800,
  },
  {
    id: 'about-portrait',
    unsplashId: '1534528741775-53994a69daeb',
    seed: 'about-photographer',
    width: 800,
    height: 1000,
  },
];

export const getImageById = (id: string): ImageData | undefined =>
  portfolioImages.find((img) => img.id === id);
