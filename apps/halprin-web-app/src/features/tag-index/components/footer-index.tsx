import React, { FC, useEffect, useState } from 'react';
import * as S from './footer-index.style';
import { VideoCarrousel } from '@/features/video/components/video-carrousel';
import { MediaRepo } from '@/features/video/repository/media.repo';
import { EmbedMenu } from '@/features/menu/embed/embed-menu';
import Link from 'next/link';
import { SupportedLang } from '@/features/video/types';
import { Media, Tag } from '@/data/data.types';

type Props = {
  selectedTag: Tag;
  selectedVideo: Media;
  selectVideo: (media: Media) => void;
  lang: SupportedLang;
  selectedMedia: Media;
};

const repo = new MediaRepo();

export const FooterIndex: FC<Props> = (props) => {
  const {
    selectedTag,
    selectedVideo,
    selectVideo,
    selectedMedia,
    lang = 'en',
  } = props;
  const [media, setMedia] = useState(repo.findByCategory('index'));
  const [showMenu, setShowMenu] = useState(false);
  const [allHover, setAllHover] = useState(false);
  const [favHover, setFavHover] = useState(false);

  useEffect(() => {
    if (
      selectedTag.label &&
      selectedTag.label.en !== 'false' &&
      selectedTag.media
    ) {
      setMedia(selectedTag.media);
    } else if (selectedMedia.thumb !== 'false') {
      const mediaArray = [];
      mediaArray.push(selectedVideo);
      setMedia(mediaArray);
    }
  }, [selectedTag, selectedMedia]);

  return (
    <>
      <S.FooterContainer>
        <div className="mobile">
          {selectedVideo && selectedVideo.thumb !== 'false' && media ? (
            <div className="video-topbar">
              <div className="head">
                <div className="center">
                  {media.indexOf(selectedVideo) > 0 && (
                    <Link
                      href={
                        '#' + media[media.indexOf(selectedVideo) - 1].media_slug
                      }
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
                  {selectedTag &&
                  !selectedTag.media &&
                  !selectedMedia ? null : (
                    <>
                      {media.indexOf(selectedVideo) + 1} / {media.length}
                    </>
                  )}
                  {media.indexOf(selectedVideo) < media.length - 1 && (
                    <Link
                      href={
                        '#' + media[media.indexOf(selectedVideo) + 1].media_slug
                      }
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
              <VideoCarrousel
                lang={lang}
                media={media}
                selectedVideo={selectedVideo}
                selectVideo={selectVideo}
              />
            </div>
          ) : (
            <div className="index-topbar">
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
                  src="/images/ui/video/watched.png"
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
          )}
        </div>
        <div className="desktop">
          <div
            className="embed-menu desktop"
            onMouseEnter={() => setShowMenu(true)}
            onMouseOver={() => setShowMenu(true)}
            onFocus={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}>
            {showMenu ? (
              <EmbedMenu
                selectVideo={selectVideo}
                selectedVideo={selectedVideo}
              />
            ) : (
              <img
                src="/images/ui/menu/mouth.png"
                alt="menu"
                className="toggle"
              />
            )}
          </div>
          {selectedVideo && selectedVideo.thumb !== 'false' && media ? (
            <div className="video-topbar">
              <div className="head">
                <div className="left">
                  {selectedTag && selectedTag.label ? <>[INDEX]</> : null}
                </div>
                <div className="center">
                  {media.indexOf(selectedVideo) > 0 && (
                    <Link
                      href={
                        '#' + media[media.indexOf(selectedVideo) - 1].media_slug
                      }
                      passHref>
                      <Link
                        href={
                          '#' +
                          media[media.indexOf(selectedVideo) - 1].media_slug
                        }
                        passHref>
                        <button
                          onClick={() => {
                            selectVideo(
                              media[media.indexOf(selectedVideo) - 1]
                            );
                          }}>
                          <img
                            src="/images/ui/elements/left-arrow-halprin.png"
                            alt="<"
                            className="arrow dir-left"
                          />
                        </button>
                      </Link>
                    </Link>
                  )}
                  {selectedTag && !selectedTag.media ? null : (
                    <>
                      {media.indexOf(selectedVideo) + 1} / {media.length}
                    </>
                  )}
                  {media.indexOf(selectedVideo) < media.length - 1 && (
                    <Link
                      href={
                        '#' + media[media.indexOf(selectedVideo) + 1].media_slug
                      }
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
                        onMouseEnter={() => setFavHover(false)}
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
                </div>
              </div>
              <VideoCarrousel
                lang={lang}
                media={media}
                selectedVideo={selectedVideo}
                selectVideo={selectVideo}
              />
            </div>
          ) : (
            <div className="index-topbar">
              <div className="left">
                {selectedTag && selectedTag.label ? <>[INDEX]</> : null}
              </div>
              <div className="right">
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
              </div>
            </div>
          )}
        </div>
      </S.FooterContainer>
    </>
  );
};
