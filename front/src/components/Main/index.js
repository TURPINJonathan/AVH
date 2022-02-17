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
import { ArrowRightCircle, Facebook, Instagram, Twitter, Youtube } from "react-feather";

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
                <h2 className="main-association-title"> Nos missions</h2>
                <div className="main-association-container">
                    <article
                        className="main-association-article"
                        style={{ backgroundImage: `url(${defi_voile})` }}
                    >
                        <aside className="main-association-article-aside">
                            <h3 className="main-association-article-aside-title">Ou nous trouver</h3>

                            <NavLink to="/actualites" className="main-association-article-aside-link">
                                <button className="main-association-article-aside-button">
                                    En savoir plus
                                    <ArrowRightCircle className="main-association-article-aside-content-button-arrow" />
                                </button>
                            </NavLink>
                        </aside>
                    </article>
                    <article
                        className="main-association-article"
                        style={{ backgroundImage: `url(${defi_voile})` }}
                    >
                        <aside className="main-association-article-aside">
                            <h3 className="main-association-article-aside-title">Ou nous trouver</h3>

                            <NavLink to="/actualites" className="main-association-article-aside-link">
                                <button className="main-association-article-aside-button">
                                    En savoir plus
                                    <ArrowRightCircle className="main-association-article-aside-content-button-arrow" />
                                </button>
                            </NavLink>
                        </aside>
                    </article>
                    <article
                        className="main-association-article"
                        style={{ backgroundImage: `url(${defi_voile})` }}
                    >
                        <aside className="main-association-article-aside">
                            <h3 className="main-association-article-aside-title">Ou nous trouver</h3>

                            <NavLink to="/actualites" className="main-association-article-aside-link">
                                <button className="main-association-article-aside-button">
                                    En savoir plus
                                    <ArrowRightCircle className="main-association-article-aside-content-button-arrow" />
                                </button>
                            </NavLink>
                        </aside>
                    </article>
                </div>
            </section>

            {/* PRESIDENT SPEAK */}
            <section className="main-president">
                <div className="main-president-content-img--container">
                    <img className="main-president-content-img" src={president} alt="president" />
                </div>
                <div className="main-president-content">
                    <div className="main-president-content-text">
                        <h4 className="main-president-content-title">Le mot du président</h4>
                        <p className="main-president-content-contentText">
                            De nombreux obstacles se dressent sur la route des personnes déficientes visuelles. De nouveaux territoires seront conquis à force de courage, de persévérance et d'audace…
                        </p>
                        <aside className="main-president-content-sign">
                            <p id="name">Jean Pierre Leclercq</p>
                            <p>Président de l'association Valentin Haüy</p>
                            <p>Caen Calvados</p>
                        </aside>
                    </div>
                </div>
            </section>

            {/* FOLLOW US */}
            <section className="main-follow">
                <h2 className="main-follow-title">Suivez-nous !</h2>
                <div className="main-follow-container">
                    <article className="main-follow-article">
                        <aside className="main-follow-article-aside">
                            <Facebook className="main-follow-article-aside-icon" />
                            <div className="main-follow-article-aside-content">
                                <NavLink to="/actualites" className="main-follow-article-aside-content-link">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Mauris euismod, lectus eget consectetur vehicula,
                                    </p>
                                </NavLink>
                                <NavLink to="/actualites" className="main-follow-article-aside-link">
                                    <p className="main-follow-article-aside-link-text">
                                        suivez-nous sur Facebook
                                    </p>
                                </NavLink>
                            </div>
                        </aside>
                        <aside className="main-follow-article-aside">
                            <Instagram className="main-follow-article-aside-icon" />
                            <div className="main-follow-article-aside-content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris euismod, lectus eget consectetur vehicula,
                                </p>
                                <NavLink to="/actualites" className="main-follow-article-aside-link">
                                    <p className="main-follow-article-aside-link-text">
                                        suivez-nous sur Instagram
                                    </p>
                                </NavLink>
                            </div>
                        </aside>
                        <aside className="main-follow-article-aside">
                            <Twitter className="main-follow-article-aside-icon" />
                            <div className="main-follow-article-aside-content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris euismod, lectus eget consectetur vehicula,
                                </p>
                                <NavLink to="/actualites" className="main-follow-article-aside-link">
                                    <p className="main-follow-article-aside-link-text">
                                        suivez-nous sur Twitter
                                    </p>
                                </NavLink>
                            </div>
                        </aside>
                        <aside className="main-follow-article-aside">
                            <Youtube className="main-follow-article-aside-icon" />
                            <div className="main-follow-article-aside-content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris euismod, lectus eget consectetur vehicula,
                                </p>
                                <NavLink to="/actualites" className="main-follow-article-aside-link">
                                    <p className="main-follow-article-aside-link-text">
                                        suivez-nous sur Youtube
                                    </p>
                                </NavLink>
                            </div>
                        </aside>
                    </article>
                </div>
            </section>
        </main >
    );
};

export default Main;