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
    categories: ['workshop', 'roadmap'],
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
        url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
      },
    },
  },
  {
    page_id: 'test',
    categories: ['workshop', 'roadmap'],
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
        url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
      },
    },
  },
];
