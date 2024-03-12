import * as S from './embed-menu.style';
import Link from 'next/link';
import { Media } from '@/data/data.types';
import {useState, useEffect} from 'react';
import { set } from 'mongoose';

type Props = {
  selectVideo?: (media: Media) => void;
  selectedVideo?: Media;
  page?: string;
};

export const EmbedMenu: React.FC<Props> = (props) => {
  const { selectVideo, selectedVideo, page } = props;
  const [category, setCategory] = useState(page);

  useEffect(() => {
    console.log(selectedVideo?.category);
    if (selectedVideo && selectedVideo.category !== "archives") {
      setCategory(selectedVideo.category?.replaceAll('-', ''));
    } else {
      setCategory(page);
    }
  }, []);

  return (
    <S.Circle>
      {!category ? (
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
                      '/images/ui/elements/triangle-halprin-black-' +
                      'en' +
                      '.png'
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
      ) : category === 'roadmaps' ? (
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
                      '/images/ui/elements/triangle-halprin-black-' +
                      'en' +
                      '.png'
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
      ) : category === 'lifeart' ? (
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
                      '/images/ui/elements/triangle-halprin-black-' +
                      'en' +
                      '.png'
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
                      '/images/ui/elements/triangle-halprin-black-' +
                      'en' +
                      '.png'
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
