import { Fragment, FC } from 'react';
import * as S from './video-carrousel.style';
import { VideoSlide } from '@/features/video/data-repository';

type Props = {
  category: string;
  videos: VideoSlide[];
};

export const VideoCarrousel: FC<Props> = (props) => {
  const { videos } = props;

  return (
    <>
      <S.Ctn>
        <div className="slider">
          {videos.map((video, index) => {
            return (
              <Fragment key={video.page_id}>
                {index === 0 ? (
                  <S.MainSlide>
                    <img
                      alt={'Random'}
                      src={'https://source.unsplash.com/random/800x600?fire'}
                    />
                    <div className="video-title">{video.title}</div>
                  </S.MainSlide>
                ) : (
                  <S.Slide>
                    <img alt={'Random'} src={video.thumbUrl} />
                    <div className="video-title">{video.title}</div>
                  </S.Slide>
                )}
              </Fragment>
            );
          })}
        </div>
      </S.Ctn>
    </>
  );
};
