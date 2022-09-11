import * as S from './video-footer.style';
import { VideoCarrousel } from './video-carrousel';
import { Media } from '@/data/data.types';
import { SupportedLang } from '@/features/video/types';
import { useEffect, useState } from 'react';
import { EmbedMenu } from '@/features/menu/embed/embed-menu';
import Link from 'next/link';
import useCookie from 'react-use-cookie';

type Props = {
  media: Media[];
  lang: SupportedLang;
  selectedVideo: Media;
  selectVideo: (media: Media) => void;
};

export const VideoFooter: React.FC<Props> = (props) => {
  const { media, lang, selectedVideo, selectVideo } = props;
  const [userToken, setUserToken] = useCookie('token', '0');
  const [session, setSession] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [allHover, setAllHover] = useState(false);
  const [favHover, setFavHover] = useState(false);

  let page = '';

  if (
    selectedVideo &&
    selectedVideo.category &&
    selectedVideo.category === 'workshops'
  ) {
    page = 'workshop';
  } else if (
    selectedVideo &&
    selectedVideo.category &&
    selectedVideo.category === 'life-art'
  ) {
    page = 'lifeart';
  } else if (
    selectedVideo &&
    selectedVideo.category &&
    selectedVideo.category === 'roadmaps'
  ) {
    page = 'roadmaps';
  }

  useEffect(() => {
    if (userToken && userToken !== '0') {
      setSession(true);
    } else setSession(false);
  }, [userToken]);

  return (
    <S.Ctn>
      <div
        className="embed-menu"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}>
        {showMenu ? (
          <EmbedMenu page={page !== '' ? page : undefined} />
        ) : (
          <Link href={'/menu'} passHref>
            {page === 'lifeart' ? (
              <img
                src="/images/ui/menu/eye.png"
                alt="menu"
                className="toggle"
              />
            ) : page === 'roadmaps' ? (
              <img
                src="/images/ui/menu/hand.png"
                alt="menu"
                className="toggle-road"
              />
            ) : page === 'workshop' ? (
              <img
                src="/images/ui/menu/round.png"
                alt="menu"
                className="toggle-workshop"
              />
            ) : (
              <img
                src="/images/ui/menu/mouth.png"
                alt="menu"
                className="toggle"
              />
            )}
          </Link>
        )}
      </div>
      <div className="topBar">
        <div className="desktop">
          <div className="left">{media[0] && media[0].category}</div>
          <div className="center">
            {media.indexOf(selectedVideo) > 0 && (
              <Link
                href={'#' + media[media.indexOf(selectedVideo) - 1].media_slug}
                passHref>
                <button
                  onClick={() => {
                    selectVideo(media[media.indexOf(selectedVideo) - 1]);
                  }}>
                  <img
                    src="/images/ui/elements/left-arrow-halprin.png"
                    alt="<"
                    className="arrow dir-left"
                  />
                </button>
              </Link>
            )}
            {media.indexOf(selectedVideo) + 1} / {media.length}
            {media.indexOf(selectedVideo) < media.length - 1 && (
              <Link
                href={'#' + media[media.indexOf(selectedVideo) + 1].media_slug}
                passHref>
                <button
                  onClick={() => {
                    selectVideo(media[media.indexOf(selectedVideo) + 1]);
                  }}>
                  <img
                    src="/images/ui/elements/right-arrow-halprin.png"
                    alt=">"
                    className="arrow dir-right"
                  />
                </button>
              </Link>
            )}
          </div>
          <div className="right">
            {session ? (
              <>
                <Link href="/video/all" passHref>
                  {allHover ? (
                    <img
                      src="/images/ui/elements/all-halprin-hover.png"
                      onMouseLeave={() => setAllHover(false)}
                      alt="All"
                      className="allBtn"
                    />
                  ) : (
                    <img
                      src="/images/ui/elements/all-halprin.png"
                      onMouseEnter={() => setAllHover(true)}
                      alt="All"
                      className="allBtn"
                    />
                  )}
                </Link>
                <Link href="/video/favorites" passHref>
                  {favHover ? (
                    <img
                      src="/images/ui/elements/favorite-halprin.png"
                      onMouseLeave={() => setFavHover(false)}
                      alt="Favorite"
                      className="favBtn"
                    />
                  ) : (
                    <img
                      src="/images/ui/elements/favorite-hover-halprin.png"
                      onMouseEnter={() => setFavHover(true)}
                      alt="Favorite"
                      className="favBtn"
                    />
                  )}
                </Link>
                <Link href="/video/watched" passHref>
                  <img
                    src="/images/ui/video/eye-arrow.png"
                    className="btn-icon"
                    alt="Already Seen"
                  />
                </Link>
                <Link href="/video/unwatched" passHref>
                  <img
                    src="/images/ui/video/eye.png"
                    className="btn-icon"
                    alt="Unseen"
                  />
                </Link>
              </>
            ) : null}
          </div>
        </div>
        <div className="mobile">
          <div className="center">
            {media.indexOf(selectedVideo) > 0 && (
              <Link
                href={'#' + media[media.indexOf(selectedVideo) - 1].media_slug}
                passHref>
                <button
                  onClick={() => {
                    selectVideo(media[media.indexOf(selectedVideo) - 1]);
                  }}>
                  <img
                    src="/images/ui/elements/left-arrow-halprin.png"
                    alt="<"
                    className="arrow dir-left"
                  />
                </button>
              </Link>
            )}
            {media.indexOf(selectedVideo) + 1} / {media.length}
            {media.indexOf(selectedVideo) < media.length - 1 && (
              <Link
                href={'#' + media[media.indexOf(selectedVideo) + 1].media_slug}
                passHref>
                <button
                  onClick={() => {
                    selectVideo(media[media.indexOf(selectedVideo) + 1]);
                  }}>
                  <img
                    src="/images/ui/elements/right-arrow-halprin.png"
                    alt=">"
                    className="arrow dir-right"
                  />
                </button>
              </Link>
            )}
          </div>
          <div className="bottom">
            <Link href="/video/all" passHref>
              {allHover ? (
                <img
                  src="/images/ui/elements/all-halprin-hover.png"
                  onMouseLeave={() => setAllHover(false)}
                  alt="All"
                  className="allBtn"
                />
              ) : (
                <img
                  src="/images/ui/elements/all-halprin.png"
                  onMouseEnter={() => setAllHover(true)}
                  alt="All"
                  className="allBtn"
                />
              )}
            </Link>
            <Link href="/video/favorites" passHref>
              {favHover ? (
                <img
                  src="/images/ui/elements/favorite-halprin.png"
                  onMouseLeave={() => setFavHover(false)}
                  alt="Favorite"
                  className="favBtn"
                />
              ) : (
                <img
                  src="/images/ui/elements/favorite-hover-halprin.png"
                  onMouseEnter={() => setFavHover(true)}
                  alt="Favorite"
                  className="favBtn"
                />
              )}
            </Link>
            <Link href="/video/watched" passHref>
              <img
                src="/images/ui/video/eye-arrow.png"
                className="btn-icon"
                alt="Already seen"
              />
            </Link>
            <Link href="/video/unwatched" passHref>
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
