import * as S from './embed-menu.style';
import Link from 'next/link';
import { Media } from '@/data/data.types';

type Props = {
  selectVideo?: (media: Media) => void;
  selectedVideo?: Media;
  page?: string;
};

export const EmbedMenu: React.FC<Props> = (props) => {
  const { selectVideo, selectedVideo, page } = props;

  console.log('ah drr');

  return (
    <S.Circle>
      {!page ? (
        <>
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
                    src={
                      '/images/ui/menu/triangle-halprin-white-' + 'en' + '.png'
                    }
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
        </>
      ) : page === 'roadmaps' ? (
        <>
          <div className="topIcon-road">
            <Link href={'/video/category/life-art'} passHref>
              <img
                src={'/images/ui/menu/eye.png'}
                alt={'life and art'}
                className="eyeImg"
              />
            </Link>
          </div>
          <div className="midContainer">
            <div className="leftIcon-road">
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
            </div>
            <div className="centered-road">
              <Link href="/menu" passHref>
                <div className="logo">
                  <img
                    src={
                      '/images/ui/menu/triangle-halprin-white-' + 'en' + '.png'
                    }
                    alt="Anna Halprin - Dancing Life"
                    className="triangle"
                  />
                </div>
              </Link>
            </div>
            <div className="rightIcon-road">
              <Link href={'/video/category/workshops'} passHref>
                <img
                  src={'/images/ui/menu/round.png'}
                  alt={'workshops'}
                  className="roundImg"
                />
              </Link>
            </div>
          </div>
          <div className="bottomIcon-road">
            <Link href={'/video/category/roadmaps'} passHref>
              <img
                src={'/images/ui/menu/hand.png'}
                alt={'workshops'}
                className="handImg"
              />
            </Link>
          </div>
        </>
      ) : page === 'lifeart' ? (
        <>
          <div className="topIcon-lifeart">
            <Link href={'/video/category/roadmaps'} passHref>
              <img
                src={'/images/ui/menu/hand.png'}
                alt={'workshops'}
                className="handImg"
              />
            </Link>
          </div>
          <div className="midContainer">
            <div className="leftIcon-lifeart">
              <Link href={'/video/category/workshops'} passHref>
                <img
                  src={'/images/ui/menu/round.png'}
                  alt={'workshops'}
                  className="roundImg"
                />
              </Link>
            </div>
            <div className="centered-lifeart">
              <Link href="/menu" passHref>
                <div className="logo">
                  <img
                    src={
                      '/images/ui/menu/triangle-halprin-white-' + 'en' + '.png'
                    }
                    alt="Anna Halprin - Dancing Life"
                    className="triangle"
                  />
                </div>
              </Link>
            </div>
            <div className="rightIcon-lifeart">
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
            </div>
          </div>
          <div className="bottomIcon-lifeart">
            <Link href={'/video/category/life-art'} passHref>
              <img
                src={'/images/ui/menu/eye.png'}
                alt={'life and art'}
                className="eyeImg"
              />
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="topIcon-workshop">
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
          </div>
          <div className="midContainer">
            <div className="leftIcon-workshop">
              <Link href={'/video/category/life-art'} passHref>
                <img
                  src={'/images/ui/menu/eye.png'}
                  alt={'life and art'}
                  className="eyeImg"
                />
              </Link>
            </div>
            <div className="centered-workshop">
              <Link href="/menu" passHref>
                <div className="logo">
                  <img
                    src={
                      '/images/ui/menu/triangle-halprin-white-' + 'en' + '.png'
                    }
                    alt="Anna Halprin - Dancing Life"
                    className="triangle"
                  />
                </div>
              </Link>
            </div>

            <div className="rightIcon-workshop">
              <Link href={'/video/category/roadmaps'} passHref>
                <img
                  src={'/images/ui/menu/hand.png'}
                  alt={'workshops'}
                  className="handImg"
                />
              </Link>
            </div>
          </div>
          <div className="bottomIcon-workshop">
            <Link href={'/video/category/workshops'} passHref>
              <img
                src={'/images/ui/menu/round.png'}
                alt={'workshops'}
                className="roundImg"
              />
            </Link>
          </div>
        </>
      )}
    </S.Circle>
  );
};
