import React, { useEffect } from "react";

import './actuality.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/fontawesome-free-solid'

import loading from '../../assets/img/page_developping.png';
import defi_voile from "../../assets/img/defi_voile.jpg";
import { Link } from "react-router-dom";

const Actuality = ({ loadActuality, actuality }) => {
    useEffect(() => {
        loadActuality();
        console.log(loadActuality());
    }, []);
    return (
        <main className="actuality">
            <h2>Actualités</h2>
            <div className="actuality_content">
                {/* //TODO A METTRE EN PLACE EN V1.1
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
                </section> */}
                {/* <section className="actuality_section">
                    {actuality.map(actu => (
                        <article className="actuality_article" key={actu.id}>
                            <h4>{actu.titre}</h4>
                            <img className="actuality_picture" src={defi_voile} alt="defi voile" />
                            <p className="actuality_overview">{actu.overview}</p>
                            <Link to={`/actualites/${actu.url}`} className="actuality_link">
                                <input className="actuality_button" type="button" value="Lire la suite" />
                            </Link>
                        </article>
                    ))}
                    <article className="actuality_article">
                        <h4>13ème édition de la Norland's Cup</h4>
                        <img className="actuality_picture" src={defi_voile} alt="defi voile" />
                        <p className="actuality_overview">La 13ème édition de la Norlanda's Cup approche à grands pas ...
                        </p>
                        <Link to="/actualites/norlanda_cup_2022" className="actuality_link">
                            <input className="actuality_button" type="button" value="Lire la suite" />
                        </Link>
                    </article>
                </section> */}
            </div>
        </main>
    );
}

export default Actuality;