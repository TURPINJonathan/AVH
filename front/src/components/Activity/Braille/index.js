import React from "react";

import './braille.scss';

import LouisBrailleEnfant from "../../../assets/img/louisBraille_enfant.jpg";
import firstBraille from "../../../assets/img/firstBraille.jpg";
import secondBraille from "../../../assets/img/secondBraille.jpg";
import brailleTouch from "../../../assets/img/braille_touch.jpg";

const Braille = () => {
    return (
        <main className="braille">
            <h2>Le braille</h2>
            {/* Biographie Braille */}
            <article>
                <h3>Biographie Braille</h3>
                <div id="biography">
                    <img src={LouisBrailleEnfant} alt="Louis Braille enfant" />
                    <p>
                        L’année 1809 a donné naissance à trois personnages qui allaient entrer dans l’Histoire.
                        <ul>
                            <li>
                                L’américain Abraham Lincoln, 16ème président des Etats-Unis.
                            </li>
                            <li>
                                L’anglais Charles Darwin, fondateur de la théorie de l’évolution des espèces vivantes.
                            </li>
                            <li>
                                Le français Louis Braille, inventeur de l’écriture éponyme. Sa méthode universelle de lecture et d’écriture à l’usage des personnes aveugles a fait de lui l’homme qui leur a donné accès à la connaissance et aux savoirs.
                            </li>
                        </ul>
                    </p>
                    <p>
                        Louis Braille naît le 4 janvier 1809 à Coupvray, en Seine-et-Marne, à une quarantaine de kilomètres à l'est de Paris. Benjamin d’une fratrie de quatre enfants, il est élevé par des parents aimants et protecteurs.
                    </p>
                    <p>
                        C’est lors d’un tragique accident à l’âge de trois ans, survenu dans l’atelier de bourrellerie de son père, que Louis va perdre la vue. En voulant l’imiter, une serpette dans les mains, il se blesse très gravement à l’œil droit. Les moyens de la médecine de l’époque ne permettant pas de soigner sa blessure, l’infection gagne l’autre œil et, vers l’âge de cinq ans, il devient totalement aveugle.
                    </p>
                    <p>
                        Heureusement, Louis a la chance de grandir dans une famille unie, auprès de parents qui tiennent, malgré son lourd handicap, à lui donner une bonne instruction, fait assez remarquable pour l’époque. Après avoir appris l’alphabet, réalisé à l'aide de clous plantés dans une planche de bois, il suit les cours du père Palluy, avant d’être élève durant trois ans à l’école du village. Il s’y révèle doué d’une intelligence vive et, très vite, s’affirme comme l’un des plus brillants élèves.
                    </p>
                    <p>
                        A l’âge de dix ans, en février 1819, Louis Braille quitte sa famille pour l’Institution Royale des Jeunes Aveugles à Paris, l’école fondée par Valentin Haüy en 1785, où il a le privilège d’avoir été accepté. Il y passera dès lors la majorité de sa vie, ne revenant à Coupvray que pour les vacances. Il y sera également l’un des meilleurs élèves, remportant pas moins de 29 Prix en huit ans !
                    </p>
                    <p>
                        Grâce à sa remarquable intelligence et à l’invention précoce de son alphabet, l’Institution l’engagera comme professeur à l’âge de…17 ans. Il y enseignera la grammaire, les mathématiques, l’histoire, la géographie et la musique. Il sera également organiste dans plusieurs églises de la capitale.

                    </p>
                </div>
            </article>
            <div className="divider" />
            {/* Un système novateur */}
            <article>
                <h3>Un système novateur</h3>
                <div id="firstSystem">
                    <img src={firstBraille} alt="Alphabet braille" />
                    <p>
                        Dans cette école, la lecture et l’écriture se pratiquent avec le système initié par Valentin Haüy : des lettres noires (c’est ainsi qu’on nomme l’écriture imprimée, utilisée par les voyants) en relief. Elles sont cependant très difficiles à lire au toucher et ne permettent pas d’écrire.
                    </p>
                    <p>
                        C’est à 12 ans que Louis Braille expérimente le système de Charles Barbier de la Serre, dit de sonographie, qui permet de transcrire des sons à l’aide de douze points en relief (ou points saillants).
                    </p>
                </div>
                <div id="secondSystem">
                    <img src={secondBraille} alt="Numérotation et autres caractères en braille" />
                    <p>
                        Il est enthousiasmé par ce nouveau code bien plus facile à lire et à écrire, mais qui présente l’inconvénient d’être uniquement phonétique (proche du texto) et d’avoir une hauteur trop élevée pour être lue immédiatement par le doigt.
                    </p>
                    <p>
                        Très jeune, entre ses 12 et ses 16 ans, Louis Braille s’attèle donc à adapter et perfectionner le système de Barbier de la Serre. Il va réussir à créer un alphabet complet, incluant les signes de ponctuation, les chiffres et symboles mathématiques et même les notes de musique… puisque, musicien lui-même, il y ajoute les partitions, lorsqu’il a 19 ans.
                    </p>
                    <p>
                        Outre le braille, Louis Braille sera à l’origine d’autres inventions importantes, dont le décapoint qui longtemps a permis aux personnes aveugles d’écrire facilement aux voyants, en formant les lettres noires au moyen de points en relief.
                    </p>
                    <p>
                        En dépit de son grand intérêt, les décisions étant régies par les voyants (qui préfèrent le système plus traditionnel des lettres noires), il faudra encore attendre 20 ans avant que l’alphabet de Louis Braille ne soit accepté… même si ce dernier rencontre déjà à l’époque un certain succès.
                    </p>
                    <p>
                        De santé fragile, Louis Braille meurt de la tuberculose à l’Institution Royale des Jeunes Aveugles le 6 janvier 1852 à l’âge de 43 ans. Il est enterré dans le cimetière de son village, à Coupvray, quelques jours plus tard. Ses cendres sont transférées au Panthéon le 21 juin 1852.
                    </p>
                </div>
            </article>
            <div className="divider" />
            {/* Tout savoir sur le braille */}
            <article>
                <h3>Tout savoir sur le braille</h3>
                <div id="know">
                    <img src={brailleTouch} alt="lecture du braille au touché" id="braille_touch" />
                    <p>
                        Le braille est un système d’écriture tactile à points saillants à l’usage des personnes aveugles ou très malvoyantes mis au point par Louis Braille en 1829. L’un des objectifs principaux de l’association Valentin Haüy depuis sa création, en 1889, est de promouvoir le système d'écriture braille.
                    </p>
                    <p>
                        L’association contribue ainsi largement à ouvrir les portes de la connaissance, de la culture et de la vie professionnelle aux personnes aveugles ou malvoyantes à travers l’offre de sa médiathèque, son imprimerie braille, ses publications en braille, ses cours de braille, ou encore la vente de matériels adaptés. Elle organise également chaque année depuis plus de 20 ans un concours national « Le Poinçon Magique » dans le but de favoriser et de promouvoir la connaissance du braille.
                    </p>
                </div>
            </article>
            <div className="divider" />
            {/* Quand et comment apprendre le braille ? */}
            <article>
                <h3>Quand et comment apprendre le braille ?</h3>
                <div>
                    <p>
                        Le braille peut s’apprendre à tout moment. À tout âge, que vous soyez voyant ou aveugle, vous pouvez acquérir les notions essentielles à la lecture et l’écriture du braille. Il s’agit tout simplement d’apprendre un nouvel alphabet.
                    </p>
                </div>
            </article>
            <div className="divider" />
            {/* Le braille dans le monde */}
            <article>
                <h3>Le braille dans le monde</h3>
                <div id="world">
                    <p>
                        La troisième édition de "L'emploi du braille dans le monde" comprend 133 langues qui ont été transcrites en 137 codes braille différents représentant leurs alphabets et ponctuations. Cela concerne au total 142 pays. Ce travail, qui a été rendu possible grâce à des centaines de personnes utilisatrices et productrices de braille à travers le monde, met en valeur de nouvelles perspectives sur l'utilisation du braille dans le monde.
                    </p>
                    <p>
                        Le braille, seul système prééminent d'écriture et de lecture tactile utilisé par les personnes aveugles, continue d'être un outil indispensable l'alphabétisation. En permettant un accès direct et immédiat à la communication écrite, le braille a accru son rayon d'action: à l'origine méthode de lecture de livres, il est devenu un outil multimodal englobant une grande diversité d'usages. En tant que moyen d'écriture, il permet aussi à une personne aveugle de consigner avec facilité et de façon rigoureuse de l'information pour pouvoir y accéder rapidement pour un usage ultérieur.
                    </p>
                    <p>
                        Conçue grâce au soutien de Perkins, du Conseil International sur le Braille Anglais (ICEB), et du Service de la Bibliothèque Nationale pour les aveugles et handicapés physiques, cette troisième édition de l'ouvrage "L'emploi du braille dans le monde" se veut être un document de référence de la situation actuelle du braille à travers le monde.
                    </p>
                    <p>
                        Mais de nombreux changements et innovations, à la fois technologiques et politiques, restent à venir. Nous espérons que la tendance vers la codification de langues supplémentaires, vers la normalisation des codes actuels et le développement de nouveaux outils d'accès va se poursuivre, afin de rendre l'apprentissage du braille accessible aux personnes aveugles dans toutes les langues originelles.
                    </p>
                    <p>
                        "L'emploi du braille dans le monde", 3e édition (mai 2013), peut être téléchargé sur le site web de Perkins à l'adresse : http://www.perkins.org/worldbraille/
                    </p>
                </div>
            </article>
            <div className="divider" />
            {/* Le CEBF */}
            <article>
                <h3>Le CEBF</h3>
                <div id="cebf">
                    <p>
                        La Commission Évolution du Braille Français (CEBF) a été créée en 1987, à l'initiative de l'association Valentin Haüy.
                    </p>
                    <p>
                        Elle a été ensuite placée sous l'égide du Ministère chargé des Affaires sociales. Elle est constituée d'une trentaine de membres nommés par arrêté ministériel en fonction de leur compétence en braille et de leur connaissance du handicap visuel. Elle ne se limite pas à la France, puisqu'elle regroupe des représentants de la Belgique et de la Suisse. Elle entretient également des contacts avec le Québec.
                    </p>
                    <p>
                        En outre, des pourparlers sont en cours pour permettre le plus tôt possible la participation de représentants du continent africain. Parmi les membres qui la composent, on trouve plusieurs professeurs, des transcripteurs et correcteurs de braille, des informaticiens, des constructeurs de matériels adaptés.
                    </p>
                    <p>
                        La CEBF a pour mission d'adapter le braille français aux besoins de tous ses utilisateurs. En ce sens, elle veille en particulier à ce que la transcription en braille d'un texte imprimé permette de respecter le plus fidèlement possible les informations et présentations qu'il contient, sans pour autant surcharger la lecture braille.
                    </p>
                    <p>
                        Pour accomplir sa tâche, la Commission Évolution du Braille Français met en place des sous-commissions spécialisées ouvertes à toute personne possédant des compétences sur les sujets traités.
                    </p>
                    <p>

                        En 1992, la CEBF publiait un premier document, fruit de ses cinq années de travail, le "Code de Transcription en braille des textes imprimés". Cet ouvrage formalise un ensemble de règles à observer par les centres de transcription braille (dont la plupart étaient d'ailleurs appliquées de fait) et apporte quelques modifications au système braille de base, notamment en vue de simplifier la transcription automatique par ordinateur. En particulier :
                        <ul>
                            <li>
                                •	des règles relatives aux majuscules, aux sigles, aux chiffres romains, ainsi qu'aux changements de typographies ont été précisées.
                            </li>
                            <li>
                                •	les ponctuations "parenthèses" et "guillemets" ont été permutées.
                            </li>
                            <li>
                                •	on ne distingue plus de tirets ouvrants ou fermants. En septembre 1999, la CEBF publiait une deuxième édition de ce "Code" apportant de nouvelles précisions dans l'emploi de certains signes, supprimant certaines ambiguïtés et assouplissant encore davantage certaines règles dans le cas de transcriptions automatiques. En particulier :
                            </li>
                            <li>
                                •	la ponctuation "point" peut être représentée par la combinaison des points 256 ou par le point 3.
                            </li>
                            <li>
                                •	les tirets peuvent être espacés des mots qu'ils précèdent ou qu'ils suivent si tel est le cas dans le document imprimé.
                            </li>
                            <li>
                                •	les chiffres dits "Antoine" sont obligatoires dans le cas d'une transcription de documents à caractère scolaire ou technique, tandis que le choix de la notation dite "numérique" ou "Antoine" est laissé aux soins du transcripteur dans le cas de textes à caractère général (romans, revues, documents non techniques).
                            </li>
                            <li>
                                •	deux notes générales ont été ajoutées : la première indiquant qu'il appartient au transcripteur de faire un compromis entre la nécessité de ne pas surcharger le texte et le souci de conserver des informations utiles au lecteur, la seconde précisant qu'à chaque fois qu'il peut y avoir ambiguïté du fait de l'emploi de l'abrégé braille français, on doit utiliser l'intégral.
                            </li>
                        </ul>
                    </p>
                    <p>
                        Ces modifications du braille n'ont pas bouleversé le système, loin s'en faut. C'est pourquoi, après une période d'observation de la part de certains producteurs de braille, on peut affirmer qu'aujourd'hui tous les centres de transcription, tous les imprimeurs de braille et toutes les associations de personnes déficientes visuelles ont adopté le nouveau Code de transcription.
                    </p>
                    <p>
                        Il importe et la CEBF insiste sur ce point que chaque transcripteur ou producteur de braille applique le Code de Transcription avec souplesse, en adaptant les règles actuelles aux catégories de lecteurs auxquels sont destinées leurs publications. Ainsi, par exemple, les règles relatives aux changements de typographie et aux majuscules pour les groupes de plus de trois mots doivent faire l'objet d'une application stricte dans le domaine scolaire, mais il est possible d'y déroger lorsqu'il s'agit notamment de magazines ou de romans destinés à un public large pour un usage personnel et principalement à titre de loisir.
                    </p>
                    <p>
                        C'est là l'interprétation qu'il faut donner à la note 1 précitée, la Commission ne souhaitant pas que la lisibilité d'un document soit sacrifiée au motif de fournir aux lecteurs des indications typographiques dont il n'a que faire, le plus souvent, lors d'une lecture d'un article de journal ou d'un roman policier, par exemple.
                    </p>
                </div>
            </article>
        </main>
    );
}

export default Braille;