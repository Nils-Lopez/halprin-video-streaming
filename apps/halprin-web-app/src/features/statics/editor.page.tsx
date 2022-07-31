import { MainLayout } from '@/components/layout/main-layout';
import * as S from '@/features/credits/credits.page.style';
import { SupportedLang } from '../video/types';

type Props = {
  lang: SupportedLang;
};

export const EditorPage: React.FC<Props> = (props) => {
  const { lang } = props;

  return (
    <MainLayout lang={lang}>
      <S.Ctn>
        <h1>{lang === 'fr' ? "Note de l'éditeur" : 'Editor note'}</h1>
        {lang === 'fr' ? (
          <div className="ctn-body">
            <p>
              <i>
                Pour célébrer la sortie du livre « Mouvements de Vie1 » avec son
                auteure, Anna Halprin, Contredanse lui propose de donner un
                atelier de deux jours, en janvier 2010 à Paris. Peter Hulton2 a
                filmé l’atelier qui, aujourd’hui, se retrouve à la base de cette
                édition. Florence Corin et Baptiste Andrien, responsables de
                publication à Contredanse, revisitent ensemble le chemin
                parcouru pour la réalisation de cette publication.{' '}
              </i>
            </p>
            <p>
              Florence : Nous avons à la base deux expériences de nature
              différente concernant l’atelier de Paris. Contrairement à toi, je
              n’étais pas présente. C’est a posteriori et à travers le médium de
              la vidéo que j’ai rencontré l’enseignement d’Anna Halprin. À la
              première vision des images de Peter Hulton, ce qui a attiré mon
              attention, c’est la manière dont Anna Halprin propose un cadre à
              l’expérience des participants, à travers le mouvement, le dessin
              et la voix, tout en composant avec le musicien et en veillant à la
              forme et à la durée. Toutes ces dimensions sont très visibles,
              sensibles et participent à ce qui m’est apparu singulier dans sa
              démarche, à savoir donner à l’ensemble de l’atelier une forme
              artistique, où chacun a la possibilité d’investir une question
              personnelle. Par conséquent, l’atelier de Paris m’est apparu à la
              fois comme temps d’exploration, de transmission et d’expérience
              esthétique.{' '}
            </p>
            <p>
              Baptiste : Je me souviens aussi que nous avons été surpris de
              découvrir qu’en l’espace de deux jours d’atelier, Anna Halprin
              était en train de partager plus de soixante années de pratique et
              de réflexions sur ce que peut être la danse. Elle a actualisé ce
              questionnement, au cours de ce week-end, en s’adressant à chaque
              participant et au groupe dans son ensemble : qu’est-ce qui motive
              votre danse ? Quelles sont vos ressources ? Quel sens votre danse
              a-t-elle pour vous ? Quel lien votre danse entretient-elle avec
              les autres personnes, avec l’environnement, le contexte ? Quelle
              danse peut émerger de manière collective ? À qui s’adresse t-elle
              ? Cela nous a semblé être une manière simple et directe d’examiner
              ce qu’est une danse. C’est d’ailleurs en des termes analogues que
              nous nous sommes interrogés sur la nature de cette publication.
              Bref, c’était la perspective initiale du projet : comment cet
              atelier de deux jours représentait un moment dans l’histoire
              d’Anna Halprin nourri de ses nombreuses expériences. Nous avons
              traduit cette première idée de structure par un schéma.{' '}
            </p>
            <br />
            <img
              src={'/images/ui/editor-note.jpg'}
              className="jumbo"
              alt="Note de l'éditeur"
            />
            <p>
              F. Comme un sablier. L’accent est mis sur l’écoulement du temps,
              sur le processus, plus que sur le résultat. C’est ce que permet
              une webapp (application web). Au moment de ce dessin, la
              connaissance que nous avions du travail d’Anna Halprin reposait
              principalement sur la traduction française de son livre « Moving
              Toward Life3 » et du livre de son mari, Lawrence Halprin, autour
              de la question du processus créatif, « The RSVP Cycles4 ». Les
              images de l’atelier de Paris nous ont révélé comment le travail
              d’Anna Halprin s’inscrivait dans son corps et sa façon de le
              partager dans l’espace, à un moment précis de son histoire. Nous
              sommes donc partis la voir pour l’interroger sur le contexte
              historique de son enseignement et certaines notions qui nous
              avaient alors frappées.
            </p>
            <p>
              B. Quand nous sommes revenus à Bruxelles, il était temps de se
              pencher plus en détail sur l’atelier, pour déceler plus
              précisément les enjeux des différentes activités dans leur contenu
              et leurs enchaînements. Quand je repense à l’atelier de Paris,
              auquel j’ai participé, je me souviens de ne pas savoir, sur le
              moment même, où Anna Halprin nous emmenait et je mesurais aussi
              mon envie. D’une manière générale, qu’il s’agisse d’un atelier ou
              d’un livre ou quelque autre situation, il y a cette question
              viscérale : mon corps, mon imagination souhaitent-ils goûter à
              cette expérience ? Quand j’ai le désir de plonger dans une
              proposition, mes différents sens s’organisent autour de mon
              attention. Aussi, je m’accorde au langage utilisé par
              l’intervenant en vérifiant pour moi-même l’expérience que ses
              mots, ses gestes sont censés recouvrir. Je suis alors comme un
              aveugle qui n’a pas encore une représentation de l’espace dans
              lequel il se trouve mais le découvre, le construit au fur et à
              mesure de ses explorations.{' '}
            </p>
            <p>
              F. C’est pourquoi nous avons proposé à Julie Numrich, qui a été
              élève et assistante d’Anna Halprin durant de nombreuses années, de
              se pencher avec nous sur l’atelier de Paris. Sa mise en lumière (à
              travers les Cycles RSVP) nous a aidés à mettre sur papier la
              partition de l’ensemble de l’atelier, pour en révéler la « carte
              générale » et les intentions spécifiques d’Anna Halprin pour
              chaque activité.{' '}
            </p>
            <p>
              B. Le fait de coucher sur papier la structure de l’atelier nous a
              permis de prendre nos distances et d’avoirun autre objet devant
              nous. Prendre des notes, c’est une manière de traduire
              l’expérience. Cela me donne l’impression ou l’illusion de
              synthétiser la compréhension du moment, de graver dans ma mémoire
              l’état de mon attention, pour pouvoir y revenir et peut-être
              inspirer une nouvelle expérience. En reliant différentes prises de
              notes, une image d’ensemble se crée, comme pour cette webapp. Mais
              à partir de quel moment, cette activité personnelle, subjective
              peut-elle s’adresser à ou intéresser d’autres personnes ?
            </p>
            <p>
              F. Cette question me fait penser à la particularité des démarches
              d’Anna Halprin et de son mari. De leur expérience artistique et de
              leur vie, ils n’ont cessé d’extraire les processus en jeu et de
              leur donner forme à travers des méthodes et outils (« feuilles de
              route ») qu’ils peuvent ensuite partager avec d’autres. Anna
              Halprin le dit d’ailleurs dans l’atelier de Paris : « les choses
              n’existent qu’à partir du moment où on leur donne un nom ». Cette
              activité de symbolisation est récurrente dans leur travail et
              semble leur avoir permis de développer un langage pour
              communiquer, car le processus de création collective est bien au
              centre de leurs préoccupations.{' '}
            </p>
            <p>
              B. Anna Halprin a d’ailleurs été à nos côtés tout au long du
              processus de publication. Ces nombreux retours nous ont aidés à
              mieux saisir ses intentions et son approche de la danse. C’est ce
              que nous cherchions justement à révéler : que recouvre pour elle
              le mot danse ? À sa manière, elle a contribué à en élargir la
              définition par le biais de son enseignement, ses danses et
              chorégraphies. D’une manière générale, à travers nos
              comportements, notamment sociaux, ou nos pratiques artistiques, on
              se montre les uns aux autres les libertés que l’on s’autorise à
              prendre par rapport aux normes, aux codes communément admis. Toi,
              moi, Anna Halprin, l’utilisateur de cette webapp, on participe
              tous à définir la culture. Et on mesure, chacun à sa manière, la
              distance qui nous en sépare et à quel point on en est imprégné,
              bon gré mal gré.{' '}
            </p>
            <p>
              F. En ce sens, l’expérience d’Anna Halprin avec l’histoire de la
              culture de la danse est révélatrice : exclue par certains,
              comprise par d’autres. Elle a participé à repousser les frontières
              de la danse, elle a été novatrice. Je me souviens d’ailleurs de la
              force avec laquelle elle nous a accueillis lors de notre seconde
              visite, elle nous a dit : « J’ai un point de vue sur la danse ».
              En cinq minutes, elle a résumé comment elle concevait la danse :
              une science, une philosophie et un art.{' '}
            </p>
            <p>
              B. Nous l’écoutions et commencions à imaginer de nouvelles formes
              pour transmettre ce qu’elle disait. C’est à ce moment-là qu’elle
              nous a donné accès à toutes ses archives. On se retrouvait tout à
              coup avec une matière énorme qui venait accompagner les images de
              l’atelier de Paris. Le projet prenait une nouvelle direction : une
              étude de l’Atelier d’Anna Halprin, ce lieu où art et vie se
              rencontrent.
            </p>
            <p>
              F. Pour classer tous ces documents et sélectionner ce qui nous
              intéressait, nous avons introduit l’utilisation de mots-clés. Dans
              un premier temps, il était indispensable de nommer les choses,
              pour y voir clair, mais ensuite, ces mots nous ont fait voyager
              d’une autre manière. Ils se retrouvent actuellement dans la webapp
              sous la forme d’un index et permettent la rencontre de contenus de
              nature et de chronologie différentes autour d’un même thème.{' '}
            </p>
            <p>
              B. Comme lire un livre à partir de l’index{' '}
              <img
                src={'/images/ui/menu/mouth.png'}
                className="txt-img"
                alt="mouth"
              />
              , en suivant le bout de son nez. Les connections entre mots-clés
              offrent une façon élémentaire de créer du sens, par associations.
              L’utilisateur est devant des pièces de puzzle qu’il peut assembler
              selon ses propres préoccupations. Il s’agit alors de la rencontre
              entre sa subjectivité et la nôtre, dans la manière dont nous avons
              organisé et nommé les différents documents. Nous avons tenté,
              malgré tout, de rester au plus proche des propos d’Anna Halprin.{' '}
            </p>
            <p>
              F. Outre l’index, nous avons mis en place trois axes de navigation
              comprenant l’atelier de Paris{' '}
              <img
                src={'/images/ui/menu/round.png'}
                className="txt-img hand"
                alt="mouth"
              />
              , les étapes importantes de la vie et de la pratique artistique
              d’Anna Halprin{' '}
              <img
                src={'/images/ui/menu/eye.png'}
                className="txt-img"
                alt="mouth"
              />
              ￼et ses « feuilles de route »￼
              <img
                src={'/images/ui/menu/hand.png'}
                className="txt-img hand"
                alt="mouth"
              />
              . Ainsi l’utilisateur pourra découvrir les liens qu’Anna Halprin a
              développés entre sa pratique artistique et les expériences de sa
              vie : à quelles motivations personnelles ses « feuilles de routes
              » répondent-elles et comment, dans la pratique, Anna Halprin les
              communique-t-elle à d’autres (l’atelier de Paris) ?{' '}
            </p>
            <p>
              B. Je me souviens de nos longues discussions sur l’expérience de
              l’utilisateur. Comment garder son expérience vivante ? Pour celui
              qui avait participé à l’atelier, son expérience engageait tous ses
              sens. La vidéo est un changement radical de médium, d’espace. Ici,
              ce sont surtout les yeux, les oreilles, les doigts et
              l'imagination qui sont stimulés. Une coordination particulière
              pour notre attention.{' '}
            </p>
            <p>
              F. Oui mais peut-être que cette interactivité est une forme
              intermédiaire par rapport à la pratique en studio. La perception
              n’en est pas moins dynamique. Par les choix que l’utilisateur
              pose, sa perception est stimulée et il peut s’approprier les
              images ou résonner avec elles. On voyage dans différents niveaux
              de conscience, comme nous le propose finalement Anna Halprin :
              comment notre expérience peut être d’ordre mental, physique ou
              émotionnel. Le rapport à l’espace peut également être différent,
              car Anna Halprin propose de partir du corps puis d’investir sa
              vie, les autres et la planète. L’expérience peut alors se
              prolonger au-delà de la webapp.
            </p>
            <p>
              B. À travers ce projet, nous avons élaboré une forme d’archivage
              servant à documenter l’enseignement d’une artiste. Presque à notre
              insu, nous avons commencé à utiliser les termes d’Anna Halprin,
              nous nous sommes reconnus dans certains de ses processus. Cela
              nous a permis de développer un langage commun, entre nous et avec
              Anna Halprin. Mais je réalise maintenant que c’était avant tout
              une stratégie de notre part pour composer avec une expérience qui
              n’était pas nôtre au départ. Nous avons mesuré comment la matière
              nous touche, nous parle, éveille notre imagination, comment elle
              nous met en mouvement. C’est une expérience similaire que nous
              proposons ici à l’utilisateur : composer une expérience qui fasse
              sens. Une danse en soi.{' '}
            </p>
            <ul>
              <li>
                1  « Mouvements de Vie » Anna Halprin, traduit de l’anglais par
                Elise Argaud et Denise Luccioni, éditions Contredanse,
                Bruxelles, 2009.
              </li>
              <li>
                2  Peter Hulton est réalisateur de films documentaires et
                écrivain, responsable de Theatre Paper (dont les écrits d’Anna
                Halprin publiés en 1978 pour le Royaume-Uni) et Arts Archives –{' '}
                <a href="https://arts-archives.org">www.arts-archives.org</a> –,
                espace de ressources d’images numériques soutenant la recherche
                pour les arts vivants.
              </li>
              <li>
                3  « Moving toward Life » Anna Halprin, Wesleyan Univesrity
                Press, 1995.
              </li>
              <li>
                4  In « De l’une à l'autre - Composer, apprendre et partager en
                mouvements » Ouvrage collectif, éditions Contredanse, Bruxelles,
                2010. Original : « The RSVP Cycles » Lawrence Halprin,
                Braziller, 1969.
              </li>
            </ul>
          </div>
        ) : (
          <div className="ctn-body">
            <p>
              <i>
                To celebrate the release of “Mouvements de Vie1” with its author
                Anna Halprin, Contredanse invited her to give a two-day workshop
                in Paris in January 2010. Peter Hulton2 filmed the workshop
                which now forms the basis of this publication. Florence Corin
                and Baptiste Andrien, publishing directors at Contredanse,
                recall together the path that led to the making of this
                publication.{' '}
              </i>
            </p>
            <p>
              Florence: We discovered Anna Halprin’s teaching in two different
              ways. You took part in the Paris workshop whereas I experienced it
              afterwards through the medium of video. The first time I watched
              Peter Hulton’s films I was struck by the way Anna Halprin provides
              a framework for the participants’ experience through movement,
              drawing and voice, while at the same time composing with the
              musician and paying attention to form and timing. All these
              dimensions are visible, tangible and part of what I feel is
              specific to Anna Halprin’s approach; namely, to consider the
              overall workshop as a work of art, where everyone has the
              opportunity to address a personal question. My impression of the
              Paris workshop was of a time for exploration, transmission and
              aesthetic experience.{' '}
            </p>
            <p>
              Baptiste: I also remember our surprise as we realized how in two
              days of workshop Anna Halprin had in fact shared more than sixty
              years of practice and thinking about what dance can be. The
              weekend was a chance to continue questioning and keep up to date.
              Anna Halprin addressed us, as individuals and as a group, asking:
              what motivates your dance? What are your resources? What meaning
              does your dance have for you? What links does your dance have with
              others, with the environment, the context? What dance can emerge
              collectively? Who does it speak to? This seemed to us a simple and
              direct way of examining what a dance is. In fact, we asked
              ourselves similar questions when thinking about the nature of this
              publication. Our initial perspective was that this two-day
              workshop represented a moment in the history of Anna Halprin,
              informed by all of her many experiences. We made a diagram to
              present this first idea of a structure.
            </p>
            <br />
            <img
              src={'/images/ui/editor-note.jpg'}
              className="jumbo"
              alt="Note de l'éditeur"
            />
            <p>
              F. Like an hourglass. The emphasis is on the passage of time, on
              the process more than on the result. This is made possible with a
              webapp. At the time of this drawing, our knowledge of Anna
              Halprin’s work was mainly based on the French translation of her
              book “Moving Toward Life3” and “The RSVP Cycles4”, a book written
              by her husband, Lawrence Halprin, about creative processes in the
              human environment. The videos of the Paris workshop showed us how
              Anna Halprin’s work is present in her body and in the way she
              shares the work in space at this particular time in her history.
              So we went to see her to learn more about the historical context
              of her teaching and ask about certain notions that had caught our
              attention.
            </p>
            <p>
              B. On our return to Brussels, we looked in more detail at the
              workshop to identify more precisely what was involved in the
              various activities, both in terms of content and in the
              progression from one to the next. When I think now of the Paris
              workshop, which I took part in, I remember the feeling of not
              knowing at the time where Anna Halprin was taking us and of
              sensing if I wanted to go there. In general, whether faced with a
              workshop or a book or any other situation, there is this very
              visceral feeling: do I, my body and my imagination, want to taste
              this new experience? When I feel the desire to dive intoa
              proposal, my different senses organize themselves around my
              attention. I tune myself to the language used by the teacher,
              feeling the experience that their words and actions carry. I am
              like a blind man who does not yet have a representation of the
              space he is in but discovers and builds it as he explores.
            </p>
            <p>
              F. That’s why we asked Julie Numrich, who was a pupil and
              assistant of Anna Halprin for many years, to work with us on the
              Paris workshop. Going through the RSVP Cycles together we gained
              insight into the workshop. Her understanding and experience helped
              us to write down the score, to reveal the general outline as well
              as the specific intentions underlying each activity.
            </p>
            <p>
              B. The process of putting the structure of the workshop down on
              paper allowed us to step back and have another object in front of
              us. Taking notes is a way of translating experience. It gives me
              the impression, or the illusion, of focusing my understanding of
              the moment, of fixing a memory of my state of attention so that I
              can return to it later and maybe find inspiration for new
              experiences. In putting together different notes, an overall
              picture is created, like in this webapp. But at what moment does
              this personal, subjective activity become of interest to others?
            </p>{' '}
            <p>
              F. Cette question me fait penser à la particularité des démarches
              d’Anna Halprin et de son mari. De leur expérience artistique et de
              leur vie, ils n’ont cessé d’extraire les processus en jeu et de
              leur donner forme à travers des méthodes et outils (« feuilles de
              route ») qu’ils peuvent ensuite partager avec d’autres. Anna
              Halprin le dit d’ailleurs dans l’atelier de Paris : « les choses
              n’existent qu’à partir du moment où on leur donne un nom ». Cette
              activité de symbolisation est récurrente dans leur travail et
              semble leur avoir permis de développer un langage pour
              communiquer, car le processus de création collective est bien au
              centre de leurs préoccupations.{' '}
            </p>
            <p>
              F. That question makes me think of how special Anna Halprin and
              her husband’s work is. They’ve never stopped questioning the
              processes at play in their lives and in their artistic experience.
              They’ve taken these processes and given them form through methods
              and tools (“Roadmaps”) that can then be shared with others. Anna
              Halprin says in the Paris workshop: “things exist only when you
              give them a name.” We see this activity of symbolization again and
              again in their work and it seems to have allowed them to develop a
              language. Communicating with others is essential for the process
              of collective creation which is truly at the heart of their
              concerns.{' '}
            </p>
            <p>
              B. So Anna Halprin has been present throughout the entire process
              of creating this webapp. Her extensive feedback has helped us
              understand her intentions and her approach to dance. This is
              precisely what we wanted to focus on: what does the word dance
              mean for her? In her own way, through her teaching, dancing and
              choreography, she has helped broaden the definition of what dance
              is. In general, through our social and artistic behaviour, we show
              each other the freedom we allow ourselves in relation to generally
              accepted codes and norms. You, me, Anna Halprin, the user of this
              webapp, we all participate in defining culture. And we can all
              measure, each in our own way, both how far we feel from that
              culture and how much it colours us whether we like it or not.
            </p>
            <p>
              F. In that sense, Anna Halprin’s experience with the history of
              dance culture is revealing: she has been excluded by some and
              understood by others. She has contributed to opening up the
              boundaries of what is considered dance. She has introduced new
              ideas and ways of working. I also remember the force with which
              she greeted us on our second visit when she told us: "I have a
              view on dance." In five minutes she summed up her vision of dance
              as a science, a philosophy and an art.
            </p>
            <p>
              B. We listened to her and began to imagine new ways to pass on
              what she is timewas saying. It was at th that she gave us access
              to all her archives. We suddenly found ourselves with a huge
              amount of material that could accompany the Paris workshop. The
              project took on a new direction: a study of the “Anna Halprin
              Workshop” as a major place where art and life meet.{' '}
            </p>
            <p>
              F.In the process of sorting these documents and selecting what
              interested us, we introduced the use of keywords.At first this was
              necessary in order to have a clear view of what we had, but
              progressively these keywords also made us travel through the
              material in another way.These keywords can be found on the webapp
              as an index{' '}
              <img
                src={'/images/ui/menu/mouth.png'}
                className="txt-img"
                alt="mouth"
              />{' '}
              that allows the user to follow a particular theme across different
              types of content as well as chronologically.
            </p>
            <p>
              B. Like when you read a book from the index and just follow your
              nose. Using the links between keywords is a basic way to create
              meaning through associations. The user is faced with a jigsaw
              puzzle that he can put together as he wishes. The subjectivity of
              the user inevitably meets our subjectivity even if we have tried
              to stay as close as possible to Anna Halprin in the way we have
              organized and named the documents.
            </p>
            <p>
              F. In addition to the index, we then added three axes of
              navigation that cover the experience of the Paris workshop{' '}
              <img
                src={'/images/ui/menu/round.png'}
                className="txt-img hand"
                alt="mouth"
              />
              , important moments in Anna Halprin’s life and artistic practice{' '}
              <img
                src={'/images/ui/menu/eye.png'}
                className="txt-img"
                alt="mouth"
              />
              and “roadmaps”
              <img
                src={'/images/ui/menu/hand.png'}
                className="txt-img hand"
                alt="mouth"
              />{' '}
              Through these, the user will be able to appreciate the
              interconnectedness of Anna Halprin’s life and her dance practice:
              how and why Anna Halprin developed the “roadmaps” from experiences
              in her life and how she shares these tools practically in the
              context of the Paris workshop.
            </p>
            <p>
              B. I remember our long discussions about how the users would
              experience the webapp. How could we keep their experience alive?
              When we take part in a workshop, experience is felt through all
              the senses. Video is a radical change of medium and of space. Here
              it is mostly our eyes, our ears, our fingers and our imagination
              that are stimulated. This sets up a particular coordination of our
              attention.
            </p>
            <p>
              F. Yes, but maybe this interactivity is an intermediate form in
              relation to studio practice, and the perception involved not any
              less dynamic. By the choices the user makes, his perception is
              stimulated and he can incorporate images or resonate with them. We
              travel on different levels of consciousness, as Anna Halprin
              suggests: our experience can be mental, physical or emotional. Our
              relationship to space can also be in movement. Anna Halprin
              proposes to start from the body and then to invest our lives,
              others and the planet. In this way, the experience can extend
              beyond the webapp.{' '}
            </p>
            <p>
              B. Through this project, we have developed a form of archiving
              that seeks to document an artist’s teaching. Almost without
              realizing it, we began to use Anna Halprin’s words and to see
              ourselves mirrored in some of her processes. This allowed us to
              develop a common language, between ourselves and with Anna
              Halprin, but I realize now that above all it was a strategy for
              dealing with an experience that was not at first our own. We felt
              how the material touched us, spoke to us, awoke our imagination,
              how it moved us. We offer a similar experience here to the user:
              create an experience that makes sense for you. A dance in itself.{' '}
            </p>
            <ul>
              <li>
                1  “Mouvements de Vie ” by Anna Halprin translated by élise
                Argaud and Denise Luccioni, Contredanse Editions, Brussels, 2009{' '}
              </li>
              <li>
                2  Peter Hulton is a documentary film-maker and writer,
                responsible for Theatre Papers (publishing Anna Halprin’s
                writings in the UK in 1978) and Arts Archives -
                www.arts-archives.org - an international digital moving image
                resource for performance research initiated by the Council of
                Europe.{' '}
              </li>
              <li>
                3  “Moving towards Life” by Anna Halprin, Wesleyan University
                Press, 1995.{' '}
              </li>
              <li>
                4  In “De l’une à l'autre - Composer, apprendre et partager en
                mouvements ” Contredanse Editions, Brussels, 2010. From the
                original “The RSVP Cycles” by Lawrence Halprin, Braziller, 1969.{' '}
              </li>
            </ul>
          </div>
        )}
      </S.Ctn>
    </MainLayout>
  );
};
