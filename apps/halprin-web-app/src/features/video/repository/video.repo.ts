import { Media } from '@/data/data.types';
import { mediaData } from '@/data/media.data';

type SupportedLang = 'en' | 'fr';

type Props = {
  lang: SupportedLang;
  videoData?: Media[];
};
export class VideoRepo {
  private lang: SupportedLang;
  private data: Media[];
  constructor(props: Props) {
    this.lang = props.lang;
    this.data = props.videoData ?? mediaData;
  }
  findBySlug = (slug: string): Media | null => {
    return this.data.filter((media) => media.slug === slug)?.[0] ?? null;
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
          if (tag.slug === slugs[k]) {
            found = true;
            relevanceMap.set(
              media.slug,
              tag.relevance + (relevanceMap.get(media.slug) ?? 0)
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
      const relevanceA = relevanceMap.get(a.slug) ?? 0;
      const relevanceB = relevanceMap.get(b.slug) ?? 0;
      return relevanceB - relevanceA;
    });
  };
}
