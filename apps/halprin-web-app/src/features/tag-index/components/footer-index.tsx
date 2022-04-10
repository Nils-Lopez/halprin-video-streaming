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
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"></path>
                        <polyline points="11 7 6 12 11 17"></polyline>
                        <polyline points="17 7 12 12 17 17"></polyline>
                      </svg>
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
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"></path>
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
                All&nbsp;
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
          )}
        </div>
        <div className="desktop">
          <div
            className="embed-menu desktop"
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}>
            {showMenu ? (
              <EmbedMenu
                lang={lang}
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
                  {lang === 'en' ? 'LISTNAME:   ' : 'NOM DE LISTE:  '}
                  {selectedTag && selectedTag.label ? (
                    <>[INDEX] {selectedTag.label[lang]}</>
                  ) : null}
                </div>
                <div className="center">
                  {media.indexOf(selectedVideo) > 0 && (
                    <Link
                      href={
                        '#' + media[media.indexOf(selectedVideo) - 1].media_slug
                      }
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
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"></path>
                        <polyline points="11 7 6 12 11 17"></polyline>
                        <polyline points="17 7 12 12 17 17"></polyline>
                      </svg>
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
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"></path>
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
                {lang === 'en' ? 'LISTNAME:   ' : 'NOM DE LISTE:  '}
                {selectedTag && selectedTag.label ? (
                  <>[INDEX] {selectedTag.label[lang]}</>
                ) : null}
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
          )}
        </div>
      </S.FooterContainer>
    </>
  );
};
