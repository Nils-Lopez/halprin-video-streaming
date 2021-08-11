import { pageData } from '@/data/page.data';

export const getVideoUrlFromPageId = (pageId: string): string => {
  const currPage =
    pageData.filter((page: any) => page.page_id === pageId)?.[0] ?? null;
  if (currPage === null) {
    throw new Error('Page does not exists');
  }
  return currPage.content.video.url;
};

export type VideoSlide = {
  title: string;
  thumbUrl: string;
  keywords: string[];
  page_id: string;
};

export const getVideosFromCategory = (
  category: string,
  lang: string
): VideoSlide[] => {
  const pages = pageData.filter((page) => page.categories.includes(category));
  const tmp: VideoSlide[] = [];
  pages.forEach((page) => {
    tmp.push({
      page_id: page.page_id,
      title: (page.title as any)[lang],
      thumbUrl: page.content.video.thumbUrl,
      keywords: (page.keywords as any)[lang],
    });
  });
  return tmp;
};
