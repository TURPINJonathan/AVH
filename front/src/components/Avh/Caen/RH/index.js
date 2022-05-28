import React from "react";

import './rh.scss';

// pictures
import President from "../../../../assets/img/president.jpg";
import Logo from "../../../../assets/img/logo.png";

//photos
import jeanPierreLeclercq from "../../../../assets/img/desk/jeanPierreLeclercq.jpg";
import josianePacary from "../../../../assets/img/desk/josianePacary.jpg";
import damienGuillemette from "../../../../assets/img/desk/damienGuillemette.jpg";
import francoiseThomas from "../../../../assets/img/desk/francoiseThomas.jpg";
import maryseLesur from "../../../../assets/img/desk/maryseLesur.jpg";
import lylianeAtte from "../../../../assets/img/desk/lylianeAtte.jpg";

const Rh = () => {
    return (
        <main className="rh">
            <h2>Nos ressources humaines</h2>
            <h3>Membres du Bureau du Comité de CAEN CALVADOS</h3>
            <section>
                <article className="rh-left">
                    <div className="img-container">
                        <img src={jeanPierreLeclercq} alt="Jean Pierre LECLERCQ, président de l'association Valentin Haüy Caen Calvados" />
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
                        <img src={josianePacary} alt="Josiane PACARY, responsable braille de l'association Valentin Haüy Caen Calvados" />
                    </div>
                    <aside>
                        <p className="name">Josiane PACARY</p>
                        <p className="function">Responsable braille</p>
                        <a href="jpacary@avhcaen.fr" className="mail">jpacary@avhcaen.fr</a>
                        <p className="phone">06 09 07 89 05</p>
                    </aside>
                </article>
            </section>
            <section className="desk-orange">
                <article className="rh-right">
                    <aside>
                        <p className="name">Françoise THOMAS</p>
                        <p className="function">Responsable administratif</p>
                        <a href="fthomas@avhcaen.fr" className="mail">fthomas@avhcaen.fr</a>
                        <p className="phone">06 15 30 88 96</p>
                    </aside>
                    <div className="img-container">
                        <img src={francoiseThomas} alt="Françoise THOMAS, responsable administrative de l'association Valentin Haüy Caen Calvados" />
                    </div>
                </article>
                <article className="rh-left">
                    <div className="img-container">
                        <img src={Logo} alt="Nicolas FORTIN, responsable informatique adapté de l'association Valentin Haüy Caen Calvados" />
                    </div>
                    <aside>
                        <p className="name">Nicolas FORTIN</p>
                        <p className="function">Responsable informatique adapté</p>
                        <a href="nfortin@avhcaen.fr" className="mail">nfortin@avhcaen.fr</a>
                        <p className="phone">06 59 73 18 32</p>
                    </aside>
                </article>
            </section>
            <section className="desk-violet">
                <article className="rh-right">
                    <aside>
                        <p className="name">Mickaël AUBERT</p>
                        <p className="function">Responsable accessibilité</p>
                        <a href="maubert@avhcaen.fr" className="mail">maubert@avhcaen.fr</a>
                        <p className="phone">06 82 29 16 04</p>
                    </aside>
                    <div className="img-container">
                        <img src={Logo} alt="Mickaël AUBERT, responsable accessibilité de l'association Valentin Haüy Caen Calvados" />
                    </div>
                </article>
                <article className="rh-left">
                    <div className="img-container">
                        <img src={damienGuillemette} alt="Damien GUILLEMETTE, responsable matériel adapté de l'association Valentin Haüy Caen Calvados" />
                    </div>
                    <aside>
                        <p className="name">Damien GUILLEMETTE</p>
                        <p className="function">Responsable matériel adapté</p>
                        <a href="dguillemette@avhcaen.fr" className="mail">dguillemette@avhcaen.fr</a>
                        <p className="phone">06 33 99 71 02</p>
                    </aside>
                </article>
            </section>
            <section className="desk-orange">
                <article className="rh-right">
                    <aside>
                        <p className="name">Lyliane ATTE</p>
                        <p className="function">Responsable communication</p>
                        <a href="latte@avhcaen.fr" className="mail">latte@avhcaen.fr</a>
                        <p className="phone">06 29 99 35 76</p>
                    </aside>
                    <div className="img-container">
                        <img src={lylianeAtte} alt="Lyliane ATTE, responsable communication de l'association Valentin Haüy Caen Calvados" />
                    </div>
                </article>
                <article className="rh-left">
                    <div className="img-container">
                        <img src={maryseLesur} alt="Maryse LESUR, responsable accueil de l'association Valentin Haüy Caen Calvados" />
                    </div>
                    <aside>
                        <p className="name">Maryse LESUR</p>
                        <p className="function">Responsable accueil</p>
                        <a href="mlesur@avhcaen.fr" className="mail">mlesur@avhcaen.fr</a>
                        <p className="phone">02 31 85 71 57</p>
                    </aside>
                </article>
            </section>
            <section className="desk-violet">
                <article className="rh-right">
                    <aside>
                        <p className="name">Catherine BONDERLIANG</p>
                        <p className="function">Secrétaire</p>
                        {/* <a href="fthomas@avhcaen.fr" className="mail">fthomas@avhcaen.fr</a>
                        <p className="phone">06 15 30 88 96</p> */}
                    </aside>
                    <div className="img-container">
                        <img src={Logo} alt="Catherine BONDERLIANG, secrétaire de l'association Valentin Haüy Caen Calvados" />
                    </div>
                </article>
            </section>

        </main>
    );
}

export default Rh;