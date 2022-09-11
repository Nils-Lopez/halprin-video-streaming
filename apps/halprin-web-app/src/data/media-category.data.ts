import { MediaCategory } from '@/data/data.types';

export const mediaCategoryData: MediaCategory[] = [
  {
    categ_slug: 'life-art',
    label: { fr: "Ma vie & l'art", en: 'My Life & Art Themes' },
  },
  { categ_slug: 'index', label: { fr: 'Index', en: 'Index' } },
  { categ_slug: 'archives', label: { fr: 'Archives', en: 'Archives' } },
  {
    categ_slug: 'topics',
    label: { fr: 'En introduction', en: 'By way of introduction' },
  },
  {
    categ_slug: 'roadmaps',
    label: { fr: 'Feuilles de route', en: 'Roadmaps' },
  },
  {
    categ_slug: 'workshops',
    label: { fr: 'Un atelier: Paris 2010', en: 'A Workshop: Paris 2010' },
  },
];
