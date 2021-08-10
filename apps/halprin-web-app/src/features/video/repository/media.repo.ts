import { Media } from '@/data/data.types';
import { mediaData } from '@/data/media.data';

type SupportedLang = 'en' | 'fr';

type Props = {
  lang: SupportedLang;
  videoData?: Media[];
};
export class MediaRepo {
  private lang: SupportedLang;
  private data: Media[];
  constructor(props: Props) {
    this.lang = props.lang;
    this.data = props.videoData ?? mediaData;
  }
  findByType = (type: string): Media[] => {
    return this.data.filter((media) => media.type === type);
  };
  findBySlug = (slug: string): Media | null => {
    return this.data.filter((media) => media.media_slug === slug)?.[0] ?? null;
  };
  findByTags = (
    tagSlugs: string[] | string,
    sortByRelevance = true
  ): Media[] => {
    const slugs = typeof tagSlugs === 'string' ? [tagSlugs] : tagSlugs;
    const relevanceMap = new Map<string, number>();
    const filtered = this.data.filter((media) => {
      const count = media.tags.length;
      let i = 0;
      let found = false;
      while (i < count && !found) {
        const tag = media.tags[i];
        for (let k = 0; k < slugs.length; k++) {
          if (tag.tag_slug === slugs[k]) {
            found = true;
            relevanceMap.set(
              media.media_slug,
              tag.relevance + (relevanceMap.get(media.media_slug) ?? 0)
            );
          }
        }
        i++;
      }
      return found;
    });
    if (!sortByRelevance) {
      return filtered;
    }
    return filtered.sort((a, b) => {
      const relevanceA = relevanceMap.get(a.media_slug) ?? 0;
      const relevanceB = relevanceMap.get(b.media_slug) ?? 0;
      return relevanceB - relevanceA;
    });
  };
}
