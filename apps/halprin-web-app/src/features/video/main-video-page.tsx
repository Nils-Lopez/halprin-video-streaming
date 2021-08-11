import { MainLayout } from '@/components/layout/main-layout';
import { useTranslation } from 'next-i18next';
import { videoConfig } from './video.config';
import * as S from './main-video-page.style';
import { VideoPlayer } from '@/features/video/components/video-player';
import React, { useState } from 'react';
import { VideoNavbar } from './components/video-navbar';
import { VideoFooter } from './components/video-footer';
import { SupportedLang } from '@/features/video/types';
import { MediaRepo } from '@/features/video/repository/media.repo';
import { mediaCategoryData } from '@/data/media-category.data';

type Props = {
  lang: SupportedLang;
  children?: never;
  pageId?: string;
};

export const MainVideoPage: React.FC<Props> = (props) => {
  const { pageId = 'test', lang } = props;
  const [videosIndex, setVideosIndex] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const media = new MediaRepo().search({
    // Optionally search also by tagSlugs
    //tagSlugs: ['keywords']
    categories: ['workshops'],
  });

  // todo on mettra la bonne après
  const url =
    'https://player.vimeo.com/external/583334078.sd.mp4?s=685558fc99397ec030c0866c145927d29e602e30&profile_id=165';

  return (
    <>
      <MainLayout>
        <S.Ctn>
          <VideoNavbar categories={mediaCategoryData} lang={lang} />
          <VideoPlayer url={url} />
          <div className="ml-15">
            {showMenu ? (
              <>MENU</>
            ) : (
              <button
                onClick={() => {
                  setShowMenu(true);
                }}>
                Menu
              </button>
            )}
          </div>
          <VideoFooter
            lang={lang}
            media={media}
            videosIndex={videosIndex}
            setVideosIndex={setVideosIndex}
          />
        </S.Ctn>
      </MainLayout>
    </>
  );
};
