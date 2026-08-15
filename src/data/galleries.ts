import type { ImageMetadata } from 'astro';
import photosCover from '../assets/images/photos.jpg';
import palermoCover from '../assets/images/palermo.jpg';
import commissionedCover from '../assets/images/commissioned.jpg';

type ImageModule = { default: ImageMetadata };

export type Gallery = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  cover: ImageMetadata;
  images: ImageMetadata[];
};

const imageModules = import.meta.glob<ImageModule>(
  '../assets/images/{photos,palermo,commissioned}/*.jpg',
  { eager: true },
);

const imagesFor = (slug: string) =>
  Object.entries(imageModules)
    .filter(([path]) => path.includes(`/images/${slug}/`))
    .sort(([a], [b]) => {
      const numberA = Number(a.match(/\/(\d+)\.jpg$/)?.[1] ?? 0);
      const numberB = Number(b.match(/\/(\d+)\.jpg$/)?.[1] ?? 0);
      return numberA - numberB;
    })
    .map(([, module]) => module.default);

export const galleries: Gallery[] = [
  {
    slug: 'photos',
    title: 'Photographs',
    eyebrow: 'Personal work',
    description: 'City light, passing figures, and moments found between destinations.',
    cover: photosCover,
    images: imagesFor('photos'),
  },
  {
    slug: 'palermo',
    title: 'Palermo',
    eyebrow: 'Street study',
    description: 'A close look at the gestures, faces, and restless energy of Palermo.',
    cover: palermoCover,
    images: imagesFor('palermo'),
  },
  {
    slug: 'commissioned',
    title: 'Commissioned',
    eyebrow: 'Selected work',
    description: 'Documentary images made with people at work, where precision meets trust.',
    cover: commissionedCover,
    images: imagesFor('commissioned'),
  },
];

export const getGallery = (slug: string) =>
  galleries.find((gallery) => gallery.slug === slug);
