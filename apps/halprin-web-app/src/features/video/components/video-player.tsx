import { FC } from 'react';
import * as S from './video-player.style';

type Props = {
  url: string;
};

export const VideoPlayer: FC<Props> = (props) => {
  const { url } = props;
  return (
    <S.Ctn>
      <h1>{url}</h1>
      <iframe
        src="https://player.vimeo.com/video/583334078?autoplay=1&loop=1&autopause=0"
        title={Math.random().toString(36).substring(2, 9)}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay;"
        allowFullScreen></iframe>
    </S.Ctn>
  );
};
