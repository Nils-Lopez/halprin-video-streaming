import { Media } from '@/data/data.types';
import { FC, useEffect, useState } from 'react';
import * as S from './video-player.style';

type Props = {
  video: Media;
};

export const VideoPlayer: FC<Props> = (props) => {
  const { video } = props;
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (video && video.url && typeof video.url === 'string') {
      setUrl('https://player.vimeo.com/video' + video.url.substring(17, 28));
    }
  }, [video]);

  return (
    <S.Ctn>
      {url && url[0] === 'h' ? (
        <iframe
          src={url}
          title={Math.random().toString(36).substring(2, 9)}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay;"
          allowFullScreen></iframe>
      ) : (
        <div className="loader"></div>
      )}
    </S.Ctn>
  );
};
