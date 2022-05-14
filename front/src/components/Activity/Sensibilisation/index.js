import React from "react";

import './sensibilisation.scss';
import Pin from "../../../assets/img/list_style.png"
import Orange from "../../../assets/img//partnership/orange_logo.png"
import Keolis from "../../../assets/img//partnership/keolis_logo.png"
import Tramway from "../../../assets/sensibilisation/tramway.jpg"

const Sensibilitation = () => {
    return (
        <main className="sensibilisation">
            <h2>La sensibilisation</h2>
            <article>
                <p>
                    Vous souhaitez en savoir plus sur la déficience visuelle, ses causes, les impacts sur la vie des personnes concernées, comment se comporter vis-à-vis d’un(e) proche, d’un(e) collègue ou client(e) atteint(e) de ce handicap, les moyens de compensation existant ?...
                </p>
                <div className="sensibilisation_picture">
                    <img src="https://via.placeholder.com/150" alt="Déficient visuel apprenant le braille" />
                    <img src="https://via.placeholder.com/150" alt="Déficient visuel utilisant une canne pour s'orienter" />
                </div>
                <p>
                    L’Association Valentin HAÜY Caen Calvados, avec les aveugles et les malvoyants, s’est justement fixée le but de favoriser l’autonomie et l’accessibilité des personnes déficientes visuelles au quotidien.
                </p>
                <p>
                    Elle a fait le constat que le handicap visuel est encore trop mal connu et trop imparfaitement pris en compte dans notre pays et qu’il y a encore beaucoup à faire pour faciliter l’intégration des personnes aveugles et malvoyantes dans tous les champs de la vie : l’éducation, l’emploi, la santé, la vie sociale et culturelle, la citoyenneté…
                </p>
                <p>
                    C’est pourquoi, grâce à l’expérience qu’elle a acquise dans le cadre de ses différentes activités, l’Association Valentin HAÜY au travers de son agrément d’organisme de sensibilisation, propose à toute structure du secteur public ou du secteur privé, plusieurs modules de sensibilisation et de formation au handicap visuel :
                </p>
                <ul>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        <p>Module de présentation du handicap visuel pour tout public</p>
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        <p>Module de prise en charge et accompagnement d’une personne déficiente visuelle au travail, dans un service de santé, une maison de retraite, pour une aide à domicile…</p>
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        <p>Module de présentation et formation à l’usage de matériels adaptés</p>
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        <p>Module de sensibilisation à l’accessibilité numérique</p>
                    </li>
                </ul>
                <img src={Tramway} alt="Déficient visuel dans le tramway" />
                <p>
                    Toutes ces sensibilisations étant bien entendu adaptables selon les besoins de votre établissement, entreprise ou service, ses spécificités, dans le cadre de votre activité professionnelle ou de votre environnement urbain...
                </p>
                <p>
                    Kéolis Caen et Orange nous ont fait confiance.
                </p>
                <div className="sensibilisation_picture">
                    <img src={Orange} alt="logo KEOLIS" />
                    <img src={Keolis} alt="logo ORANGE" />
                </div>
                <p>
                    Le catalogue des sensibilisations peut vous être envoyé par mail sur simple demande.
                </p>
            </article>
        </main>
    );
}

export default Sensibilitation;