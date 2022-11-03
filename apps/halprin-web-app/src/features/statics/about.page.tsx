import { MainLayout } from '@/components/layout/main-layout';
import * as S from '@/features/credits/credits.page.style';
import { SupportedLang } from '../video/types';

type Props = {
  lang: SupportedLang;
};

export const AboutPage: React.FC<Props> = (props) => {
  const { lang } = props;

  return (
    <MainLayout lang={lang} source="statics">
      <S.Ctn>
        <h1>{lang === 'en' ? 'About' : 'A propos'}</h1>
        {lang === 'en' ? (
          <div className="ctn-body">
            <div>
              <p>
                Closing the gap between art and life, this publication describes
                my approach to dance in a way unlike any of the existing books
                and videos. It invites you inside one of my workshops, allowing
                you to absorb my teaching in action, and extends further to
                capture the whole spectrum of my approach.{' '}
              </p>
              <p>
                When I was born in 1920, Isadora Duncan had already made her
                radical break from classical ballet and begun searching for new
                forms. Her ‘descendants’ developed the approach called modern
                dance, which was based on their own idiosyncratic styles of
                technique.{' '}
              </p>
              <p>
                Then came a new wave, striving to close the gap between art and
                life, and enabling dance to once again connect us to our
                real-life issues. In a lifetime devoted to dance I have traveled
                many roads in my search for this connection. This publication
                tells the story of that search. I hope that you will learn at
                least two things from this account:{' '}
              </p>
              <ul>
                <li>
                  You do not have to be a professional to dance. Everyone, at
                  any age, no matter what their physical ability or ethnic
                  background, can be a dancer.
                </li>
                <li>
                  And dance can heal, transform, inspire, regenerate, and build
                  community.{' '}
                </li>
              </ul>
              <p>
                Dance is uniquely tied to our human presence because the body
                and its movement are instrumental for this art. Dance engages
                all of our history and touches directly on the way we relate to
                ourselves, each other, and the world around us. At the same time
                dance is multi-modal, allowing us to integrate music, poetry,
                drama, and the visual arts. An example of this can be seen in
                the self-portraits we do in the workshops.{' '}
              </p>
              <p>
                My journey as a dancer has been shaped by many collaborators,
                who have taken me on new paths I never would have imagined. For
                70 years my late husband, Lawrence Halprin, shared his ideas on
                the environment and the creative process, which are interwoven
                in all my work. I also learned from my daughter Daria Halprin,
                who with profound clarity developed a method of integrating the
                physical, emotional, and mental levels of expression in one’s
                life. My teacher Margaret H’Doubler, a biologist, insisted I
                work with movement from an anatomical, somatic point of view
                rather than stylized movement so that each person could discover
                their own style and express their own mythologies. I also owe
                much to Fritz Perls, the gestalt therapist. And to all my
                students, who continually inspire me and make teaching a joy.{' '}
              </p>
              <p className="ctn-name">Anna Halprin, February 2014 </p>
              <p>
                To learn more about the Tamalpa Institute, the training program
                I cofounded with my daughter Daria, go to{' '}
                <a href="https://tamalpa.org">tamalpa.org</a>.{' '}
              </p>
            </div>
          </div>
        ) : (
          <div className="ctn-body">
            <div>
              <p>
                En comblant le fossé entre l’art et la vie, ce document présente
                mon approche de la danse d’une manière qui le différencie des
                films et ouvrages déjà réalisés sur mon travail. Il vous fait
                assister à l’un de mes ateliers, vous permettant ainsi
                d’absorber mon enseignement en action, puis il va plus loin en
                englobant toute l’étendue de ma démarche.{' '}
              </p>
              <p>
                Lorsque je nais en 1920, Isadora Duncan a déjà rompu
                radicalement avec la danse classique, à la recherche de
                nouvelles formes. Ses « descendants » développent ce qu’on
                appelle la modern dance à partir de leurs propres styles et
                techniques.{' '}
              </p>
              <p>
                Puis une nouvelle vague a surgi, qui s’est efforcée de réduire
                l’écart entre l’art et la vie, permettant ainsi une fois de plus
                à la danse de nous relier aux questions posées par l’existence.
                Au fil d’une vie consacrée à la danse, j’ai parcouru bien des
                chemins dans ma quête de cette relation. Cette publication
                raconte l’histoire de cette quête. J’espère que vous apprendrez
                au moins deux choses à partir de mon témoignage :{' '}
              </p>
              <ul>
                <li>
                  Il n’y a pas besoin d’être un professionnel pour danser. C’est
                  à la portée de tout le monde, à n’importe quel âge, quelles
                  que soient ses aptitudes physiques ou ses origines ethniques.{' '}
                </li>
                <li>
                  Et la danse peut soigner, transformer, inspirer, régénérer et
                  bâtir le sens du collectif.{' '}
                </li>
              </ul>
              <p>
                La danse entretient un rapport unique à notre existence, du fait
                que le corps et le mouvement sont ses instruments. En faisant
                intervenir toute notre histoire, elle touche directement à notre
                rapport les uns aux autres et au monde alentour. Parallèlement,
                elle conjugue les différents modes d’expression, permettant
                d’incorporer la musique, la poésie, le théâtre et les arts
                visuels. Les autoportraits réalisés dans les ateliers en sont un
                exemple.{' '}
              </p>
              <p>
                De nombreuses collaborations ont façonné mon voyage à travers la
                danse, en m’entraînant sur des voies que je n’avais jamais
                imaginées. Pendant septante années, mon mari, Lawrence Halprin,
                aujourd’hui disparu, a partagé sa penséesur l’environnement
                extérieur et le processus créatif, laquellea imprégné tout mon
                travail. Ma fille, Daria Halprin, m’a aussi beaucoup appris, en
                développant avec grande précision une méthode d’intégration des
                niveaux d’expression du physique, de l’émotionnel et du mental
                dans le vécu.{' '}
              </p>
              <p>
                Ma professeure, Margaret H’Doubler, une biologiste, a insisté
                pour que j’aborde le mouvement du point de vue anatomique,
                somatique, plutôt qu’en le stylisant. Ainsi chacun pourrait
                découvrir son style personnel et exprimer ses propres
                mythologies. Je dois aussi beaucoup à Fritz Perls, le Gestalt-
                thérapeute. Et à tous mes élèves, qui ne cessent de m’inspirer
                et de confirmer mon bonheur d’enseigner.{' '}
              </p>
              <p className="ctn-name">Anna Halprin, février 2014 </p>
              <p>
                Pour en savoir davantage sur le Tamalpa Institute et le
                programme de formation que j’ai fondé avec ma fille Daria, aller
                sur <a href="https://tamalpa.org">tamalpa.org</a>.{' '}
              </p>
            </div>
          </div>
        )}
      </S.Ctn>
    </MainLayout>
  );
};
