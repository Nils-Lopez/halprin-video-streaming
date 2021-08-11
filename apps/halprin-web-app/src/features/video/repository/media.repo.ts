import { Media, MediaCategorySlug } from '@/data/data.types';
import { mediaData } from '@/data/media.data';

type Props = {
  mediaData?: Media[];
};

type SearchParams = {
  tagSlugs?: string[] | string;
  categories?: MediaCategorySlug[] | MediaCategorySlug;
};

export class MediaRepo {
  private data: Media[];
  constructor(props?: Props) {
    this.data = props?.mediaData ?? mediaData;
  }
  findByCategory = (category: MediaCategorySlug): Media[] => {
    return this.data.filter((media) => media.category === category);
  };
  findBySlug = (slug: string): Media | null => {
    return this.data.filter((media) => media.media_slug === slug)?.[0] ?? null;
  };
  search = (params: SearchParams, sortByRelevance = true): Media[] => {
    const { tagSlugs, categories: searchCategs } = params;
    const slugs = typeof tagSlugs === 'string' ? [tagSlugs] : tagSlugs;
    const categories =
      typeof searchCategs === 'string' ? [searchCategs] : searchCategs;

    const data: Media[] =
      categories !== undefined
        ? this.data.filter((media) => categories.includes(media.category))
        : this.data;

    let filtered: Media[] = [];

    if (slugs === undefined) {
      filtered = data;
    } else {
      const relevanceMap = new Map<string, number>();
      filtered = data.filter((media) => {
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
      if (sortByRelevance) {
        filtered = filtered.sort((a, b) => {
          const relevanceA = relevanceMap.get(a.media_slug) ?? 0;
          const relevanceB = relevanceMap.get(b.media_slug) ?? 0;
          return relevanceB - relevanceA;
        });
      }
    }
    return filtered;
  };
}
