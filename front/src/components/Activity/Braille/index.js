import React from "react";

import './braille.scss';

import LouisBrailleEnfant from "../../../assets/img/louisBraille_enfant.jpg";
import firstBraille from "../../../assets/img/firstBraille.jpg";
import secondBraille from "../../../assets/img/secondBraille.jpg";

const Braille = () => {
    return (
        <main className="braille">
            <h2>Le braille</h2>
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
            <article>
                <h3>Un système novateur</h3>
                <div id="firstSystem">
                    <img src={firstBraille} alt="Premier système de braille" />
                    <p>
                        Dans cette école, la lecture et l’écriture se pratiquent avec le système initié par Valentin Haüy : des lettres noires (c’est ainsi qu’on nomme l’écriture imprimée, utilisée par les voyants) en relief. Elles sont cependant très difficiles à lire au toucher et ne permettent pas d’écrire.
                    </p>
                    <p>
                        C’est à 12 ans que Louis Braille expérimente le système de Charles Barbier de la Serre, dit de sonographie, qui permet de transcrire des sons à l’aide de douze points en relief (ou points saillants).
                    </p>
                </div>
                <div id="secondSystem">
                    <img src={secondBraille} alt="Second système de braille" />
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
        </main>
    );
}

export default Braille;