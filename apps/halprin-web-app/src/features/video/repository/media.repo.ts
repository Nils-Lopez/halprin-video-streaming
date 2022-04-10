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
  findByCredits = (id: number) => {
    const matchingMedia: Media[] = [];
    this.data.map((media) => {
      let matching = false;
      media.creditsIds?.map((credits) => {
        if (credits === id) {
          matching = true;
        }
      });
      if (matching) {
        matchingMedia.push(media);
      }
    });
    return matchingMedia;
  };
  search = (params: SearchParams, sortByRelevance = true): Media[] => {
    const { tagSlugs, categories: searchCategs } = params;
    const slugs = typeof tagSlugs === 'string' ? [tagSlugs] : tagSlugs;
    const categories =
      typeof searchCategs === 'string' ? [searchCategs] : searchCategs;
    const data: Media[] = categories
      ? this.data.filter((media) => categories[0] === media.category)
      : this.data;
    let filtered: Media[] = [];
    if (slugs === undefined) {
      filtered = data;
    } else {
      const relevanceMap = new Map<string, number>();
      filtered = data.filter((media) => {
        const count = media.tags ? media.tags.length : 0;
        let i = 0;
        let found = false;
        while (i < count && !found) {
          const tag = media.tags ? media.tags[i] : null;
          for (let k = 0; k < slugs.length; k++) {
            if (tag && tag.tag_slug === slugs[k] && media.media_slug) {
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
          if (a.media_slug && b.media_slug) {
            const relevanceA = relevanceMap.get(a.media_slug) ?? 0;
            const relevanceB = relevanceMap.get(b.media_slug) ?? 0;
            return relevanceB - relevanceA;
          } else {
            return 0;
          }
        });
      }
    }
    return filtered;
  };
  get = () => {
    return this.data;
  };
}
