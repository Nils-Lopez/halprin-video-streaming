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
      <S.Ctn>
        <div className="slider">
          {media.map((media, index) => {
            // @todo when thum is present
            //const thumb = media.thumb;
            const thumb = 'https://source.unsplash.com/random/800x600?fire';
            const title = media.title[lang];
            return (
              <Fragment key={media.media_slug}>
                {index === 0 ? (
                  <S.MainSlide>
                    <img alt={'Random'} src={thumb} />
                    <div className="video-title">{title}</div>
                  </S.MainSlide>
                ) : (
                  <S.Slide>
                    <img alt={'Random'} src={thumb} />
                    <div className="video-title">{title}</div>
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
