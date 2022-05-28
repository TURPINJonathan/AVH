import React from "react";

import "./footer.scss";

// pictures
import Logo from "../../../assets/img/logo.png";
import { Heart, Mail, MessageCircle, Phone } from "react-feather";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div id="footer">
                <div id="footer__logo">
                    <img src={Logo} alt="logo association Valentin Haüy" />
                </div>
                <div className="footer-content">
                    <p className="footer-content__title">Adresse</p>
                    <p className="footer-content__text">Association Valentin Haüy Caen Calvados</p>
                    <p className="footer-content__text">5 rue Roger Bastion</p>
                    <p className="footer-content__text">14000 Caen</p>
                </div>
                <div className="footer-content">
                    <p className="footer-content__title">Horaires</p>
                    <p className="footer-content__text">Lundi : 10:00 - 12:00 / 14:00 - 17:00</p>
                    <p className="footer-content__text">Mercredi : 10:00 - 12:00 / 14:00 - 17:00</p>
                    <p className="footer-content__text">Vendredi : 14:00 - 17:00</p>
                    <p className="footer-content__text">et sur rendez-vous</p>
                </div>
                <div className="footer-content">
                    <p className="footer-content__title">Contact</p>
                    <p className="footer-content__text"><Phone /> 02 31 85 71 57</p>
                    <p className="footer-content__text"><Phone /> 06 29 36 49 28</p>
                    <p className="footer-content__text"><Mail /> comite.caen@avh.asso.fr</p>
                </div>
                <div className="footer-content">
                    <p className="footer-content__title">Aidez-nous</p>
                    <p className="footer-content__text">Soutenez l'association en faisant un don</p>
                    <NavLink to="/give">
                        <button type="button">
                            <Heart color="white" />
                            <p> Faîtes un don !</p>
                        </button>
                    </NavLink>
                    {/* <p className="footer-content__title">Contactez-nous</p>
                    <p className="footer-content__text">Pour un soutien ou une question</p> */}
                    <NavLink to="/contact">
                        <button type="button">
                            <p> Contactez-nous</p>
                            <MessageCircle color="white" />
                        </button>
                    </NavLink>
                </div>
            </div>
            <div id="legal">
                <p>2022 - Copyright © Association Valentin Haüy Caen Calvados - Tous droits réservés</p>
                <NavLink to="/mentions-legales">Mentions légales</NavLink>
            </div>
        </footer>
    );
};

export default Footer;