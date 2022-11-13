import { MainLayout } from '@/components/layout/main-layout';
import * as S from '@/features/credits/credits.page.style';
import { SupportedLang } from '../video/types';

type Props = {
  lang: SupportedLang;
};

export const BioPage: React.FC<Props> = (props) => {
  const { lang } = props;

  return (
    <MainLayout lang={lang} source="statics">
      <S.Ctn>
        {lang === 'en' ? (
          <div className="ctn-body">
            <div>
              <h1>Biography of Anna Halprin</h1>
              <p>
                <i>
                  I was married to the late Lawrence Halprin for 70 years. He
                  had a profound influence on my life and works. I would like to
                  honor him by presenting his biography of me.{' '}
                </i>
              </p>
              <p className="ctn-name">
                <span className="name">Anna Halprin</span>
              </p>
            </div>
            <div>
              <p>
                Early on, Anna abandoned the modern dance developed by the
                American pioneers (Martha Graham, Doris Humphrey, Charles
                Weidman) because it was based on the personalities of those
                dancers. For her, dance essentially draws on primitive needs
                that express life forces. Her earliest background emphasized the
                anatomy and physiology of the human body and its relation to the
                forces of nature and the environment. She was able to develop
                her processes in nature on an outdoor dance deck I designed for
                her. With the proscenium arch removed, the stage presented new
                and different spatial relationships, and enveloped performers
                with the sounds and elements of nature. It has today become an
                international icon of creativity with nature, and since World
                War II drawn a cadre of brilliant dancers from around the world,
                including Merce Cunningham, Min Tanaka, Meredith Monk, Simone
                Forti, Trisha Brown, Yvonne Rainer, Eiko and Koma, along with
                many young new dancers. With her students she developed new
                sources of group creativity based on a series of workshop
                exercises called ‘Experiments in the Environment’. In these, as
                in life, the outcome emerges as a result of interactions with
                the environment and other group members, in a way that is
                flexible, intense and life-affirming.
              </p>
              <p>
                More and more her dance has developed as with myths and rituals,
                in which the focus is on issues of everyday life: psychological
                or physical, and community as well as personal. In this sense
                she has reverted to the early meaning of dance in human society,
                which is joyful and healing as well as tragic, and based on the
                most primitive needs of the human condition. These dances are
                universal.
              </p>
              <p>
                For this reason, Anna’s dances have plowed new deep ground which
                is unlike any other performer today. Dance for her is humanistic
                and searching, with its importance found in the process of
                creativity that she has developed as much as in the performance
                itself.
              </p>
              <p className="ctn-name">
                <span className="name">Lawrence Halprin</span>
              </p>
            </div>
          </div>
        ) : (
          <div className="ctn-body">
            <div>
              <h1>Biographie d’Anna Halprin</h1>
              <p>
                <i>
                  J’ai été mariée pendant septante années avec feu Lawrence
                  Halprin. Il m’a profondément influencée dans ma vie et mon
                  travail. Je souhaite lui rendre hommage en utilisant ici la
                  biographie qu’il a écrite pour moi.{' '}
                </i>
              </p>
              <p className="ctn-name">
                <span className="name">Anna Halprin</span>
              </p>
            </div>
            <div>
              <p>
                Au départ, Anna abandonne la modern dance des pionniers
                américains (Martha Graham, Doris Humphrey, Charles Weidman), car
                cette danse repose sur la personnalité de ses fondateurs. Pour
                Anna, la danse puise essentiellement à des nécessités
                primitives, exprimant des forces vitales. Ses premières études
                se concentrent sur l’anatomie et la physiologie du corps humain
                et sa relation aux forces de la nature et de l’environnement
                extérieur. Elle a pu développer ses processus en plein air sur
                un plateau de danse que j’ai conçu pour elle : en supprimant le
                cadre de scène, il offrait une relation nouvelle et différente à
                l’espace et baignait les danseurs dans les sons et autres
                éléments naturels. Ce lieu est depuis devenu un emblème
                mondialement connu de créativité inspirée par la nature ; il a
                attiré des danseurs brillants du monde entier depuis la fin de
                la Deuxième Guerre mondiale jusqu’à nos jours, notamment Merce
                Cunningham, Min Tanaka, Meredith Monk, Simone Forti, Trisha
                Brown, Yvonne Rainer, Eiko et Koma et de nombreux jeunes
                danseurs. Avec ses élèves, Anna développe de nouvelles sources
                de créativité collective à partir d’une série d’exercices en
                atelier, intitulés « Expériences dans l’environnement extérieur
                ». Comme dans la vie, le résultat – ouvert, intense et positif
                pour l’existence – émerge de l’interaction avec le contexte
                naturel et avec les membres du groupe.{' '}
              </p>
              <p>
                De plus en plus, sa danse prend la forme de mythes et de rituels
                touchant aux problèmes de la vie quotidienne, psychologiques ou
                physiques, tant collectifs que personnels. De fait, elle est
                retournée au sens premier de la danse dans la société, joyeuse
                et apaisante autant que tragique, et construite à partir des
                besoins les plus primitifs de la condition humaine. Ces danses
                sont universelles.{' '}
              </p>
              <p>
                Ainsi, les danses d’Anna ont défriché en profondeur un
                territoire nouveau, unique en son genre. La danse, qui est pour
                elle de l’ordre de l’humanisme et de la quête, compte autant par
                le processus créatif qu’elle a mis au point que par sa
                réalisation.{' '}
              </p>
              <p className="ctn-name">
                <span className="name">Lawrence Halprin </span>
              </p>
            </div>
          </div>
        )}
      </S.Ctn>
    </MainLayout>
  );
};
