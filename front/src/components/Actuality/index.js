import React from "react";

import './actuality.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/fontawesome-free-solid'

import loading from '../../assets/img/page_developping.png';
import defi_voile from "../../assets/img/defi_voile.jpg";

const Actuality = () => {
    return (
        <main className="actuality">
            <h2>Actualités</h2>
            <div className="actuality_content">
                <section className="search">
                    <div className="search_section">
                        <h5>Rechercher</h5>
                        <input type="text" placeholder="Rechercher" />
                    </div>
                    <div className="search_section">
                        <h5>Catégories</h5>
                        <select>
                            <option value="">Toutes</option>
                            <option value="">Sport</option>
                            <option value="">Art</option>
                            <option value="">&Eacute;vènement</option>
                        </select>
                    </div>
                    <div className="search_section">
                        <h5>Posts récents</h5>
                        <ul>
                            <li>
                                <a href="#" target="_blanck">
                                    <p><FontAwesomeIcon icon={faChevronRight} /> 13ème édition de la Norlanda's Cup</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blanck">
                                    <p><FontAwesomeIcon icon={faChevronRight} /> Le tir à l'arc</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blanck">
                                    <p><FontAwesomeIcon icon={faChevronRight} /> Le Showdown</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="actuality_section">
                    <article className="actuality_article">
                        <h4>Titre</h4>
                        <img className="actuality_picture" src={defi_voile} alt="defi voile" />
                        <p className="actuality_overview">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu iaculis massa, nec congue ligula. Sed facilisis semper felis. Ut.
                        </p>
                        <input className="actuality_button" type="button" value="Lire la suite" />
                    </article>
                    <article className="actuality_article">
                        <h4>Titre</h4>
                        <img className="actuality_picture" src={defi_voile} alt="defi voile" />
                        <p className="actuality_overview">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu iaculis massa, nec congue ligula. Sed facilisis semper felis. Ut.
                        </p>
                        <input className="actuality_button" type="button" value="Lire la suite" />
                    </article>
                    <article className="actuality_article">
                        <h4>Titre</h4>
                        <img className="actuality_picture" src={defi_voile} alt="defi voile" />
                        <p className="actuality_overview">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu iaculis massa, nec congue ligula. Sed facilisis semper felis. Ut.
                        </p>
                        <input className="actuality_button" type="button" value="Lire la suite" />
                    </article>
                    <article className="actuality_article">
                        <h4>Titre</h4>
                        <img className="actuality_picture" src={defi_voile} alt="defi voile" />
                        <p className="actuality_overview">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu iaculis massa, nec congue ligula. Sed facilisis semper felis. Ut.
                        </p>
                        <input className="actuality_button" type="button" value="Lire la suite" />
                    </article>
                    <article className="actuality_article">
                        <h4>Titre</h4>
                        <img className="actuality_picture" src={defi_voile} alt="defi voile" />
                        <p className="actuality_overview">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu iaculis massa, nec congue ligula. Sed facilisis semper felis. Ut.
                        </p>
                        <input className="actuality_button" type="button" value="Lire la suite" />
                    </article>
                    <article className="actuality_article">
                        <h4>Titre</h4>
                        <img className="actuality_picture" src={defi_voile} alt="defi voile" />
                        <p className="actuality_overview">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu iaculis massa, nec congue ligula. Sed facilisis semper felis. Ut.
                        </p>
                        <input className="actuality_button" type="button" value="Lire la suite" />
                    </article>
                    <article className="actuality_article">
                        <h4>Titre</h4>
                        <img className="actuality_picture" src={defi_voile} alt="defi voile" />
                        <p className="actuality_overview">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu iaculis massa, nec congue ligula. Sed facilisis semper felis. Ut.
                        </p>
                        <input className="actuality_button" type="button" value="Lire la suite" />
                    </article>
                    <article className="actuality_article">
                        <h4>Titre</h4>
                        <img className="actuality_picture" src={defi_voile} alt="defi voile" />
                        <p className="actuality_overview">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu iaculis massa, nec congue ligula. Sed facilisis semper felis. Ut.
                        </p>
                        <input className="actuality_button" type="button" value="Lire la suite" />
                    </article>
                </section>
            </div>
        </main>
    );
}

export default Actuality;