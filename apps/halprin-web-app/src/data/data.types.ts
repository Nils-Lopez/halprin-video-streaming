export type Tag = {
  id: number;
  slug: string;
  label: { fr: string; en: string };
};

export type Media = {
  slug: string;
  video_url?: string;
  thumbnail?: string;
  type: number;
  tags: { slug: string; relevance: number }[];
  title: {
    fr: string;
    en: string;
  };
};
