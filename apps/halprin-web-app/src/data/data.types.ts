export type Tag = {
  id: number;
  tag_slug: string;
  label: { fr: string; en: string };
};

export type LocalizedMediaUrl = {
  fr: string;
  en: string;
};

export type MediaUrl = string | LocalizedMediaUrl;

export type MediaCategory = {
  categ_slug: MediaCategorySlug;
  label: {
    en: string;
    fr: string;
  };
};

export type MediaCategorySlug =
  | 'life-art'
  | 'roadmaps'
  | 'workshops'
  | 'archives'
  | 'index'
  | 'topics';

export type MediaTracks = {
  fr?: string;
  en?: string;
};

export type Credit = {
  year?: number;
  index: boolean;
  id: number;
  htmlLabel: {
    fr: string;
    en: string;
  };
};

export type Media = {
  media_slug: string;
  type: 'audio' | 'video';
  url: MediaUrl;
  tracks?: MediaTracks;
  thumb: string;
  category: MediaCategorySlug;
  moment?: string;
  tags: { tag_slug: string; relevance: number }[];
  creditsIds?: number[];
  title: {
    fr: string;
    en: string;
  };
};
