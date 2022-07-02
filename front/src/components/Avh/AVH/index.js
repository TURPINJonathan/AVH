import React, { useEffect } from "react";

// STYLE
import './avh.scss';

// PICTURES
import Pin from "../../../assets/img/list_style.png"

const AVH = ({ loadNational, national }) => {
    useEffect(() => {
        loadNational();
    }, []);
    // const benevoles = national[0].nb_benevoles;
    // console.log(benevoles);

    return (
        <main className="avh">
            <h2>Présentation de l'AVH</h2>
            <section className="avh__presentation">
                <p>
                    Acteur historique de l’aide aux personnes déficientes visuelles, l’association Valentin Haüy, créée en 1889 par Maurice de La Sizeranne et reconnue d’utilité publique en 1891, déploie depuis plus de 130 ans un grand nombre de services et d’actions à travers toute la France afin de :
                </p>
                <ul>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        défendre les droits des déficients visuels
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        assurer leur formation et l’accès à l’emploi

                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        restaurer et développer leur autonomie

                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        promouvoir l’accès à l’écrit

                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        proposer des activités culturelles, sportives et de loisirs accessibles

                    </li>
                </ul>
                <p>
                    Depuis plus de 130 ans, l'association Valentin Haüy poursuit l'objectif de son fondateur en s’appuyant sur ses nombreuses implantations locales, ses établissements et ses services adaptés pour répondre au mieux aux besoins des personnes déficientes visuelles.
                </p>
            </section>
            <section className="avh__stat">
                <div className="avh__stat__item">
                    <span className="stat__item-number">3485</span>
                    <span className="stat__item-category">Bénévoles</span>
                </div>
                <div className="avh__stat__item">
                    <span className="stat__item-number">571</span>
                    <span className="stat__item-category">Salariés</span>
                </div>
                <div className="avh__stat__item">
                    <span className="stat__item-number">120</span>
                    <span className="stat__item-category">Implantations locales</span>
                </div>
            </section>
            <section className="avh__button">
                <p>Pour en savoir plus</p>
                <a className="avh__button-link" href="https://www.avh.asso.fr" target="_blank" rel="noopener noreferrer">AVH</a>
            </section>

        </main>
    );
}

export default AVH;