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

const Main = () => {

    return (
        <main className="main">

            {/* Actualités */}
            <section className="main-actuality">
                <h2 id="actuality-title">Actualités</h2>
                <div className="main-actuality__content">
                    <div className="main-actuality__content__item">
                        <img src={defi_voile} alt="defi voile" className="main-actuality__content__item__img" />
                        <div className="main-actuality__content__item__text">
                            <h3 className="main-actuality__content__item__text__title">
                                Défi de voile
                            </h3>
                            <p className="main-actuality__content__item__text__desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </p>
                        </div>
                    </div>
                    <div className="main-actuality__content__item">
                        <img src={equipage} alt="equipage" className="main-actuality__content__item__img" />
                        <div className="main-actuality__content__item__text">
                            <h3 className="main-actuality__content__item__text__title">
                                Défi de voile
                            </h3>
                            <p className="main-actuality__content__item__text__desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </p>
                        </div>
                    </div>
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