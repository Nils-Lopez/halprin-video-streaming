import { FC, useState, Fragment, useEffect } from 'react';
import * as S from './video-navbar.style';
import Link from 'next/link';
import { Tag } from '@/data/data.types';
import { SupportedLang } from '@/features/video/types';

type Props = {
  lang: SupportedLang;
  categories: Tag[];
};

export const VideoNavbar: FC<Props> = (props) => {
  const { categories, lang } = props;
  const [showCategories, updateShowCategories] = useState(false);
  const [showSection, setShowSection] = useState<number>(-1);

  const classNames = categories.length <= 8 ? 'unique-row' : 'row';

  useEffect(() => {
    if (categories) {
      setShowSection(-1);
    }
  }, [categories]);

  return (
    <>
      <S.Ctn>
        {showCategories ? (
          <>
            <div className={classNames}>
              {categories.map((category: Tag, index: number) => {
                if (categories.length <= 8) {
                  return (
                    <Link
                      key={'tag-' + index}
                      href={'/tags/' + category.tag_slug}>
                      {category.label && category.label[lang]}
                    </Link>
                  );
                } else if (
                  (JSON.stringify(index / 7).charAt(0) ==
                    JSON.stringify(index / 7) &&
                    index !== 0) ||
                  (JSON.stringify(categories.length / 7).charAt(0) !==
                    JSON.stringify(categories.length / 7) &&
                    index === categories.length - 1)
                ) {
                  if (
                    (showSection === -1 && index === 7) ||
                    !categories[index - 6]
                  ) {
                    setShowSection(index);
                  }
                  return (
                    <Fragment
                      key={
                        'nav-' + category.tag_slug ? category.tag_slug : null
                      }>
                      <div className={showSection === index ? 'show' : 'hide'}>
                        {index > 7 ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-chevrons-left center-icon"
                            width="27"
                            height="27"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            onClick={() => {
                              if (
                                JSON.stringify((index - 7) / 7).charAt(0) ==
                                JSON.stringify((index - 7) / 7)
                              ) {
                                setShowSection(index - 7);
                              } else {
                                setShowSection(
                                  categories.length -
                                    1 -
                                    Number(
                                      JSON.stringify(
                                        Number(
                                          '0.' +
                                            JSON.stringify(
                                              categories.length / 7
                                            ).split('.')[1]
                                        ) * 7
                                      ).charAt(0)
                                    )
                                );
                              }
                            }}>
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"></path>
                            <polyline points="11 7 6 12 11 17"></polyline>
                            <polyline points="17 7 12 12 17 17"></polyline>
                          </svg>
                        ) : null}
                        {index === 7 ? (
                          <Link
                            href={'/tags/' + categories[index - 7].tag_slug}>
                            {categories[index - 7] &&
                            categories[index - 7].label
                              ? categories[index - 7].label[lang]
                              : null}
                          </Link>
                        ) : null}
                        <Link href={'/tags/' + categories[index - 6].tag_slug}>
                          {categories[index - 6].label[lang]}
                        </Link>
                        <Link href={'/tags/' + categories[index - 5].tag_slug}>
                          {categories[index - 5].label[lang]}
                        </Link>
                        <Link href={'/tags/' + categories[index - 4].tag_slug}>
                          {categories[index - 4].label[lang]}
                        </Link>
                        <Link href={'/tags/' + categories[index - 3].tag_slug}>
                          {categories[index - 3].label[lang]}
                        </Link>
                        <Link href={'/tags/' + categories[index - 2].tag_slug}>
                          {categories[index - 2].label[lang]}
                        </Link>
                        <Link href={'/tags/' + categories[index - 1].tag_slug}>
                          {categories[index - 1].label[lang]}
                        </Link>
                        <Link href={'/tags/' + category.tag_slug}>
                          {category.label[lang]}
                        </Link>
                        {categories[index + 1] ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-chevrons-right center-icon"
                            width="27"
                            height="27"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            onClick={() => {
                              if (categories[index + 7]) {
                                setShowSection(index + 7);
                              } else {
                                setShowSection(categories.length - 1);
                              }
                            }}>
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"></path>
                            <polyline points="7 7 12 12 7 17"></polyline>
                            <polyline points="13 7 18 12 13 17"></polyline>
                          </svg>
                        ) : null}
                      </div>
                    </Fragment>
                  );
                }
              })}
            </div>
            <div className="hiddenMenu">
              <button onClick={() => updateShowCategories(false)}>
                <img
                  src="/images/ui/menu/mouth-outline.png"
                  className="showMenu"
                  alt="Hide tags"
                />
              </button>
            </div>
          </>
        ) : (
          <div className="hiddenMenu">
            <button onClick={() => updateShowCategories(true)}>
              <img
                src="/images/ui/menu/mouth-outline.png"
                className="showMenu"
                alt="Hide tags"
              />
            </button>
          </div>
        )}
      </S.Ctn>
      <S.MobileCtn>
        {showCategories ? (
          <>
            <div className="row">
              {categories.map((category: Tag, index: number) => {
                return (
                  <Link
                    key={'tag-' + index}
                    href={'/tags/' + category.tag_slug}>
                    {category.label && category.label[lang]}
                  </Link>
                );
              })}
            </div>
            <div className="hiddenMenu">
              <button onClick={() => updateShowCategories(false)}>
                <img
                  src="/images/ui/menu/mouth-outline.png"
                  className="showMenu"
                  alt="Hide tags"
                />
              </button>
            </div>
          </>
        ) : (
          <div className="hiddenMenu">
            <button onClick={() => updateShowCategories(true)}>
              <img
                src="/images/ui/menu/mouth-outline.png"
                className="showMenu"
                alt="Hide tags"
              />
            </button>
          </div>
        )}
      </S.MobileCtn>
    </>
  );
};
