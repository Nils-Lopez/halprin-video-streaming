import { FC } from 'react';
import * as S from './video-carrousel.style';
import { VideoSlide } from '@/features/video/data-repository';
import Image from 'next/image';

type Props = {
  category: string;
  videos: VideoSlide[];
};

export const VideoCarrousel: FC<Props> = (props) => {
  const { videos } = props;

  return (<>
      <S.Ctn>
        <div className="slider">
          {videos.map((video, index) => {
            return (
              <>
                {index === 0 ? <S.MainSlide>
                  <Image src={"https://source.unsplash.com/random/800x600?fire"} />
                  <div className="video-title">
                    {video.title}
                  </div>
                </S.MainSlide> : <S.Slide>
                  <Image src={video.thumbUrl} />
                  <div className="video-title">
                    {video.title}
                  </div>
                </S.Slide>}
              </>
            )
          })}
        </div>
      </S.Ctn>
    </>)
};
