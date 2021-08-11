export type PageData = {
  page_id: string;
  title: {
    en: string;
    fr: string;
  };
  sort_idx: number;
  cover?: string;
  categories: string[];
  keywords: {
    en: string[];
    fr: string[];
  };
  content: {
    video: {
      thumbUrl: string;
      url: string;
    };
  };
};

export const pageData: PageData[] = [
  {
    page_id: 'other',
    categories: ['workshop', 'roadmap', 'body'],
    title: {
      en: 'The search of',
      fr: 'La recherche de',
    },
    sort_idx: 100,
    cover: 'hello.jpg',
    keywords: {
      en: ['hello'],
      fr: ['hello'],
    },
    content: {
      video: {
        thumbUrl: 'https://source.unsplash.com/random/800x600?fire',
        url: 'https://player.vimeo.com/external/583334078.sd.mp4?s=685558fc99397ec030c0866c145927d29e602e30&profile_id=165',
      },
    },
  },
  {
    page_id: 'test',
    categories: ['roadmap', 'body', 'workshop'],
    title: {
      en: 'The search of',
      fr: 'La recherche de',
    },
    sort_idx: 100,
    cover: 'hello.jpg',
    keywords: {
      en: ['hello'],
      fr: ['hello'],
    },
    content: {
      video: {
        thumbUrl: 'https://source.unsplash.com/random/800x600?tree',
        url: 'https://player.vimeo.com/external/583334078.sd.mp4?s=685558fc99397ec030c0866c145927d29e602e30&profile_id=165',
      },
    },
  },
  {
    page_id: 'test2',
    categories: ['roadmap', 'body', 'workshop'],
    title: {
      en: 'The search of',
      fr: 'La recherche de',
    },
    sort_idx: 100,
    cover: 'hello.jpg',
    keywords: {
      en: ['hello'],
      fr: ['hello'],
    },
    content: {
      video: {
        thumbUrl: 'https://source.unsplash.com/random/800x600?rain',
        url: 'https://player.vimeo.com/external/583334078.sd.mp4?s=685558fc99397ec030c0866c145927d29e602e30&profile_id=165',
      },
    },
  },
];
