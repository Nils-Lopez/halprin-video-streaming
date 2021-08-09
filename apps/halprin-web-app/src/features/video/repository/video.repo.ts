import { Media } from '@/data/data.types';
import { mediaData } from '@/data/media.data';

type Props = {
  lang: 'en' | 'fr';
  videoData?: Media[];
};
export class VideoRepo {
  private lang: 'en' | 'fr';
  private data: Media[];
  constructor(props: Props) {
    this.lang = props.lang;
    this.data = props.videoData ?? mediaData;
  }
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
    const sorted = filtered.sort((a, b) => {
      const relevanceA = relevanceMap.get(a.slug) ?? 0;
      const relevanceB = relevanceMap.get(b.slug) ?? 0;
      return relevanceB - relevanceA;
    });

    return sorted;
  };
}
