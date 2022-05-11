import React from "react";

import './sensibilisation.scss';
import Pin from "../../../assets/img/list_style.png"

import loading from '../../../assets/img/page_developping.png';

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
                        Module de présentation du handicap visuel pour tout public ;
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        Module de prise en charge et accompagnement d’une personne déficiente visuelle au travail, dans un service de santé, une maison de retraite, pour une aide à domicile…
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        Module de présentation et formation à l’usage de matériels adaptés
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        Module de sensibilisation à l’accessibilité numérique
                    </li>
                </ul>

            </article>
        </main>
    );
}

export default Sensibilitation;