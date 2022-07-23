import React, { useEffect } from "react";
import PropTypes from "prop-types";

// STYLE
import './mp.scss';

// URL
import { picture } from "../../data";

const Mp = ({ loadPartner, partner }) => {
    useEffect(() => {
        loadPartner();
    }, []);
    return (
        <main className="mp">
            <h2>Mécénat et partenariats</h2>
            <section id="mp_section">
                {partner.map((partner) => {
                    if (partner.actif === true && partner.primaire === true) {
                        return (
                            <article key={partner.id} className="mp_article">
                                <a href={partner.url} target="_blanck" rel="noopener noreferrer">
                                    <img src={picture + 'partenaire_image/' + partner.file} alt={partner.liseuse} className="mp_img" />
                                    <h4 className="mp_name">{partner.nom}</h4>
                                </a>
                            </article>
                        )
                    }
                })}
                {partner.map((partner) => {
                    if (partner.actif === true && (partner.primaire === false || partner.primaire === null)) {
                        return (
                            <article key={partner.id} className="mp_article">
                                <a href={partner.url} target="_blanck" rel="noopener noreferrer">
                                    <img src={picture + 'partenaire_image/' + partner.file} alt={partner.liseuse} className="mp_img" />
                                    <h4 className="mp_name">{partner.nom}</h4>
                                </a>
                            </article>
                        )
                    }
                })}
            </section>
        </main>
    );
}

Mp.propTypes = {
    loadPartner: PropTypes.func.isRequired,
    partner: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nom: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            file: PropTypes.string.isRequired,
            actif: PropTypes.bool.isRequired,
            imageFile: PropTypes.string,
            liseuse: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
};
export default Mp;