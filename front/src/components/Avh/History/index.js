import React from "react";

import './history.scss';

//! TODO: museum picture width

const History = () => {
    return (
        <main className="history">
            <section>
                <h2>Notre histoire</h2>
                <article id="overview">
                    <p>
                        L’histoire de l’association est marquée par trois grands personnages : Valentin Haüy, Louis Braille et Maurice de La Sizeranne.
                        Chacun de ces hommes est intervenu à sa façon afin d’aider les personnes aveugles ou malvoyantes à acquérir plus d’autonomie et à trouver leur place socialement et professionnellement dans la société.
                    </p>
                    <p>
                        Jusqu’au 18ème siècle, l’histoire des aveugles se confond avec celle de tous les autres exclus. Les moins favorisés mendient ou vivent d’expédients. C’est la publication par Diderot, le 9 juin 1749, de sa Lettre sur les aveugles à l’usage de ceux qui voient, ouvrage évoquant notamment le mathématicien aveugle Saunderson (1682-1739), qui va changer l’image des aveugles dans la société.
                    </p>
                </article>
                <article className="history__ourHistory__articleRight">
                    <aside className="picture">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Valentin_Ha%C3%BCy%2C_fondateur_de_l%27Institution_Nationale_des_Jeunes_aveugles.jpg/260px-Valentin_Ha%C3%BCy%2C_fondateur_de_l%27Institution_Nationale_des_Jeunes_aveugles.jpg" alt="Valentin Haüy" />
                        <p className="picture_name">Valentin Haüy</p>
                        <p className="picture_date">(1745 - 1822)</p>
                    </aside>
                    <aside className="text">
                        <p>
                            Il fut l'un des premiers à s'intéresser à l’inclusion sociale et culturelle des aveugles, il est le fondateur de l’actuel Institut National des Jeunes Aveugles (INJA).
                        </p>
                        <p>
                            Homme de lettres pratiquant outre le latin, le grec et l’hébreu, une dizaine de langues vivantes, il fut professeur du Bureau Académique d’Ecriture et interprète du roi pour les langues espagnoles, italienne et portugaise. Choqué par un spectacle donné par de jeunes aveugles à la Foire de Saint Ovide, où ces derniers sont largement moqués, il décide de se mobiliser en faveur des personnes aveugles ou malvoyantes.
                        </p>
                        <p>
                            C’est ainsi qu’il fonda à Paris en 1786 l'Institution des Enfants Aveugles (première école pour les enfants déficients visuels) qui existe toujours aujourd’hui sous le nom d’INJA. La grande idée de Valentin Haüy était de permettre aux aveugles d’accéder à la lecture. Pour cela, il fit réaliser les lettres de l’alphabet en grand format et s’en servit pour gaufrer le papier. Grâce à cette méthode, il apprit à ses jeunes élèves aveugles à lire, à composer des phrases, à acquérir des rudiments d’orthographe et à faire du calcul.
                        </p>
                        <p>
                            Ce fut le début pour Valentin Haüy d’une période de plus de trente années totalement dédiées à la cause des aveugles et malvoyants, jusqu’à sa mort en 1822.
                        </p>
                    </aside>
                </article>
                <article className="history__ourHistory__articleLeft">
                    <aside className="text">
                        <p>
                            Il est l’inventeur du braille, ce système d’écriture tactile à points saillants à l’usage des personnes aveugles ou malvoyantes.
                        </p>
                        <p>
                            Louis Braille est devenu aveugle accidentellement à l’âge de 3 ans, alors qu’il manipulait une alène (outil qui sert à faire des trous dans le cuir) dans l’atelier de son père. La blessure s’infecta et provoqua peu à peu la cécité chez le jeune garçon. Ses parents voulaient une bonne instruction pour leur enfant désormais handicapé. Ils lui obtinrent une bourse pour son admission au sein de l’école fondée par Valentin Haüy, qui s’appelait à l’époque Institution Royale des Jeunes Aveugles. Louis Braille était un élève très doué qui réussissait dans toutes les disciplines.
                        </p>
                        <p>
                            C’est durant ses années d’études, en 1821, que le jeune garçon assista à la présentation faite par Charles Barbier de La Serre de son système de sonographie. Louis Braille avait alors 12 ans. Le système Barbier était un système d'écriture tactile qui retranscrivait les sons et non pas l’alphabet. Cette invention fut à l’époque une avancée extraordinaire mais présentait quelques limites. Notamment, elle ne rendait pas compte de l’orthographe et ne proposait pas de combinaisons permettant de représenter la ponctuation, les chiffres, les notes de musique ou les symboles mathématiques.
                        </p>
                        <p>
                            Louis Braille décida alors de poursuivre le développement de ce système. En 1827, âgé de 18 ans, il présenta son propre système. En 1829 parut Procédé pour écrire les paroles, la musique et le plain-chant au moyen de points, à l’usage des aveugles et disposés pour eux. Cet ouvrage est le véritable acte de naissance du système braille.
                        </p>
                        <p>
                            Si le système mis au point par Louis Braille a évolué jusqu’à nos jours, il est encore celui utilisé par les personnes aveugles ou malvoyantes notamment pour tout ce qui relève de l’apprentissage, de l’éducation, de la formation.
                        </p>
                    </aside>
                    <aside className="picture">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Louis_Braille.jpg/200px-Louis_Braille.jpg" alt="Louis Braille" />
                        <p className="picture_name">Louis Braille</p>
                        <p className="picture_date">(1809 - 1852)</p>
                    </aside>
                </article>
                <article className="history__ourHistory__articleRight">
                    <aside className="picture">
                        <img src="https://www.avh.asso.fr/sites/default/files/louis_braille.jpg" alt="Maurice de La Sizeranne" />
                        <p className="picture_name">Maurice de La Sizeranne</p>
                        <p className="picture_date">(1857 - 1924)</p>
                    </aside>
                    <aside className="text">
                        <p>
                            Il est le fondateur de l’association Valentin-Haüy.
                        </p>
                        <p>
                            Maurice de La Sizeranne avait 9 ans lorsqu’il perdit la vue dans un accident de jeu. Élève au sein de l’école créée par Valentin Haüy, devenue l’INJA à son époque, il présentait de formidables aptitudes musicales et devint professeur de musique en 1878. Très engagé pour la cause des aveugles, Maurice de La Sizeranne travaillait à la conception d’une nouvelle méthode abréviative de l’écriture braille qui aboutit en 1880 à L’Abrégé orthographique français.
                        </p>
                        <p>
                            Maurice de La Sizeranne constata que, malgré les progrès réalisés dans l’éducation des jeunes aveugles, ceux-ci se trouvaient à la sortie de l’école, livrés à eux-mêmes et privés de toute information qui leur permettrait de s’insérer dans le monde du travail. Dès lors, il prit un certain nombre d'initiatives pour remédier à cela. Tout d’abord, il créa trois périodiques : Le Louis Braille, Le Valentin Haüy et La Revue Braille en 1883 et 1884. Il fonda également en 1886 une bibliothèque braille complétée par une bibliothèque braille musicale peu après.
                        </p>
                        <p>
                            Il s’entourait de personnalités susceptibles de s’intéresser au sort des aveugles (professeurs de l’INJA, inventeurs, directeurs d’écoles…) afin d’accélérer ses initiatives en faveur des personnes aveugles ou malvoyantes. C’est au cours de l’une de leurs réunions que furent jetées les bases de ce qui allait devenir l’association Valentin Haüy, fondée en 1889 et reconnue d’utilité publique en 1891.
                        </p>
                        <p>
                            Maurice de La Sizeranne resta 35 ans au poste de Secrétaire général de cette association, jusqu’à sa mort en 1924. Il n’aura de cesse de mener des actions en faveur de l’insertion sociale et culturelle des personnes aveugles ou malvoyantes.
                        </p>

                    </aside>
                </article>
            </section>
            <section>
                <article>
                    <h2>Notre musée et notre bibliothèque</h2>
                    <p>
                        Par le biais d’objets ou d’ouvrages en vitrines et en exposition tactile, vous pourrez découvrir au Musée Valentin Haüy ainsi que dans sa Bibliothèque patrimoniale, l'histoire de la cécité et de sa représentation en France et dans le monde, ainsi que celle de la prise en charge des aveugles et leurs combats pour accéder à la culture, à l’éducation et à la citoyenneté.
                    </p>
                    <img src="https://via.placeholder.com/728x90.png" alt="Musée de Paris" id="museum" />
                    <p>
                        Fondé en 1886 par un aveugle, Edgard Guilbeau, en vue de valoriser l’invention du braille et de la situer dans son contexte historique, le musée est aujourd’hui dévolu à l’histoire des aveugles. Cette histoire a des spécificités françaises.
                    </p>
                    <p>
                        La prise en charge de la cécité en France remonte à la fondation à Paris par Saint Louis, vers 1260, de l’hospice des Quinze-Vingts. Au siècle des Lumières, Diderot fait du personnage de l’aveugle un objet philosophique. En 1785, Valentin Haüy dirige à Paris la première école jamais ouverte pour des enfants aveugles. Dix ans plus tard, la Convention nationalise cet établissement.
                    </p>
                    <p>
                        En1825, un élève de l’Institution des jeunes aveugles, Louis Braille, qui a seize ans, finalise un codage tactile de l’écriture qui porte aujourd’hui son nom. En 1889, Maurice de La Sizeranne, élève, puis enseignant de l’Institut national des jeunes aveugles (Inja), fonde une association « pour le bien des aveugles », à laquelle il donne le nom de Valentin Haüy. L’association accueille

                        le musée en son sein.
                    </p>
                    <p>
                        La présentation est d’abord chronologique et privilégie l’histoire de l’accès des aveugles à l’éducation. Puis, elle s’articule autour de thèmes essentiels à la compréhension du handicap visuel. Les collections sont mises en valeur par un mobilier de style Art nouveau, créé spécialement pour elles en 1907, qui confère à la pièce son atmosphère de cabinet de curiosités.
                    </p>
                </article>
            </section>
            <section>
                <article>
                    <h2>Bibliothèque patrimoniale Valentin Haüy</h2>
                    <p>
                        Créée par Maurice de La Sizeranne en 1886, la même année que le musée, la bibliothèque patrimoniale a vocation à rassembler tous documents sur le handicap visuel ou écrits par les personnes touchées par ce handicap.
                    </p>
                    <p>
                        Outre les ouvrages historiques, certains à caractère bibliophile, la bibliothèque patrimoniale conserve des revues et des archives. On trouve la collection complète des Annales de l’éducation des sourds et des aveugles, 1844-1850 ; de l’Instituteur des aveugles, revue fondée
                    </p>
                    <p>
                        par Joseph Guadet, 1855-1863 ; du Valentin Haüy, créé en 1883, toujours publié sous le titre Valentin Haüy Actualités ; et d’une cinquantaine de périodiques.
                    </p>
                    <p>
                        Outre le français, majoritaire, vingt-sept langues sont représentées, en premier lieu l’anglais. Les documents en langues étrangères sont, pour la plupart, des revues et des rapports émanant d’institutions.
                    </p>
                    <p>
                        Les archives sont composées de correspondances, manuscrits, inventaires, albums d’anciennes coupures de presse et plaques de verre, essentiellement des portraits de soldats mutilés des yeux de la Grande Guerre.
                    </p>
                </article>
            </section>
        </main>
    );
}

export default History;