import React from "react";

import './main.scss';

// pictures
import defi_voile from "../../assets/img/defi_voile.jpg";
import equipage from "../../assets/img/equipage.png";
import where from "../../assets/img/where.png";
import clap from "../../assets/img/clap.png";
import give from "../../assets/img/give.png";
import president from "../../assets/img/president.jpg";
import { NavLink } from "react-router-dom";
import { ArrowRightCircle } from "react-feather";

const Main = () => {

    return (
        <main className="main">

            {/* Actualités */}
            <section className="main-actuality">
                <div className="main-actuality-content-text">
                    <div className="main-actuality-content">
                        <h2 className="main-actuality-content-title">Actualités</h2>
                        <p className="main-actuality-content-contentText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris euismod, lectus eget consectetur vehicula,
                        </p>
                        <NavLink to="/actualites" className="main-actuality-content-link">
                            <button className="main-actuality-content-button">
                                En savoir plus
                                <ArrowRightCircle className="main-actuality-content-button-arrow" />
                            </button>
                        </NavLink>
                    </div>
                </div>
                <div className="main-actuality-content-img--container">
                    <img className="main-actuality-content-img" src={equipage} alt="defi_voile" />
                </div>
            </section>

            {/* OU NOUS TROUVER, FAIRE UN DON, DEVENIR BENEVOLE */}
            <section className="main-association">
                <div className="main-association__content">
                    <img src={where} alt="Où nous trouver" className="main-association__content__img" />
                    <h3 className="main-association__content__title">
                        Où nous trouver ?
                    </h3>
                    <p className="main-association__content__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                    </p>
                    <NavLink to="/find-us">
                        <button className="main-association__content__button">Voir sur la carte</button>
                    </NavLink>
                </div>
                <div className="main-association__content">
                    <img src={clap} alt="Devenir bénévole" className="main-association__content__img" />
                    <h3 className="main-association__content__title">
                        Devenir bénévole
                    </h3>
                    <p className="main-association__content__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                    </p>
                    <NavLink to="/come">
                        <button className="main-association__content__button">S'engager</button>
                    </NavLink>
                </div>
                <div className="main-association__content">
                    <img src={give} alt="Faire un don" className="main-association__content__img" />
                    <h3 className="main-association__content__title">
                        Faire un don
                    </h3>
                    <p className="main-association__content__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                    </p>
                    <NavLink to="/give">
                        <button className="main-association__content__button">Faire un don</button>
                    </NavLink>
                </div>

            </section>

            <section className="main-president">
                <h2 id="actuality-title">Le mot du président</h2>
                <div className="main-president__content">
                    <img src={president} alt="Le mot du président" className="main-president__content__img" />
                    <p>
                        De nombreux obstacles se dressent sur la route des personnes déficientes visuelles. De nouveaux territoires seront conquis à force de courage, de persévérance et d'audace…
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Main;