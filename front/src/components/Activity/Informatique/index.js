import React from "react";

import './informatique.scss';
import Pin from "../../../assets/img/list_style.png"

import loading from '../../../assets/img/page_developping.png';
import InformatiqueBlind from "../../../assets/img/informatique/informatique_blind.png";

const Informatique = () => {
    return (
        <main className="informatique">
            <h2>L'informatique adapté</h2>
            <article>
                <h3>L'informatique adapté</h3>
                <div className="informatique_content">
                    <img src={InformatiqueBlind} alt="Utiliser l'informatique" className="picture" />
                    <div>
                        <p>
                            L’informatique représente une véritable avancée pour les déficients visuels, car cet outil leur apporte une certaine forme d’autonomie en leur (ré)ouvrant l’univers de l’écrit.
                        </p>
                        <p>
                            La maîtrise de l’informatique dite adaptée aux déficients visuels est une opportunité pour lire, écrire et communiquer.
                        </p>
                        <p>
                            L’association Valentin Haüy Caen Calvados initie les personnes déficientes visuelles à l’usage non professionnel d’un ordinateur équipé de synthèse vocale, d’agrandisseur de caractères ou d’une plage en braille, pour leur permettre de :
                        </p>
                        <ul>
                            <li>
                                <img src={Pin} alt="Pin" className="pin" />
                                Accéder à Internet et correspondre par messagerie avec d’autres personnes
                            </li>
                            <li>
                                <img src={Pin} alt="Pin" className="pin" />
                                Lire des documents en noir (document classique non transcrit en braille)
                            </li>
                            <li>
                                <img src={Pin} alt="Pin" className="pin" />
                                Écrire et imprimer du courrier
                            </li>
                            <li>
                                <img src={Pin} alt="Pin" className="pin" />
                                Classer et retrouver des documents sur support numérique
                            </li>
                            <li>
                                <img src={Pin} alt="Pin" className="pin" />
                                Se constituer un agenda ou une liste d’adresses
                            </li>
                            <li>
                                <img src={Pin} alt="Pin" className="pin" />
                                Consulter un dictionnaire ou une encyclopédie numérique
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="divider" />

                <h3>Quelques définitions sur l'informatique adapté</h3>
                <ul>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        La synthèse vocale : en cas de très basse vision ou de cécité, un logiciel lit à haute voix les caractères apparaissant à l’écran. Il annonce toutes les commandes accessibles et il permet de relire les textes enregistrés.
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        Les agrandisseurs de caractères : les personnes disposant d’une basse vision qui leur permet de lire des grands caractères, utiliseront des logiciels qui agrandissent aussi bien les textes que les éléments de commande apparaissant à l’écran.
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        L’afficheur braille : pour les baillistres, la connexion d’un afficheur braille à l’ordinateur, à une tablette tactile ou un smartphone, permet de compléter l’information sonore fournie par la synthèse vocale. Le déficient visuel utilisera l’un, l’autre ou les deux systèmes simultanément en fonction des circonstances.
                    </li>
                </ul>

                <div className="divider" />

                <h3>Les clubs nouvelles technologies et informatique adapté</h3>
                <p>
                    Animés par des bénévoles, les clubs sont destinés à apporter aide, soutien et conseils aux déficients visuels.
                </p>
                <p>
                    Les clubs informatiques sont ouverts à toutes les personnes handicapées visuelles désireuses d’acquérir l’autonomie d’écriture, de lecture et de communication que leur offre l’informatique aujourd’hui. L’utilisation d’un ordinateur, dans ses fonctions élémentaires, est à la portée de chacun sans limite d’âge. Il suffit d’en avoir la volonté et de consacrer à son apprentissage le temps nécessaire.
                </p>

                <div className="divider" />

                <h3>Comment se passe une formation ?</h3>
                <p>
                    Les formateurs voyants ou non-voyants des clubs d’informatique, construisent avec vous un programme de formation individualisée en fonction de votre niveau de départ, de vos objectifs, de votre capacité visuelle et de votre disponibilité.
                </p>
                <p>
                    La formation est individuelle et adaptée à la déficience visuelle de chacun. Elle peut s’accompagner d’un soutien à domicile et d’une formation sur votre propre matériel.
                </p>
                <p>
                    Il est nécessaire que le participant souscrive à une inscription auprès du club en question. Celle-ci lui permettra d’accéder aux séances de formation.
                </p>
                <p>
                    Un unique formateur est affecté à chaque participant, avec lequel les différentes séances de formation seront organisées.
                </p>
                <p>
                    Le suivi est entièrement individualisé. En une dizaine de séances, la plupart des stagiaires acquièrent une autonomie satisfaisante dans l’utilisation de l’ordinateur.
                </p>
                <ul>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        Durée de la formation : elle est variable suivant votre niveau de départ, mais comprend en général une dizaine de cours d’une durée de 1h30 à 2 heures.
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        Coût de la formation : les formateurs sont tous bénévoles. Cependant une contribution modeste vous sera demandée pour la participation aux frais (locaux, ordinateurs...)
                    </li>
                </ul>
            </article>
        </main>
    );
}

export default Informatique;