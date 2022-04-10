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
};

export const EmbedMobile: React.FC<Props> = (props) => {
  const { lang, index } = props;
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <MobileMenu>
      {!mobileMenu ? (
        <div className="mobile-menu-toggle">
          <button
            onClick={() => {
              setMobileMenu(true);
            }}>
            <img
              src={'/images/ui/menu/mouth.png'}
              alt="Menu"
              className="mouthImg"
            />
          </button>
        </div>
      ) : (
        <div className="mobile-menu">
          <div className="close">
            <button onClick={() => setMobileMenu(false)}>
              <div className="mdiv">
                <div className="md"></div>
              </div>
            </button>
          </div>
          <div className="menu">
            <Link href="/video/category/workshops" passHref>
              <div className="workshopTxt">Workshop</div>
            </Link>
            <Link href="/video/category/life-art" passHref>
              <div className="lifeartTxt">Life-art</div>
            </Link>
            {index ? (
              <button
                onClick={() => {
                  index.selectTag({
                    label: { en: 'false', fr: '' },
                    media: [],
                  });
                  index.selectVideo({
                    thumb: 'false',
                  });
                }}
                className="indexTxt">
                Index
              </button>
            ) : (
              <Link href="/tag-index" passHref>
                <div className="indexTxt">Index</div>
              </Link>
            )}
            <Link href="/video/category/roadmaps" passHref>
              <div className="roadmapsTxt">Roadmaps</div>
            </Link>
          </div>
        </div>
      )}
    </MobileMenu>
  );
};
