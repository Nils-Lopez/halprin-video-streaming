import { Tag } from '@/data/data.types';
import { tagsData } from '@/data/tags.data';

type Props = {
  tagData: Tag[];
};

export class TagLabelRepo {
  private data: Tag[];
  constructor(props?: Props) {
    this.data = props?.tagData ?? tagsData;
  }
  findBySlug = (slug: string): Tag | null => {
    return this.data.filter((tag) => tag.tag_slug === slug)?.[0] ?? null;
  };
}
