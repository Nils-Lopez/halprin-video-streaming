import { Media } from '@/data/data.types';
import { FC } from 'react';
import * as S from './video-player.style';

type Props = {
  video: Media;
};

export const VideoPlayer: FC<Props> = (props) => {
  const { video } = props;
  const url =
    video.url && 'https://player.vimeo.com/video' + video.url.substring(17, 28);
  return (
    <S.Ctn>
      <iframe
        src={url}
        title={Math.random().toString(36).substring(2, 9)}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay;"
        allowFullScreen></iframe>
    </S.Ctn>
  );
};
