import { Fragment, FC } from 'react';
import * as S from './video-carrousel.style';
import { Media } from '@/data/data.types';
import { SupportedLang } from '@/features/video/types';

type Props = {
  lang: SupportedLang;
  media: Media[];
  playedVideo: any;
  setPlayedVideo: any;
};

export const VideoCarrousel: FC<Props> = (props) => {
  const { media, lang, playedVideo, setPlayedVideo } = props;

  return (
    <>
      <S.Carrousel>
        <div className={media.length <= 3 ? 'carrousel-centered' : 'carrousel'}>
          {media.map((media) => {
            const thumb = media.thumb;
            const title = media.title;
            return (
              <Fragment key={media.media_slug}>
                {media === playedVideo ? (
                  <div className="main">
                    <div className="now-playing">
                      NOW <br /> PLAYING
                    </div>
                    <div className="video-title">{title[lang]}</div>
                  </div>
                ) : (
                  <div className="slide">
                    <img src={thumb} alt={'A picture of : ' + title[lang]} />
                    <div className="video-title">{title[lang]}</div>
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
      </S.Carrousel>
    </>
  );
};
