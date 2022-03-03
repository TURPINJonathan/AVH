import React from "react";
import { Link, NavLink } from "react-router-dom";
import './paris.scss';

const Paris = () => {
    return (
        <main className="paris">
            <h2>Présentation de l'AVH Paris</h2>
            <section className="paris__presentation">
                <p>
                    Acteur historique de l’aide aux personnes déficientes visuelles, l’association Valentin Haüy, créée en 1889 par Maurice de La Sizeranne et reconnue d’utilité publique en 1891, déploie depuis plus de 130 ans un grand nombre de services et d’actions à travers toute la France afin de :
                </p>
                <ul>
                    <li>défendre les droits des déficients visuels</li>
                    <li>assurer leur formation et l’accès à l’emploi</li>
                    <li>restaurer et développer leur autonomie</li>
                    <li>promouvoir l’accès à l’écrit</li>
                    <li>proposer des activités culturelles, sportives et de loisirs accessibles</li>
                </ul>
                <img src="https://via.placeholder.com/728x90.png" alt="Paris" />
                <p>
                    Depuis plus de 130 ans, l'association Valentin Haüy poursuit l'objectif de son fondateur en s’appuyant sur ses nombreuses implantations locales, ses établissements et ses services adaptés pour répondre au mieux aux besoins des personnes déficientes visuelles.
                </p>
            </section>
            <section className="paris__stat">
                <div className="paris__stat__item">
                    <span className="stat__item-number">3485</span>
                    <span className="stat__item-category">Bénévoles</span>
                </div>
                <div className="paris__stat__item">
                    <span className="stat__item-number">571</span>
                    <span className="stat__item-category">Salariés</span>
                </div>
                <div className="paris__stat__item">
                    <span className="stat__item-number">120</span>
                    <span className="stat__item-category">Implantations locales</span>
                </div>
            </section>
            <section className="paris__button">
                <p>Pour en savoir plus</p>
                <a className="paris__button-link" href="https://www.avh.asso.fr" target="_blank" rel="noopener noreferrer">AVH Paris</a>
            </section>

        </main>
    );
}

export default Paris;