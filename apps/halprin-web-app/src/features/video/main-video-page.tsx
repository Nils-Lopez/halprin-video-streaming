import { MainLayout } from '@/components/layout/main-layout';
import * as S from './main-video-page.style';
import { VideoPlayer } from '@/features/video/components/video-player';
import React, { useState, useEffect } from 'react';
import { VideoNavbar } from './components/video-navbar';
import { VideoFooter } from './components/video-footer';
import { SupportedLang } from '@/features/video/types';
import { MediaRepo } from '@/features/video/repository/media.repo';
import { TagLabelRepo } from '@/features/video/repository/tag-label.repo';
import { isNonEmptyString } from '@contredanse/common';
import { Media, MediaCategorySlug, MediaTag, Tag } from '@/data/data.types';
import { EmbedMobile } from '../menu/embed/embed-mobile';
import { getCookie } from 'react-use-cookie';
import axios from 'axios';
import JWT from 'expo-jwt';

type Props = {
  lang: SupportedLang;
  categorySlug?: MediaCategorySlug;
  tagSlugs: string[];
  searchType: string;
  children?: never;
  pageId?: string;
};

export const MainVideoPage: React.FC<Props> = (props) => {
  const { lang, categorySlug, tagSlugs, searchType } = props;
  const [selectedVideo, selectVideo] = useState<Media>({ thumb: 'false' });
  const [videoTags, setVideoTags] = useState<Tag[]>([
    { tag_slug: 'false', label: { fr: 'false', en: '' } },
  ]);
  const [mode, setMode] = useState('');
  const [mediaList, setMediaList] = useState<Media[]>([{ thumb: 'false' }]);
  const [media, setMedia] = useState<Media[]>([{ thumb: 'false' }]);
  const [emptyList, setEmptyList] = useState({ en: '', fr: '' });
  const [session, setSession] = useState<boolean | string>(false);

  const token = getCookie('token');

  useEffect(() => {
    if (token && token !== '0') {
      setSession(token);
    }
  }, [token]);

  useEffect(() => {
    if (session && mode === '') {
      const playlistsRouter = async () => {
        if (searchType === 'favorites') {
          try {
            const getFav = async () => {
              const allMedia = new MediaRepo().get();
              const email =
                session.toString() === session
                  ? JWT.decode(session, 'Halprin-Web-App').user
                  : null;
              const res = await axios.get('/api/users/' + email);
              const user = res.data;
              const media = [{ thumb: 'false' }];
              if (!user.favMedia[0]) {
                setEmptyList({
                  fr: 'Toutes les vidéos ajoutées aux favoris apparaitront ici.',
                  en: 'All the favorited videos will appear here.',
                });
              } else {
                setEmptyList({ fr: '', en: '' });
              }
              await allMedia.map((m) => {
                if (m.media_slug) {
                  if (user.favMedia.includes(m.media_slug)) {
                    media.push(m);
                  }
                }
              });
              return media;
            };
            await getFav().then((r) => {
              setMediaList(r);
            });
            setMode('playlist');
          } catch (e) {
            console.log('ERROR', e);
          }
        } else if (searchType === 'watched') {
          try {
            console.log('je psase dans watched');
            const getWatched = async () => {
              const allMedia = new MediaRepo().get();
              const email =
                session.toString() === session
                  ? JWT.decode(session, 'Halprin-Web-App').user
                  : null;
              const res = await axios.get('/api/users/' + email);
              const user = res.data;
              const media = [{ thumb: 'false' }];
              if (!user.seenMedia[0]) {
                setEmptyList({
                  fr: 'Toutes les vidéos visionnées apparaitront ici.',
                  en: 'All the watched videos will appear here.',
                });
              } else {
                setEmptyList({ fr: '', en: '' });
              }
              console.log('watched : ', user.seenMedia);
              await allMedia.map((m) => {
                if (m.media_slug) {
                  if (user.seenMedia.includes(m.media_slug)) {
                    media.push(m);
                  }
                }
              });
              return media;
            };
            await getWatched().then((r) => {
              setMediaList(r);
            });
            setMode('playlist');
          } catch (e) {
            console.log('ERROR', e);
          }
        } else if (searchType === 'unwatched') {
          try {
            const getUnwatched = async () => {
              const allMedia = new MediaRepo().get();
              const email =
                session.toString() === session
                  ? JWT.decode(session, 'Halprin-Web-App').user
                  : null;
              const res = await axios.get('/api/users/' + email);
              const user = res.data;
              const media = [{ thumb: 'false' }];
              if (!user.seenMedia[0]) {
                setEmptyList({
                  fr: 'Toutes les vidéos non visionnées apparaitront ici.',
                  en: 'All the unwatched videos will appear here.',
                });
              } else {
                setEmptyList({ fr: '', en: '' });
              }
              await allMedia.map((m) => {
                if (m.media_slug) {
                  if (!user.seenMedia.includes(m.media_slug)) {
                    media.push(m);
                  }
                }
              });
              return media;
            };
            await getUnwatched().then((r) => {
              setMediaList(r);
            });
            setMode('playlist');
          } catch (e) {
            console.log('ERROR', e);
          }
        }
      };
      playlistsRouter();
    } else if (mode === '') {
      if (searchType === 'favorites') {
        setEmptyList({
          fr: 'Toutes les vidéos ajoutées aux favoris apparaitront ici.',
          en: 'All the favorited videos will appear here.',
        });
      } else if (searchType === 'watched') {
        setEmptyList({
          fr: 'Toutes les vidéos visionnés apparaîtront ici.',
          en: 'All the watched videos will appear here.',
        });
      } else if (searchType === 'unwatched') {
        setEmptyList({
          fr: 'Toutes les vidéos non visionnés apparaîtront ici.',
          en: 'All the unwatched videos will appear here.',
        });
      }
    }
  }, [session]);

  useEffect(() => {
    if (searchType === 'category') {
      const mediaData = new MediaRepo().search({
        ...(isNonEmptyString(categorySlug)
          ? { categories: [categorySlug] }
          : {}),
      });
      setMedia(mediaData);
    } else {
      const mediaData = new MediaRepo().search({
        ...(isNonEmptyString(tagSlugs[0]) ? { tagSlugs: [tagSlugs[0]] } : {}),
      });
      setMedia(mediaData);
    }
    if (searchType === 'all') {
      const getAll = () => {
        setMode('playlist');
        const allMedia = new MediaRepo().get();
        return allMedia;
      };
      const result = getAll();
      if (result) {
        setMediaList(result);
      }
    }
  }, [mediaList, mode, searchType, tagSlugs]);

  useEffect(() => {
    if (mode === 'playlist' && mediaList[1]) {
      const filteredMedia: Media[] = [];
      mediaList.map((media) => {
        if (media.thumb !== 'false') {
          filteredMedia.push(media);
        }
      });
      setMedia(filteredMedia);
    }
  }, [mediaList, mode]);

  useEffect(() => {
    if (
      (media[0] &&
        selectedVideo &&
        selectedVideo.tags &&
        selectedVideo.tags[0].tag_slug === '') ||
      !media.includes(selectedVideo)
    ) {
      selectVideo(media[0]);
    }
  }, [media]);

  useEffect(() => {
    if (
      selectedVideo &&
      selectedVideo.tags &&
      selectedVideo.tags[0].tag_slug !== ''
    ) {
      const mediaTags: Tag[] = [];
      selectedVideo.tags.map((tag: MediaTag) => {
        const tagData =
          tag.tag_slug && new TagLabelRepo().findBySlug(tag.tag_slug);
        const label = tagData ? tagData.label : { fr: '', en: '' };
        mediaTags.push({
          tag_slug: tag.tag_slug,
          relevance: tag.relevance,
          label: label,
        });
      });
      setVideoTags(mediaTags);
    }
  }, [selectedVideo]);

  return (
    <>
      <MainLayout media={selectedVideo} lang={lang} categorySlug={categorySlug}>
        <div>
          <EmbedMobile lang={lang} source={categorySlug} />
          <S.Ctn>
            <div className="navbar">
              <VideoNavbar categories={videoTags} lang={lang} />
            </div>
            <div className="video-container">
              {emptyList.fr === '' ? (
                <>
                  {selectedVideo && selectedVideo.thumb !== 'false' ? (
                    <VideoPlayer
                      source="video"
                      video={selectedVideo}
                      lang={lang}
                      media={media}
                      selectVideo={selectVideo}
                    />
                  ) : (
                    <div className="loader"></div>
                  )}
                </>
              ) : (
                <>
                  <h1 className="empty-msg">{emptyList[lang]}</h1>
                </>
              )}
            </div>
            <VideoFooter
              lang={lang}
              media={media}
              selectedVideo={selectedVideo}
              selectVideo={selectVideo}
            />
          </S.Ctn>
        </div>
      </MainLayout>
    </>
  );
};
