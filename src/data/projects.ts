export interface ProjectImage {
  unsplashId: string;
  seed: string;
  width: number;
  height: number;
}

export interface Project {
  id: string;
  title: string;
  year: number;
  category: string;
  coverImageId: string;
  coverImageSeed: string;
  images: ProjectImage[];
  description: string;
  location: string;
}

export const projects: Project[] = [
  {
    id: 'ethereal-portraits',
    title: 'Ethereal Portraits',
    year: 2024,
    category: 'Portrait',
    coverImageId: '1506794778202-cad84cf45f1d',
    coverImageSeed: 'moody-portrait',
    images: [
      {
        unsplashId: '1506794778202-cad84cf45f1d',
        seed: 'ethereal-1',
        width: 1600,
        height: 900,
      },
      {
        unsplashId: '1494790108377-be9c29b29330',
        seed: 'ethereal-2',
        width: 900,
        height: 1200,
      },
      {
        unsplashId: '1534528741775-53994a69daeb',
        seed: 'ethereal-3',
        width: 1200,
        height: 800,
      },
      {
        unsplashId: '1517841905240-472988babdf9',
        seed: 'ethereal-4',
        width: 1600,
        height: 900,
      },
      {
        unsplashId: '1529626455594-4ff0802cfb7e',
        seed: 'ethereal-5',
        width: 900,
        height: 1200,
      },
      {
        unsplashId: '1507003211169-0a1dd7228f2d',
        seed: 'ethereal-6',
        width: 1200,
        height: 800,
      },
    ],
    description:
      'A series exploring the delicate balance between light and shadow, capturing the essence of human emotion through intimate portraiture. Shot on medium format film in natural light.',
    location: 'New York, USA',
  },
  {
    id: 'urban-landscapes',
    title: 'Urban Landscapes',
    year: 2023,
    category: 'Documentary',
    coverImageId: '1531746804-0cb7d828c8',
    coverImageSeed: 'urban-cover',
    images: [
      {
        unsplashId: '1531746804-0cb7d828c8',
        seed: 'urban-1',
        width: 1600,
        height: 900,
      },
      {
        unsplashId: '1488161628813-04466f872be2',
        seed: 'urban-2',
        width: 1200,
        height: 800,
      },
      {
        unsplashId: '1519741497674-4be9eb4a73c7',
        seed: 'urban-3',
        width: 900,
        height: 1200,
      },
      {
        unsplashId: '1465146344425-f00d5f5c8f07',
        seed: 'urban-4',
        width: 1600,
        height: 900,
      },
      {
        unsplashId: '1500534314209-a157d0e901ff',
        seed: 'urban-5',
        width: 1200,
        height: 800,
      },
      {
        unsplashId: '1522556189639-9b9e5b2a745e',
        seed: 'urban-6',
        width: 900,
        height: 1200,
      },
    ],
    description:
      'Documenting the architectural poetry of modern cities, where concrete and glass create unexpected moments of beauty. A meditation on urban solitude and connection.',
    location: 'Tokyo, Japan',
  },
  {
    id: 'fashion-editorial',
    title: 'Fashion Editorial',
    year: 2024,
    category: 'Editorial',
    coverImageId: '1529626455594-4ff0802cfb7e',
    coverImageSeed: 'fashion-cover',
    images: [
      {
        unsplashId: '1529626455594-4ff0802cfb7e',
        seed: 'fashion-1',
        width: 900,
        height: 1200,
      },
      {
        unsplashId: '1531746804-0cb7d828c8',
        seed: 'fashion-2',
        width: 1600,
        height: 900,
      },
      {
        unsplashId: '1506794778202-cad84cf45f1d',
        seed: 'fashion-3',
        width: 1200,
        height: 800,
      },
      {
        unsplashId: '1534528741775-53994a69daeb',
        seed: 'fashion-4',
        width: 900,
        height: 1200,
      },
      {
        unsplashId: '1519741497674-4be9eb4a73c7',
        seed: 'fashion-5',
        width: 1600,
        height: 900,
      },
      {
        unsplashId: '1494790108377-be9c29b29330',
        seed: 'fashion-6',
        width: 1200,
        height: 800,
      },
    ],
    description:
      'High fashion meets fine art in this editorial series for Vogue Italia. Exploring texture, form, and movement through the lens of contemporary fashion.',
    location: 'Milan, Italy',
  },
  {
    id: 'natural-light',
    title: 'Natural Light',
    year: 2023,
    category: 'Landscape',
    coverImageId: '1504703395950-b89145a5425b',
    coverImageSeed: 'natural-cover',
    images: [
      {
        unsplashId: '1504703395950-b89145a5425b',
        seed: 'natural-1',
        width: 1200,
        height: 800,
      },
      {
        unsplashId: '1500534314209-a157d0e901ff',
        seed: 'natural-2',
        width: 1600,
        height: 900,
      },
      {
        unsplashId: '1465146344425-f00d5f5c8f07',
        seed: 'natural-3',
        width: 900,
        height: 1200,
      },
      {
        unsplashId: '1504703395950-b89145a5425b',
        seed: 'natural-4',
        width: 1200,
        height: 800,
      },
      {
        unsplashId: '1500534314209-a157d0e901ff',
        seed: 'natural-5',
        width: 1600,
        height: 900,
      },
      {
        unsplashId: '1465146344425-f00d5f5c8f07',
        seed: 'natural-6',
        width: 900,
        height: 1200,
      },
    ],
    description:
      'An exploration of the natural world through the changing qualities of light. From golden hour to blue hour, capturing the ephemeral beauty of our planet.',
    location: 'Iceland',
  },
  {
    id: 'intimate-moments',
    title: 'Intimate Moments',
    year: 2022,
    category: 'Documentary',
    coverImageId: '1494790108377-be9c29b29330',
    coverImageSeed: 'intimate-cover',
    images: [
      {
        unsplashId: '1494790108377-be9c29b29330',
        seed: 'intimate-1',
        width: 1600,
        height: 900,
      },
      {
        unsplashId: '1517841905240-472988babdf9',
        seed: 'intimate-2',
        width: 900,
        height: 1200,
      },
      {
        unsplashId: '1506794778202-cad84cf45f1d',
        seed: 'intimate-3',
        width: 1200,
        height: 800,
      },
      {
        unsplashId: '1522556189639-9b9e5b2a745e',
        seed: 'intimate-4',
        width: 1600,
        height: 900,
      },
      {
        unsplashId: '1507003211169-0a1dd7228f2d',
        seed: 'intimate-5',
        width: 900,
        height: 1200,
      },
      {
        unsplashId: '1534528741775-53994a69daeb',
        seed: 'intimate-6',
        width: 1200,
        height: 800,
      },
    ],
    description:
      'Candid moments captured in their purest form. A documentary series exploring human connection, vulnerability, and the beauty of unguarded moments.',
    location: 'Paris, France',
  },
  {
    id: 'monochrome-dreams',
    title: 'Monochrome Dreams',
    year: 2023,
    category: 'Fine Art',
    coverImageId: '1519741497674-4be9eb4a73c7',
    coverImageSeed: 'monochrome-cover',
    images: [
      {
        unsplashId: '1519741497674-4be9eb4a73c7',
        seed: 'monochrome-1',
        width: 1200,
        height: 800,
      },
      {
        unsplashId: '1488161628813-04466f872be2',
        seed: 'monochrome-2',
        width: 1600,
        height: 900,
      },
      {
        unsplashId: '1507003211169-0a1dd7228f2d',
        seed: 'monochrome-3',
        width: 900,
        height: 1200,
      },
      {
        unsplashId: '1506794778202-cad84cf45f1d',
        seed: 'monochrome-4',
        width: 1200,
        height: 800,
      },
      {
        unsplashId: '1519741497674-4be9eb4a73c7',
        seed: 'monochrome-5',
        width: 1600,
        height: 900,
      },
      {
        unsplashId: '1522556189639-9b9e5b2a745e',
        seed: 'monochrome-6',
        width: 900,
        height: 1200,
      },
    ],
    description:
      'Stripping away color to reveal the essence of form, texture, and emotion. A black and white series that celebrates the timeless beauty of monochrome photography.',
    location: 'London, UK',
  },
];
