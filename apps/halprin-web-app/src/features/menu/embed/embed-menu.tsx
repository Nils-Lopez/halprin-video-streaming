import * as S from './embed-menu.style';
import Link from 'next/link';
import { Media } from '@/data/data.types';

type Props = {
  lang: string;
  selectVideo?: (media: Media) => void;
  selectedVideo?: Media;
};

export const EmbedMenu: React.FC<Props> = (props) => {
  const { lang, selectVideo, selectedVideo } = props;

  console.log(lang);

  return (
    <S.Circle>
      <div className="topIcon">
        <Link href={'/video/category/workshops'} passHref>
          <img
            src={'/images/ui/menu/round.png'}
            alt={'workshops'}
            className="roundImg"
          />
        </Link>
      </div>
      <div className="midContainer">
        <div className="leftIcon">
          <Link href={'/video/category/life-art'} passHref>
            <img
              src={'/images/ui/menu/eye.png'}
              alt={'life and art'}
              className="eyeImg"
            />
          </Link>
        </div>
        <div className="centered">
          <Link href="/menu" passHref>
            <div className="logo">
              <img
                src={'/images/ui/menu/triangle-halprin-white-' + 'en' + '.png'}
                alt="Anna Halprin - Dancing Life"
                className="triangle"
              />
            </div>
          </Link>
        </div>
        <div className="rightIcon">
          <Link href={'/video/category/roadmaps'} passHref>
            <img
              src={'/images/ui/menu/hand.png'}
              alt={'workshops'}
              className="handImg"
            />
          </Link>
        </div>
      </div>
      <div className="bottomIcon">
        {selectedVideo && selectedVideo.thumb !== 'false' ? (
          <button
            onClick={() => {
              if (selectVideo) {
                selectVideo({ thumb: 'false' });
              }
            }}>
            <img
              src={'/images/ui/menu/mouth.png'}
              alt="Menu"
              className="mouthImg"
            />
          </button>
        ) : (
          <Link
            href={
              selectedVideo && selectedVideo.thumb !== 'false'
                ? '#A'
                : '/tag-index'
            }
            passHref>
            <img
              src={'/images/ui/menu/mouth.png'}
              alt="Menu"
              className="mouthImg"
            />
          </Link>
        )}
      </div>
    </S.Circle>
  );
};
