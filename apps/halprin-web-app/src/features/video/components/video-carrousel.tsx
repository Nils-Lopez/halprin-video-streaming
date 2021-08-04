import { FC } from 'react';
import * as S from './video-carrousel.style';
import { VideoSlide } from '@/features/video/data-repository';

type Props = {
  category: string;
  videos: VideoSlide[];
};

export const VideoCarrousel: FC<Props> = (props) => {
  const { category, videos } = props;

  return (
    <S.Ctn>
      <h1>VideoCarrousel of {category}</h1>

      {videos.map((video) => {
        return (
          <S.Slide>
            <h5>{video.title}</h5>
            <img alt="video" src={video.thumbUrl} />
          </S.Slide>
        );
      })}
    </S.Ctn>
  );
};
