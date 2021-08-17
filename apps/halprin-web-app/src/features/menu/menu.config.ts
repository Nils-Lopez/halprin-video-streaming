import { I18nNamespaces } from '@/core/i18n/i18n-namespaces.type';

export type MenuConfig = {
  i18nNamespaces: Readonly<I18nNamespaces>;
  menuLinks: {
    videoWorkshops: string;
    videoLifeArt: string;
    videoRoadmaps: string;
    videoIndex: string;
  };
};

export const menuConfig: MenuConfig = {
  i18nNamespaces: ['common', 'app'],
  menuLinks: {
    videoWorkshops: '/video/category/workshops',
    videoLifeArt: '/video/category/life-art',
    videoRoadmaps: '/video/category/roadmaps',
    videoIndex: '/tag-index',
  },
} as const;
