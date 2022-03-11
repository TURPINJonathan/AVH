import React from "react";

import './rh.scss';

// pictures
import President from "../../../../assets/img/president.jpg";
import Logo from "../../../../assets/img/logo.png";

const Rh = () => {
    return (
        <main className="rh">
            <h2>Nos ressources humaines</h2>
            <h3>Membres du Bureau du Comité de CAEN CALVADOS</h3>
            <section>
                <article className="rh-left">
                    <div className="img-container">
                        <img src={Logo} alt="Jean Pierre LECLERCQ, président de l'association Valentin Haüy Caen Calvados" />
                    </div>
                    <aside>
                        <p className="name">Jean-Pierre LECLERCQ</p>
                        <p className="function">Président</p>
                        <a href="president.caen@avh.asso.fr" className="mail">president.caen@avh.asso.fr</a>
                        <p className="phone">06 29 36 49 28</p>
                    </aside>
                </article>
            </section>
            <section className="desk-violet">
                <article className="rh-right">
                    <aside>
                        <p className="name">Phavady AUK</p>
                        <p className="function">Trésorière / Comptable</p>
                        <a href="pauk@avhcaen.fr" className="mail">pauk@avhcaen.fr</a>
                        {/* <p className="phone">06 29 36 49 28</p> */}
                    </aside>
                    <div className="img-container">
                        <img src={Logo} alt="Phavady AUK, trésorière et comptable de l'association Valentin Haüy Caen Calvados" />
                    </div>
                </article>
                <article className="rh-left">
                    <div className="img-container">
                        <img src={Logo} alt="Josiane PACARY, responsable braille de l'association Valentin Haüy Caen Calvados" />
                    </div>
                    <aside>
                        <p className="name">Josiane PACARY</p>
                        <p className="function">Responsable braille</p>
                        <a href="jpacary@avhcaen.fr" className="mail">jpacary@avhcaen.fr</a>
                        <p className="phone">06 09 07 89 05</p>
                    </aside>
                </article>
            </section>

        </main>
    );
}

export default Rh;