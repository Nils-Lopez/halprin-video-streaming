import * as S from './home.page.style';

import Link from 'next/link';

type Props = {
  children?: never;
};

export const HomePage: React.FC<Props> = () => {
  return (
    <S.HomeLayout>
      <div>
        <S.Ctn>
          <Link href="/menu" passHref>
            <div className="centered logo">
              <img
                src={'/images/ui/elements/triangle-halprin-' + 'en' + '.png'}
                alt="Anna Halprin - Dancing Life"
                className="triangle"
              />
            </div>
          </Link>
          <S.Circle>
            <div className="home">
              <div className="topIcon">
                <Link href="#" passHref>
                  <img
                    src={'/images/ui/menu/round.png'}
                    alt="round"
                    className="roundImg"
                  />
                </Link>
              </div>
              <div className="midContainer">
                <div className="leftIcon">
                  <Link href="#" passHref>
                    <img
                      src={'/images/ui/menu/eye.png'}
                      alt="eye"
                      className="eyeImg"
                    />
                  </Link>
                </div>

                <div className="rightIcon">
                  <Link href="#" passHref>
                    <img
                      src={'/images/ui/menu/hand.png'}
                      alt="hand"
                      className="handImg"
                    />
                  </Link>
                </div>
              </div>
              <div className="bottomIcon">
                <Link href="#" passHref>
                  <img
                    src={'/images/ui/menu/mouth.png'}
                    alt="mouth"
                    className="mouthImg"
                  />
                </Link>
              </div>
            </div>
          </S.Circle>
        </S.Ctn>
        <S.Mobile>
          <Link href="#" passHref>
            <div className="ctn">
              <img
                src={'/images/ui/menu/round.png'}
                alt="workshop"
                className="roundImg"
              />
              <div className="content workshop">
                <h2 className="title">Workshop</h2>
              </div>
            </div>
          </Link>
          <Link href="#" passHref>
            <div className="ctn lifeart">
              <img
                src={'/images/ui/menu/eye.png'}
                alt="lifeart"
                className="eyeImg"
              />
              <div className="content ">
                <h2 className="title">Life-Art</h2>
              </div>
            </div>
          </Link>
          <Link href="#" passHref>
            <div className="ctn roadmaps">
              <img
                src={'/images/ui/menu/hand.png'}
                alt="roadmaps"
                className="handImg"
              />
              <div className="content ">
                <h2 className="title">Roadmaps</h2>
              </div>
            </div>
          </Link>
          <Link href="#" passHref>
            <div className="ctn index">
              <img
                src={'/images/ui/menu/mouth.png'}
                alt="index"
                className="mouthImg"
              />
              <div className="content">
                <h2 className="title">Index</h2>
              </div>
            </div>
          </Link>
        </S.Mobile>
      </div>
    </S.HomeLayout>
  );
};
