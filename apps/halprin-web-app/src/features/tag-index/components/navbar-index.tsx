import { FC } from 'react';
import * as S from './navbar-index.style';
import Link from 'next/link';
import { VideoNavbar } from '../../video/components/video-navbar';
import { SupportedLang } from '@/features/video/types';
import { Media, Tag } from '@/data/data.types';

type Props = {
  tags: { slug: string; tag: Tag }[];
  videoTags: Tag[];
  lang: SupportedLang;
  selectedVideo: Media;
  setIndexMedia: (media: string[]) => void;
  indexMedia: string[];
};

export const NavbarIndex: FC<Props> = (props) => {
  const {
    tags,
    videoTags,
    selectedVideo,
    lang = 'en',
    setIndexMedia,
    indexMedia,
  } = props;

  const orderedLabels = new Array<string>();

  tags.forEach((tag: { slug: string; tag: Tag }) => {
    const capitalizeTheFirstLetterOfEachWord = (label: string) => {
      const separateWord = label.toLowerCase().split(' ');
      for (let i = 0; i < separateWord.length; i++) {
        separateWord[i] =
          separateWord[i].charAt(0).toUpperCase() +
          separateWord[i].substring(1);
      }
      return separateWord
        .join(' ')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    };
    if (tag.tag.label) {
      orderedLabels.push(
        capitalizeTheFirstLetterOfEachWord(tag.tag.label[lang])
      );
    }
  });

  orderedLabels.sort();

  const alphabet = () => {
    const letters: string[] = [];
    if (indexMedia && indexMedia[0] !== 'false' && indexMedia[0] !== 'true') {
      indexMedia.map((title: string, index: number) => {
        if (
          index === 0 ||
          (title
            .charAt(0)
            .toUpperCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') !==
            indexMedia[index - 1]
              .charAt(0)
              .toUpperCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '') &&
            !letters.includes(
              title
                .charAt(0)
                .toUpperCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
            ))
        ) {
          letters.push(
            title
              .charAt(0)
              .toUpperCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
          );
        }
      });
    } else {
      orderedLabels.forEach((tag: string, index: number) => {
        if (
          index === 0 ||
          tag.charAt(0).toUpperCase() !==
            orderedLabels[index - 1].charAt(0).toUpperCase()
        ) {
          letters.push(tag.charAt(0).toUpperCase());
        }
      });
    }
    return letters as string[];
  };

  const alphabetLinks = alphabet();

  return (
    <>
      {(videoTags.length > 0 &&
        selectedVideo &&
        selectedVideo.thumb !== 'false') ||
      (selectedVideo &&
        selectedVideo.tags &&
        selectedVideo.tags[0].tag_slug !== '') ? (
        <VideoNavbar categories={videoTags} lang={lang} />
      ) : (
        <S.Ctn>
          <div className="desktop">
            <div className="indexTitle">Index</div>
            <div className="nav">
              <div className="alphabetNav">
                {alphabetLinks.map((letter) => {
                  return (
                    <Link href={'#' + letter} key={letter} passHref>
                      <p className="link">{letter}</p>
                    </Link>
                  );
                })}
              </div>
              <div className="top-right">
                <button className="link">DATE</button>
                {indexMedia[0] !== 'false' ? (
                  <button
                    className="link"
                    onClick={() => setIndexMedia(['false'])}>
                    TAGS
                  </button>
                ) : (
                  <button
                    className="link"
                    onClick={() => setIndexMedia(['true'])}>
                    MEDIA
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="mobile">
            <div className="top">
              <div className="top-left">Index</div>
              <div className="top-right">
                <button className="link">DATE</button>
                <button className="link">MEDIA</button>
              </div>
            </div>
            <div className="nav-mobile">
              <div className="alphabetNav-mobile">
                <div className="alphabetlinksmobile">
                  {alphabetLinks.map((letter) => {
                    return (
                      <Link href={'#' + letter} key={letter} passHref>
                        <p className="link">{letter}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </S.Ctn>
      )}
    </>
  );
};
