import * as S from './video-footer.style';
import { VideoCarrousel } from './video-carrousel';
import { VideoSlide } from '@/features/video/data-repository';

type Props = {
  videos: VideoSlide[];
  videosIndex: number;
  setVideosIndex: any;
};

export const VideoFooter: React.FC<Props> = (props) => {
  const { videos, videosIndex, setVideosIndex } = props;

  return (
    <S.Ctn>
      <div className="topbar">
        <div className="left">
          <small>LISTNAME: </small> {videos[0].keywords[0]}
        </div>
        <div className="center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 chevron" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => console.log('previous')}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
          {videosIndex} / {videos.length}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 chevron" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setVideosIndex()}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </div>
        <div className="right">
          <button>All</button>
          <button>My List</button>
          <button>To see</button>
          <button>Already Seen</button>
        </div>
      </div>
      <VideoCarrousel category={'workshop'} videos={videos} />
    </S.Ctn>
  );
};
