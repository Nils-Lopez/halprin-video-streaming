import { Media, MediaCategorySlug } from '@/data/data.types';
import { mediaData } from '@/data/media.data';

type Props = {
  mediaData?: Media[];
};

type GetMediaByTags = Map<string, Media[]>;

export class TagRepo {
  private data: Media[];
  constructor(props?: Props) {
    this.data = props?.mediaData ?? mediaData;
  }
  getMediaByTags = (): GetMediaByTags => {
    const mediaByTags: GetMediaByTags = new Map([]);
    this.data.forEach((media) => {
      media.tags.forEach((tag) => {
        const { tag_slug } = tag;
        if (!mediaByTags.has(tag_slug)) {
          mediaByTags.set(tag_slug, [media]);
        } else {
          const existingMedias = mediaByTags.get(tag_slug);
          if (existingMedias !== undefined) {
            mediaByTags.set(tag_slug, [...existingMedias, ...[media]]);
          } else {
            throw new Error('Unexpected empty exiting medias, check your code');
          }
        }
      });
    });
    return mediaByTags;
  };
}
