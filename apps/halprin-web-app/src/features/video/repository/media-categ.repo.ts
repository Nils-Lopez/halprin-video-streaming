import { MediaCategory, MediaCategorySlug } from '@/data/data.types';
import { mediaCategoryData } from '@/data/media-category.data';

type Props = {
  mediaCategoryData?: MediaCategory[];
};

export class MediaCategRepo {
  private data: MediaCategory[];
  constructor(props?: Props) {
    this.data = props?.mediaCategoryData ?? mediaCategoryData;
  }
  exists = (categSlug: string): categSlug is MediaCategorySlug => {
    return (
      this.data.filter((categ) => categ.categ_slug === categSlug).length === 1
    );
  };
}
