import { FC } from 'react';
import * as S from './video-player.style';

type Props = {
  url: string;
};

export const VideoPlayer: FC<Props> = (props) => {
  const { url } = props;

  return (
    <S.Ctn>
      <iframe src={url} className="video-player" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title={url}></iframe>
    </S.Ctn>
  );
};
