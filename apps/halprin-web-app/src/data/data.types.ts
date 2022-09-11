export type MediaTag = {
  id?: number;
  tag_slug?: string;
  label?: { fr: string; en: string };
  media?: Media[];
  relevance?: number;
};

export type Tag = {
  id?: number;
  tag_slug?: string;
  label: { fr: string; en: string };
  media?: Media[];
  relevance?: number;
};

export type MediaCategory = {
  categ_slug: MediaCategorySlug;
  label: {
    en: string;
    fr: string;
  };
  tag_slug?: string;
};

export type LocalizedMediaUrl = {
  fr: string;
  en: string;
};

export type MediaUrl = string | LocalizedMediaUrl;

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

export type CleanedCredit = {
  year?: number;
  index?: boolean;
  id: number;
  label: string;
};

export type Media = {
  media_slug?: string;
  type?: 'audio' | 'video';
  url?: MediaUrl;
  vimeo_id?: string;
  tracks?: MediaTracks;
  thumb: string;
  category?: MediaCategorySlug;
  moment?: string;
  tags?: { tag_slug: string; relevance: number }[];
  creditsIds?: number[];
  title?: {
    fr: string;
    en: string;
  };
};

export type RepoMedia = {
  media_slug: string;
  type?: 'audio' | 'video';
  url: MediaUrl;
  vimeo_id: string;
  tracks: MediaTracks;
  thumb: string;
  category: MediaCategorySlug;
  moment: string;
  tags: { tag_slug: string; relevance: number }[];
  creditsIds?: number[];
  title?: {
    fr: string;
    en: string;
  };
};
