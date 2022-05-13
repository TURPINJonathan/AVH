import React from "react";

import './accessibility.scss';

import Pin from "../../../assets/img/list_style.png"

import loading from '../../../assets/img/page_developping.png';

const Accessibility = () => {
    return (
        <main className="accessibility">
            <h2>L'accessibilité</h2>
            <article>
                <h3>Favoriser l'accessibilité</h3>
                <p>
                    Le terme d’accessibilité recouvre l’accessibilité aux établissements recevant du public, à la voirie, aux transports en commun, aux sports et lieux culturels, à l’enseignement, aux soins et aux outils numériques. Le pôle Accessibilité de l’association Valentin Haüy Caen Calvados mène de nombreuses actions avec des interlocuteurs extérieurs (collectivités territoriales, entreprises, organismes professionnels, …) en vue de favoriser l’accessibilité et permettre un maximum d’autonomie aux personnes déficientes visuelles. Il apporte son expertise en participant à des diagnostics ou à des états des lieux, en collaborant sur l’élaboration de dossiers techniques ou juridiques, et en menant des actions de sensibilisation.
                </p>

                <div className="divider" />

                <h3>L'accessibilité des lieux</h3>
                <p>
                    Se déplacer seul dans la rue, traverser un carrefour, prendre le bus sans être accompagné, circuler dans une gare sans l’aide d’autrui… Cela est simple et naturel pour un adulte « ordinaire », tellement naturel que l’on n’y pense même pas.
                </p>
                <p>
                    Mais ceux d’entre nous que le handicap a contraint à dépendre des autres mesurent la valeur inestimable de ce bien devenu rare : l’autonomie.
                </p>
                <p>
                    L'association Valentin Haüy participe activement à la mise en accessibilité des lieux par les initiatives de son référent "accessibilité" : actions de terrain, participation à des commissions consultatives communales ou départementales ...
                </p>

                <div className="divider" />

                <h3>L'accessibilité numérique</h3>
                <p>
                    L'accessibilité numérique est la mise à la disposition de tous les individus, quels que soient leur matériel ou logiciel, leur infrastructure réseau, leur langue maternelle, leur culture, leur localisation géographique, ou leurs aptitudes physiques ou mentales, des ressources numériques.
                </p>
                <p>
                    Par ressources numériques, il faut entendre notamment :
                </p>
                <ul>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        Les ordinateurs, les logiciels, les sites Internet, les smartphones, les tablettes, les applications mobiles.
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        Les matériels (téléviseurs, box Internet, téléphones, terminaux de paiement, distributeurs automatiques de billets, automates de vente...), ainsi que les équipements professionnels qui de plus en plus comportent une composante numérique.
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        Les documents numériques et les courriels (e-mails)
                    </li>
                </ul>

                <div className="divider" />

                <h3>Les livres audios</h3>
                <p>
                    Le DAISY (Digital Accessible Information System) est un format de livre audio, spécialement conçu pour faciliter la lecture par des personnes déficientes visuelles (aveugles ou malvoyantes). D’autres personnes empêchées de lire des documents imprimés (dyslexiques, handicapés voyants mais ayant du mal à tourner les pages d’un livre) peuvent aussi bénéficier des apports des livres audio au format DAISY.
                </p>
                <p>
                    Les livres audio DAISY sont des livres structurés permettant une navigation aisée à l’intérieur du texte. On parle de livres DAISY pour les livres audio à la norme DAISY, de lecteurs DAISY pour les dispositifs (matériels et/ou logiciels) permettant de lire des livres à la norme DAISY.
                </p>
                <h3>Format et production des livres audio DAISY</h3>
                <p>
                    Les livres audio au format DAISY comportent des fichiers audio (au format MP3) et un fichier de table des matières permettant à l'utilisateur de naviguer aisément dans le document.
                </p>
                <p>
                    Au sein de l’association Valentin Haüy, on distingue deux types de livres au format DAISY :
                </p>
                <img src="https://via.placeholder.com/150" alt="Livre audio DAISY" />
                <h4>Les livres "Daisy audio voix humaine"</h4>
                <p>Les livres Daisy audio voix humaine sont lus par des bénévoles. Une trentaine de donneurs de voix bénévoles travaillent à l 'AVH Caen Calvados.</p>
                <h4>Les livres "Full Daisy voix de synthèse"</h4>
                <p>
                    Les livres Full Daisy voix de synthèse sont lus par une voix synthétique de dernière génération, Manon produite par notre partenaire Acapela Group.
                </p>
                <p>
                    Ils contiennent non seulement la version audio du livre, mais aussi le texte, dont l'affichage est synchronisé avec le son. Il est donc possible d'écouter le livre audio tout en suivant le texte sur un écran ou sur une plage braille. Il est également possible de passer de l'audio au texte en cours de lecture, ou d’effectuer une recherche dans le texte du livre.
                </p>

                <p className="except">Petit guide pour ouvrir les yeux sur les aveugles et les malvoyants (Pdf - 1.04 Mo)</p>
            </article>
        </main>
    );
}

export default Accessibility;