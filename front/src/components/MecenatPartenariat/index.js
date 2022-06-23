import React, { useEffect } from "react";

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
                    if (partner.actif === true) {
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

export default Mp;