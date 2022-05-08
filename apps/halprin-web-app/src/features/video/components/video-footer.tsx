import * as S from './video-footer.style';
import { VideoCarrousel } from './video-carrousel';
import { Media } from '@/data/data.types';
import { SupportedLang } from '@/features/video/types';
import { useState } from 'react';
import { EmbedMenu } from '@/features/menu/embed/embed-menu';
import Link from 'next/link';

type Props = {
  media: Media[];
  lang: SupportedLang;
  selectedVideo: Media;
  selectVideo: (media: Media) => void;
};

export const VideoFooter: React.FC<Props> = (props) => {
  const { media, lang, selectedVideo, selectVideo } = props;

  const [showMenu, setShowMenu] = useState(false);

  return (
    <S.Ctn>
      <div
        className="embed-menu"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}>
        {showMenu ? (
          <EmbedMenu lang="en" />
        ) : (
          <Link href={'/menu'} passHref>
            <img
              src="/images/ui/menu/mouth.png"
              alt="menu"
              className="toggle"
            />
          </Link>
        )}
      </div>
      <div className="topBar">
        <div className="desktop">
          <div className="left">LISTNAME: {media[0] && media[0].category}</div>
          <div className="center">
            {media.indexOf(selectedVideo) > 0 && (
              <Link
                href={'#' + media[media.indexOf(selectedVideo) - 1].media_slug}
                passHref>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevrons-left center-icon"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onClick={() => {
                    selectVideo(media[media.indexOf(selectedVideo) - 1]);
                  }}>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="11 7 6 12 11 17"></polyline>
                  <polyline points="17 7 12 12 17 17"></polyline>
                </svg>
              </Link>
            )}
            {media.indexOf(selectedVideo) + 1} / {media.length}
            {media.indexOf(selectedVideo) < media.length - 1 && (
              <Link
                href={'#' + media[media.indexOf(selectedVideo) + 1].media_slug}
                passHref>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevrons-right center-icon"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onClick={() => {
                    selectVideo(media[media.indexOf(selectedVideo) + 1]);
                  }}>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="7 7 12 12 7 17"></polyline>
                  <polyline points="13 7 18 12 13 17"></polyline>
                </svg>
              </Link>
            )}
          </div>
          <div className="right">
            <Link href="/video/all" passHref>
              ALL
            </Link>
            <Link href="/video/favorites" passHref>
              Fav
            </Link>
            <Link href="/video/already-seens" passHref>
              <img
                src="/images/ui/video/eye-arrow.png"
                className="btn-icon"
                alt="Already Seen"
              />
            </Link>
            <Link href="/video/unseens" passHref>
              <img
                src="/images/ui/video/eye.png"
                className="btn-icon"
                alt="Unseen"
              />
            </Link>
          </div>
        </div>
        <div className="mobile">
          <div className="center">
            {media.indexOf(selectedVideo) > 0 && (
              <Link
                href={'#' + media[media.indexOf(selectedVideo) - 1].media_slug}
                passHref>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevrons-left center-icon"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onClick={() => {
                    selectVideo(media[media.indexOf(selectedVideo) - 1]);
                  }}>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="11 7 6 12 11 17"></polyline>
                  <polyline points="17 7 12 12 17 17"></polyline>
                </svg>
              </Link>
            )}
            {media.indexOf(selectedVideo) + 1} / {media.length}
            {media.indexOf(selectedVideo) < media.length - 1 && (
              <Link
                href={'#' + media[media.indexOf(selectedVideo) + 1].media_slug}
                passHref>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevrons-right center-icon"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onClick={() => {
                    selectVideo(media[media.indexOf(selectedVideo) + 1]);
                  }}>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="7 7 12 12 7 17"></polyline>
                  <polyline points="13 7 18 12 13 17"></polyline>
                </svg>
              </Link>
            )}
          </div>
          <div className="bottom">
            <Link href="/video/all" passHref>
              ALL
            </Link>
            <Link href="/video/favorites" passHref>
              Fav
            </Link>
            <Link href="/video/already-seens" passHref>
              <img
                src="/images/ui/video/eye-arrow.png"
                className="btn-icon"
                alt="Already seen"
              />
            </Link>
            <Link href="/video/unseens" passHref>
              <img
                src="/images/ui/video/eye.png"
                className="btn-icon"
                alt="Unseen"
              />
            </Link>
          </div>
        </div>
      </div>
      <VideoCarrousel
        lang={lang}
        media={media}
        selectedVideo={selectedVideo}
        selectVideo={selectVideo}
      />
    </S.Ctn>
  );
};
