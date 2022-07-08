import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import PropTypes from "prop-types";

// STYLE
import './actuality.scss';

// URL
import { picture } from "../../data";

const Actuality = ({ loadActuality, actuality }) => {
    useEffect(() => {
        loadActuality();
    }, []);

    const actualitySort = actuality.sort((first, last) => {
        return new Date(last.createdAt) - new Date(first.createdAt);
    });
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
                <section className="actuality_section">
                    {actualitySort.map(actu => (
                        <article className="actuality_article" key={actu.id}>
                            <h4>{actu.titre}</h4>
                            <img className="actuality_picture" src={picture + 'actualite_image/' + actu.file} alt="defi voile" />
                            <p className="actuality_overview">{actu.overview}</p>
                            <Link to={`/actualites/${actu.url}`} className="actuality_link">
                                <input className="actuality_button" type="button" value="Lire la suite" />
                            </Link>
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
}

Actuality.propTypes = {
    loadActuality: PropTypes.func.isRequired,
    actuality: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            titre: PropTypes.string.isRequired,
            sous_titre: PropTypes.string,
            lieu: PropTypes.string,
            overview: PropTypes.string.isRequired,
            paragraphe1: PropTypes.string.isRequired,
            paragraphe2: PropTypes.string,
            paragraphe3: PropTypes.string,
            focus: PropTypes.bool.isRequired,
            liseuse: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            aside: PropTypes.bool.isRequired,
            createdAt: PropTypes.string.isRequired,
            updatedAt: PropTypes.string,
            categorie: PropTypes.array,
            tag: PropTypes.string,
            file: PropTypes.string.isRequired,
            imageFile: PropTypes.string,
            file2: PropTypes.string,
            imageFile2: PropTypes.string,
            file3: PropTypes.string,
            imageFile3: PropTypes.string,
            liseuse2: PropTypes.string,
            liseuse3: PropTypes.string,
            youtube: PropTypes.string,
            // User: PropTypes.objectOf(
            //     PropTypes.shape({
            //         id: PropTypes.number.isRequired,
            //         nom: PropTypes.string.isRequired,
            //         prenom: PropTypes.string.isRequired,
            //         email: PropTypes.string.isRequired,
            //         fonction: PropTypes.string.isRequired,
            //     }).isRequired
            // ).isRequired,
        }).isRequired,
    ).isRequired,
};

export default Actuality;