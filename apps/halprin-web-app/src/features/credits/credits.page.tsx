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
                    Edited and produced by Contredanse. <br /> Conception,
                    design and production by Baptiste Andrien & Florence Corin
                    (for Contredanse) in collaboration with Anna Halprin. <br />{' '}
                    Filming Paris workshop: Peter Hulton. <br /> Filming and
                    interview with Anna Halprin: Baptiste Andrien & Florence
                    Corin (for Contredanse). <br /> Editing: Baptiste Andrien,
                    Caroline Boillet & Florence Corin (for Contredanse). <br />{' '}
                    Mix: Aurélien Lebourg. <br />
                    Original DVD-ROM programming: Émeric Florence –{' '}
                    <a href="https://minimal.be">minimal.be</a>. <br /> Webapp
                    development: Nils Lopez -{' '}
                    <a href="https://oqto.tech">OQTO Tech</a>, Sébastien
                    Vanvelthem. <br /> Graphic design: Philippe Koeune –{' '}
                    <a href="https://valleythevalley.com">
                      valleythevalley.com
                    </a>
                    . <br /> French translation and subtitles: Denise Luccioni.{' '}
                    <br /> English translation: Hazel Carrie. <br /> French
                    proofreading for the booklet: Muriel Rochlenko. <br />{' '}
                    English proofreading for the booklet: Sam Davies. <br />
                  </p>
                  <p>
                    We would particularly like to thank Stephanie Earle and
                    Julie Numrich, as well as Ruedi Gerber, Mike King, Matt
                    Krush, Eeo Stubblefield, le Centre Wallonie-Bruxelles in
                    Paris, Janice Ross, Andy Abraham Wilson and all the workshop
                    participants. <br />
                  </p>
                  This publication was supported by: le ministère de la Culture
                  de la Fédération Wallonie- Bruxelles, Service de la Danse, la
                  Ville de Bruxelles (échevinat des Beaux-Arts) and la Cocof.{' '}
                  <br />
                  <p>« Nouvelle librairie de la Danse »</p>
                  <p>
                    Published with the help of le Centre National du Livre and
                    le ministère de la Culture et de la Communication (Direction
                    de la musique, de la danse, du théâtre et des spectacles).{' '}
                    <br />
                  </p>
                </div>
                <div className="logo-partners">
                  <img src="/images/ui/elements/cocof_logo.png" alt="Cocof" />
                  <img src="/images/ui/elements/fwb_logo.png" alt="FWB" />
                  <img
                    src="/images/ui/elements/partner_logo.png"
                    alt="Partner"
                  />
                </div>
                <br />
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
                <br />
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
                    Edité et produit par Contredanse. <br /> Conçu et réalisé
                    par Baptiste Andrien & Florence Corin (pour Contredanse) en
                    collaboration avec Anna Halprin. <br /> Captation de
                    l’atelier de Paris : Peter Hulton. <br /> Captation et
                    interview d’Anna Halprin : Baptiste Andrien & Florence Corin
                    (pour Contredanse). <br />
                    Montage : Baptiste Andrien, Caroline Boillet & Florence
                    Corin (pour Contredanse). <br /> Mixage : Aurélien Lebourg.{' '}
                    <br />
                    Programmation du DVD-ROM original : Emeric Florence –{' '}
                    <a href="https://minimal.be">minimal.be</a>. <br />{' '}
                    Développement web app : Nils Lopez -{' '}
                    <a href="https://oqto.tech">OQTO Tech</a>, Sébastien
                    Vanvelthem. <br /> Graphisme : Philippe Koeune –{' '}
                    <a href="https://valleythevalley.com">
                      valleythevalley.com
                    </a>
                    . <br /> Traduction française et sous-titrage : Denise
                    Luccioni. <br />
                    Traduction anglaise : Hazel Carrie. <br /> Relectures
                    orthographiques en français : Muriel Rochlenko. <br />{' '}
                    Relectures orthographiques en anglais : Sam Davies. <br />
                  </p>
                  <p>
                    Nous tenons à remercier tout particulièrement Stephanie
                    Earle et Julie Numrich, ainsi que Ruedi Gerber, Mike King,
                    Matt Krush, Eeo Stubblefield, le Centre Wallonie-Bruxelles à
                    Paris, Janice Ross, Andy Abraham Wilson et tous les
                    participants de l’atelier. <br />
                  </p>
                  <p>
                    Cette publication a reçu le soutien du ministère de la
                    Culture de la Fédération Wallonie-Bruxelles, Service de la
                    Danse, la Ville de Bruxelles (échevinat des Beaux-Arts) et
                    la Cocof. <br />
                  </p>
                </div>
                <div>
                  <p>« Nouvelle librairie de la Danse »</p>
                  <p>
                    Publiée avec le concours du Centre National du Livre et du
                    ministère de la Culture et de la Communication (Direction de
                    la musique, de la danse, du théâtre et des spectacles).{' '}
                    <br />{' '}
                  </p>
                  <p>
                    Tous droits réservés. <br /> Pour usage privé et domestique
                    seulement. <br /> Editions Contredanse © 2014-2022
                  </p>
                </div>
                <div className="logo-partners">
                  <img src="/images/ui/elements/cocof_logo.png" alt="Cocof" />
                  <img src="/images/ui/elements/fwb_logo.png" alt="FWB" />
                  <img
                    src="/images/ui/elements/partner_logo.png"
                    alt="Partner"
                  />
                </div>
                <br />
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
                <br />
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
