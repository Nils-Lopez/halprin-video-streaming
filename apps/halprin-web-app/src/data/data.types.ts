export type Tag = {
  id: number;
  tag_slug: string;
  label: { fr: string; en: string };
};

export type LocalizedVideoUrl = {
  fr: string;
  en: string;
};

export type VideoUrl = string | LocalizedVideoUrl;

export type Media = {
  media_slug: string;
  video_url: VideoUrl;
  thumbnail?: string;
  type: string | number;
  tags: { tag_slug: string; relevance: number }[];
  title: {
    fr: string;
    en: string;
  };
};
