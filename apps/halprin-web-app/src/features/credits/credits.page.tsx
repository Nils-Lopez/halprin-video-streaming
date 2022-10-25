import { MainLayout } from '@/components/layout/main-layout';
import * as S from './credits.page.style';

import { SupportedLang } from '../video/types';

type Props = {
  lang: SupportedLang;
};

export const CreditsPage: React.FC<Props> = (props) => {
  const { lang } = { ...props };

  // When you use 't' you can remove the eslin disable
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <>
      <MainLayout lang={lang} source="statics">
        <S.Ctn>
          <h1>Credits</h1>
          <div className="ctn-body">
            {lang === 'en' ? (
              <div>
                <div>
                  <p>
                    Edited and produced by Contredanse. Conception, design and
                    production by Baptiste Andrien & Florence Corin (for
                    Contredanse) in collaboration with Anna Halprin. Filming
                    Paris workshop: Peter Hulton. Filming and interview with
                    Anna Halprin: Baptiste Andrien & Florence Corin (for
                    Contredanse). Editing: Baptiste Andrien, Caroline Boillet &
                    Florence Corin (for Contredanse). Mix: Aurélien Lebourg.
                    Original DVD-ROM programming: Émeric Florence –{' '}
                    <a href="https://minimal.be">minimal.be</a>. Webapp
                    development: Nils Lopez -{' '}
                    <a href="https://octo-dev.com">octo-dev.com</a>, Sébastien
                    Vanvelthem. Graphic design: Philippe Koeune –{' '}
                    <a href="https://valleythevalley.com">
                      valleythevalley.com
                    </a>
                    . French translation and subtitles: Denise Luccioni. English
                    translation: Hazel Carrie. French proofreading for the
                    booklet: Muriel Rochlenko. English proofreading for the
                    booklet: Sam Davies.
                  </p>
                  <p>
                    We would particularly like to thank Stephanie Earle and
                    Julie Numrich, as well as Ruedi Gerber, Mike King, Matt
                    Krush, Eeo Stubblefield, le Centre Wallonie-Bruxelles in
                    Paris, Janice Ross, Andy Abraham Wilson and all the workshop
                    participants.
                  </p>
                  This publication was supported by: le ministère de la Culture
                  de la Fédération Wallonie- Bruxelles, Service de la Danse, la
                  Ville de Bruxelles (échevinat des Beaux-Arts) and la Cocof.
                  <h3>« Nouvelle librairie de la Danse »</h3>
                  <p>
                    Published with the help of le Centre National du Livre and
                    le ministère de la Culture et de la Communication (Direction
                    de la musique, de la danse, du théâtre et des spectacles).
                  </p>
                </div>
                <div>
                  <h3>Resources</h3>
                  <p>
                    Contredanse Editions{' '}
                    <a href="https://contredanse.org">www.contredanse.org</a>
                  </p>
                  <p>Anna Halprin, Tamalpa Institute and Daria Halprin: </p>
                  <a href="https://annahalprin.org">www.annahalprin.org</a>{' '}
                  <br />
                  <a href="https://tamalpa.org">www.tamalpa.org</a> <br />
                  <a href="https://dariahalprin.org ">www.dariahalprin.org </a>
                  <br />
                </div>
                <div>
                  <h3>Others: </h3>
                  <a href="https://breathmadevisible.com">
                    www.breathmadevisible.com
                  </a>{' '}
                  <br />
                  <a href="https://openeyepictures.com">
                    www.openeyepictures.com
                  </a>{' '}
                  <br />
                  <a href="https://stilldance.net">www.stilldance.net</a> <br />
                  <a href="https://mpdsf.org">www.mpdsf.org</a> <br />
                  <a href="https://nypl.org">www.nypl.org</a>
                  <br />
                  <small>© Contredanse 2014 - 2022</small>
                  <br />
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <p>
                    Edité et produit par Contredanse. Conçu et réalisé par
                    Baptiste Andrien & Florence Corin (pour Contredanse) en
                    collaboration avec Anna Halprin. Captation de l’atelier de
                    Paris : Peter Hulton. Captation et interview d’Anna Halprin
                    : Baptiste Andrien & Florence Corin (pour Contredanse).
                    Montage : Baptiste Andrien, Caroline Boillet & Florence
                    Corin (pour Contredanse). Mixage : Aurélien Lebourg.
                    Programmation du DVD-ROM original : Emeric Florence –{' '}
                    <a href="https://minimal.be">minimal.be</a>. Développement
                    web app : Nils Lopez -{' '}
                    <a href="https://octo-dev.com">octo-dev.com</a>, Sébastien
                    Vanvelthem. Graphisme : Philippe Koeune –{' '}
                    <a href="https://valleythevalley.com">
                      valleythevalley.com
                    </a>
                    . Traduction française et sous-titrage : Denise Luccioni.
                    Traduction anglaise : Hazel Carrie. Relectures
                    orthographiques en français : Muriel Rochlenko. Relectures
                    orthographiques en anglais : Sam Davies.
                  </p>
                  <p>
                    Nous tenons à remercier tout particulièrement Stephanie
                    Earle et Julie Numrich, ainsi que Ruedi Gerber, Mike King,
                    Matt Krush, Eeo Stubblefield, le Centre Wallonie-Bruxelles à
                    Paris, Janice Ross, Andy Abraham Wilson et tous les
                    participants de l’atelier.
                  </p>
                  <p>
                    Cette publication a reçu le soutien du ministère de la
                    Culture de la Fédération Wallonie-Bruxelles, Service de la
                    Danse, la Ville de Bruxelles (échevinat des Beaux-Arts) et
                    la Cocof.
                  </p>
                </div>
                <div>
                  <h3>« Nouvelle librairie de la Danse »</h3>
                  <p>
                    Publiée avec le concours du Centre National du Livre et du
                    ministère de la Culture et de la Communication (Direction de
                    la musique, de la danse, du théâtre et des spectacles).{' '}
                  </p>
                  <p>
                    Tous droits réservés. Pour usage privé et domestique
                    seulement. Editions Contredanse © 2014-2022
                  </p>
                </div>
                <div>
                  <h3>Ressources</h3>
                  <p>
                    Les Editions Contredanse{' '}
                    <a href="https://contredanse.org">www.contredanse.org</a>
                  </p>
                  <p>Anna Halprin, Tamalpa Institute et Daria Halprin: </p>
                  <a href="https://annahalprin.org">www.annahalprin.org</a>{' '}
                  <br />
                  <a href="https://tamalpa.org">www.tamalpa.org</a> <br />
                  <a href="https://dariahalprin.org ">www.dariahalprin.org </a>
                  <br />
                </div>
                <div>
                  <h3>Autres </h3>
                  <a href="https://breathmadevisible.com">
                    www.breathmadevisible.com
                  </a>{' '}
                  <br />
                  <a href="https://openeyepictures.com">
                    www.openeyepictures.com
                  </a>{' '}
                  <br />
                  <a href="https://stilldance.net">www.stilldance.net</a> <br />
                  <a href="https://mpdsf.org">www.mpdsf.org</a> <br />
                  <a href="https://nypl.org">www.nypl.org</a>
                  <br />
                  <small>© Contredanse 2014 - 2022</small>
                  <br />
                </div>
              </div>
            )}
          </div>
        </S.Ctn>
      </MainLayout>
    </>
  );
};
