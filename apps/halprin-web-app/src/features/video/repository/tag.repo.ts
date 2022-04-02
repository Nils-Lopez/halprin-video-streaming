import { Media } from '@/data/data.types';
import { mediaData } from '@/data/media.data';
import { tagsData } from '@/data/tags.data';

type Props = {
  mediaData?: Media[];
};

export type GetMediaByTags = Map<
  string,
  {
    label: {
      en: string;
      fr: string;
    };
    media: Media[];
  }
>;

export class TagRepo {
  private data: Media[];
  constructor(props?: Props) {
    this.data = props?.mediaData ?? mediaData;
  }
  getMediaByTags = (): GetMediaByTags => {
    const mediaByTags: GetMediaByTags = new Map([]);
    this.data.forEach((media) => {
      if (media.tags) {
        media.tags.forEach((tag) => {
          const { tag_slug } = tag;
          if (!mediaByTags.has(tag_slug)) {
            const labels = tagsData.filter(
              (tag) => tag.tag_slug === tag_slug
            )?.[0].label;
            if (labels) {
              mediaByTags.set(tag_slug, {
                media: [media],
                label: {
                  en: labels.en,
                  fr: labels.fr,
                },
              });
            }
          } else {
            const curr = mediaByTags.get(tag_slug);
            if (curr !== undefined) {
              mediaByTags.set(tag_slug, {
                ...curr,
                ...{ media: [...curr.media, media] },
              });
            } else {
              throw new Error(
                'Unexpected empty existing medias, check your code'
              );
            }
          }
        });
      }
    });
    return mediaByTags;
  };
}
