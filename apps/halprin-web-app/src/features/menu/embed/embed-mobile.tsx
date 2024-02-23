import Link from 'next/link';
import { useState } from 'react';
import { Media, Tag } from '@/data/data.types';
import { MobileMenu } from './embed-mobile.style';

type Props = {
  lang: string;
  index?: {
    selectTag: (tag: Tag) => void;
    selectVideo: (media: Media) => void;
  };
  source?: string;
};

export const EmbedMobile: React.FC<Props> = (props) => {
  const { lang, index, source } = props;

  const path =
    source === 'roadmaps'
      ? 'hand'
      : source === 'workshops'
        ? 'round'
        : source === 'life-art'
          ? 'eye'
          : 'mouth';

  return (
    <MobileMenu>
      <div className="mobile-menu-toggle">
        <Link href={'/' + lang + '/menu'}>
          <img
            src={'/images/ui/menu/' + path + '.png'}
            alt="Menu"
            className="mouthImg"
          />
        </Link>
      </div>
    </MobileMenu>
  );
};
