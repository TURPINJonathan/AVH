import React from "react";

import './mp.scss';

// Import logos
import caenLogo from '../../assets/img/partnership/caen_logo.png';
import carollesLogo from '../../assets/img/partnership/carolles_logo.png';
import decathlonLogo from '../../assets/img/partnership/decathlon_logo.png';
import franceBleuLogo from '../../assets/img/partnership/france_bleu_logo.png';
import keolisLogo from '../../assets/img/partnership/keolis_logo.png';
import lyceeLaplaceLogo from '../../assets/img/partnership/lycee_laplace_logo.jpg';
import mdphLogo from '../../assets/img/partnership/mdph_logo.png';
import pontLevequeLogo from '../../assets/img/partnership/pont_leveque_logo.png';
import regionNormandieLogo from '../../assets/img/partnership/region_normandie_logo.jpg';
import yachtClubLogo from '../../assets/img/partnership/yacht_club_logo.png';

const Mp = () => {
    return (
        <main className="mp">
            <h2>Mécénat et partenariats</h2>
            <section id="mp_section">
                <article className="mp_article">
                    <img src={caenLogo} alt="logo de la ville de Caen" className="mp_img" />
                    <h4 className="mp_name">Ville de Caen</h4>
                </article>
                <article className="mp_article">
                    <img src={carollesLogo} alt="logo de Carolles" className="mp_img" />
                    <h4 className="mp_name">Carolles</h4>
                </article>
                <article className="mp_article">
                    <img src={decathlonLogo} alt="logo de Decathlon" className="mp_img" />
                    <h4 className="mp_name">Decathlon</h4>
                </article>
                <article className="mp_article">
                    <img src={franceBleuLogo} alt="logo de France Bleu Normandie" className="mp_img" />
                    <h4 className="mp_name">France Bleu Normandie</h4>
                </article>
                <article className="mp_article">
                    <img src={keolisLogo} alt="logo de Keolis" className="mp_img" />
                    <h4 className="mp_name">Keolis</h4>
                </article>
                <article className="mp_article">
                    <img src={lyceeLaplaceLogo} alt="logo de Lycée Laplace de Caen" className="mp_img" />
                    <h4 className="mp_name">Lycée Laplace Caen</h4>
                </article>
                <article className="mp_article">
                    <img src={mdphLogo} alt="logo de MDPH Calvados" className="mp_img" />
                    <h4 className="mp_name">M.D.P.H. Calvados</h4>
                </article>
                <article className="mp_article">
                    <img src={pontLevequeLogo} alt="logo de la ville de Pont Lévêque" className="mp_img" />
                    <h4 className="mp_name">Ville de Pont Lévêque</h4>
                </article>
                <article className="mp_article">
                    <img src={regionNormandieLogo} alt="logo de Région Normandie" className="mp_img" />
                    <h4 className="mp_name">Région Normandie</h4>
                </article>
                <article className="mp_article">
                    <img src={yachtClubLogo} alt="logo de Caen Yacht Club" className="mp_img" />
                    <h4 className="mp_name">Caen Yacht Club</h4>
                </article>
            </section>
        </main>
    );
}

export default Mp;