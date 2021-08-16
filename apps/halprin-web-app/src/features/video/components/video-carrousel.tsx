import { Fragment, FC } from 'react';
import * as S from './video-carrousel.style';
import { Media } from '@/data/data.types';
import { SupportedLang } from '@/features/video/types';

type Props = {
  lang: SupportedLang;
  media: Media[];
};

export const VideoCarrousel: FC<Props> = (props) => {
  const { media, lang } = props;

  return (
    <>
      <S.Carrousel>
        {media.map((media, index) => {
          const thumb = media.thumb;
          const title = media.title;
          return (
            <Fragment key={media.media_slug}>
              {index === 0 ? (
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
      </S.Carrousel>
    </>
  );
};
