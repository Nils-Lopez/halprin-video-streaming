export type PageData = {
  page_id: string;
  title: {
    en: string;
    fr: string;
  };
  sort_idx: number;
  cover?: string;
  keywords: {
    en: string[];
    fr: string[];
  };
  content: {
    video: {
      url: string;
    };
  };
};

export const pageData: PageData[] = [
  {
    page_id: 'test',
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
        url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
      },
    },
  },
];
