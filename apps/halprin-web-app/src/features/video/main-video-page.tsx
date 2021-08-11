import { MainLayout } from '@/components/layout/main-layout';
import { useTranslation } from 'next-i18next';
import { videoConfig } from './video.config';
import * as S from './main-video-page.style';
import { VideoPlayer } from '@/features/video/components/video-player';
import React, {useState} from 'react';
import { VideoNavbar } from './components/video-navbar';
import { VideoFooter } from './components/video-footer';
import {
  getVideosFromCategory,
  getVideoUrlFromPageId,
} from '@/features/video/data-repository';

type Props = {
  children?: never;
  pageId?: string;
};

export const MainVideoPage: React.FC<Props> = (props) => {
  const { pageId = 'test' } = props;
  const lang = 'en';
  const [videosIndex, setVideosIndex] = useState(0)
  const [showMenu, setShowMenu] = useState(false)
  const videos = getVideosFromCategory('workshop', lang);
  const url = getVideoUrlFromPageId(pageId)

  return (
    <>
      <MainLayout>
        <S.Ctn>
          <VideoNavbar categories={['body', 'workshop', 'experiment', 'workshop', 'experiment']}/>
          <VideoPlayer url={url} />
          <div className="ml-15">
            {showMenu ? <>MENU</> : <button onClick={() => {setShowMenu(true)}}>Menu</button>}
          </div>
          <VideoFooter videos={videos} videosIndex={videosIndex} setVideosIndex={setVideosIndex}/>
        </S.Ctn>
      </MainLayout>
    </>
  );
};
