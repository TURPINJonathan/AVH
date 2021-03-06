import React, { useEffect, useRef, useState } from "react";

// STYLES
import "./header.scss";
import "./nav.scss";
import './burger.scss';

// PICTURES
import Logo from "../../../assets/img/logo.png";
import { ChevronDown, ChevronUp, Facebook, Instagram, Linkedin, Mail, Twitter, Youtube } from "react-feather";

// FUNCTIONS
import dropdown from "../../../functions/dropdown";
import { Link, NavLink } from "react-router-dom";

// TODO: add Human Ressources && volunteers on burger menu

const Header = () => {

    const activity = useRef(null);
    const avhDropdown = useRef(null);
    const sell = useRef(null);

    const [isOpen, setIsOpen] = useState(false);
    const [avhIsOpen, setAvhIsOpen] = useState(false);
    const [activityIsOpen, setActivityIsOpen] = useState(false);
    const [sellIsOpen, setSellIsOpen] = useState(false);

    const [listening, setListening] = useState(false);

    useEffect(dropdown(listening, setListening, activity, avhDropdown, sell, setSellIsOpen, setAvhIsOpen, setActivityIsOpen), [setActivityIsOpen, setAvhIsOpen]);

    return (
        <header id="header">
            <div id="header-social">
                <div id="header-main__join">
                    <button id="join-button" className="join-click" href="https://www.avh.asso.fr/fr/lassociation/devenir-benevole-ou-mecenat-de-competences#:~:text=L'association%20Valentin%20Ha%C3%BCy%2C%20pr%C3%A9sente,au%20sein%20de%20l'association." target="_blank" rel="noreferrer">Devenir bénévole</button>
                    <button id="donate-button" className="join-click" href="https://sensibiliser.avh.asso.fr/campagne-2018/" target="_blank" rel="noreferrer">Faites un don</button>
                </div>
                <div id="header-social__icons">
                    <a href="https://www.facebook.com/avhcaen" target="_blank" rel="noreferrer">
                        <Facebook className="header-social__item" color="white" />
                    </a>
                    <a href="https://twitter.com/avhcaen" target="_blank" rel="noreferrer">
                        <Twitter className="header-social__item" color="white" />
                    </a>
                    {/* <Youtube className="header-social__item" color="white" /> */}
                    <a href="https://www.instagram.com/avhcaen" target="_blank" rel="noreferrer">
                        <Instagram className="header-social__item" color="white" />
                    </a>
                    {/* <Linkedin className="header-social__item" color="white" /> */}
                    <a href="mailto: comite.caen@avh.asso.fr" alt="email de l'association Valentin Haüy">
                        <Mail className="header-social__item" color="white" />
                    </a>
                </div>
            </div>
            <section id="header-main">
                <div id="header-main-main">
                    <div id="header-main__logo">
                        <NavLink to="/">
                            <img src={Logo} alt="logo association Valentin Haüy" />
                        </NavLink>
                    </div>
                    <div id="header-main__title">
                        <p id="title-assoc">Association</p>
                        <h1 id="title-vh">Valentin Haüy</h1>
                        <p id="title-cc">Caen Calvados</p>
                        <p id="title-orga">Organisation à but non lucratif</p>
                    </div>
                    <div id="header-main__join">
                        <a href="https://www.avh.asso.fr/fr/lassociation/devenir-benevole-ou-mecenat-de-competences#:~:text=L'association%20Valentin%20Ha%C3%BCy%2C%20pr%C3%A9sente,au%20sein%20de%20l'association." target="_blank" rel="noreferrer" >
                            <button id="join-button" className="join-click">Devenir bénévole</button>
                        </a>
                        <a href="https://sensibiliser.avh.asso.fr/campagne-2018/" target="_blank" rel="noreferrer" >
                            <button id="donate-button" className="join-click">Faites un don</button>
                        </a>
                    </div>
                </div>
                <div id="header-main__bg" />
            </section>
            <nav id="header-nav">
                <ul>
                    <li
                        onMouseEnter={() => setAvhIsOpen(true)}
                        onMouseLeave={() => setAvhIsOpen(false)}
                        ref={avhDropdown}
                    >
                        <span>
                            {avhIsOpen
                                &&
                                <ChevronUp className="arrow" />
                            }
                            {!avhIsOpen
                                &&
                                <ChevronDown className="arrow" />
                            }
                        </span>
                        <p>Association Valentin Haüy</p>
                        <span>
                            {avhIsOpen
                                &&
                                <ChevronUp className="arrow" />
                            }
                            {!avhIsOpen
                                &&

                                <ChevronDown className="arrow" />
                            }
                        </span>
                        {avhIsOpen
                            &&
                            <ul className="subnav">
                                <li className="subnav-link">
                                    <NavLink
                                        to="/AVH"
                                    >
                                        Présentation de l'AVH
                                    </NavLink>
                                </li>
                                <li className="subnav-link">
                                    <NavLink
                                        to="/history"
                                    >
                                        Notre histoire
                                    </NavLink>
                                </li>
                                <ul className="subnav-link AVHCC">
                                    <span>
                                        <NavLink
                                            to="/caen/AVH"
                                        >
                                            AVH Caen Calvados
                                        </NavLink>
                                    </span>
                                    <li className="subsubnav-link">
                                        <NavLink
                                            to="/caen/rh"
                                        >
                                            Nos ressources humaines
                                        </NavLink>
                                    </li>
                                    <li className="subsubnav-link">
                                        <NavLink
                                            to="/caen/benevoles"
                                        >
                                            Bénévoles
                                        </NavLink>
                                    </li>
                                </ul>
                            </ul>
                        }
                    </li>
                    <li>
                        <NavLink to="/actualites">Actualités</NavLink>
                    </li>
                    <li
                        onMouseEnter={() => setActivityIsOpen(true)}
                        onMouseLeave={() => setActivityIsOpen(false)}
                        ref={activity}
                    >
                        <span>
                            {activityIsOpen
                                &&
                                <ChevronUp className="arrow" />
                            }
                            {!activityIsOpen
                                &&
                                <ChevronDown className="arrow" />
                            }
                        </span>
                        <p>Activités</p>
                        <span>
                            {activityIsOpen
                                &&
                                <ChevronUp className="arrow" />
                            }
                            {!activityIsOpen
                                &&
                                <ChevronDown className="arrow" />
                            }
                        </span>
                        {activityIsOpen
                            &&
                            <ul className="subnav">
                                <li className="subnav-link">
                                    <NavLink to="/activites/braille">Le braille</NavLink>
                                </li>
                                <li className="subnav-link">
                                    <NavLink to="/activites/informatique">L'informatique adapté</NavLink>
                                </li>
                                <li className="subnav-link">
                                    <NavLink to="/activites/accessibility">L'accessibilité</NavLink>
                                </li>
                                <li className="subnav-link">
                                    <NavLink to="/activites/sensibilisation"> La sensibilisation</NavLink>
                                </li>
                                <li className="subnav-link">
                                    <NavLink to="/activites/cls">Culture loisirs et sport</NavLink>
                                </li>
                            </ul>
                        }
                    </li>
                    <li>
                        <NavLink to="/mecenat-partenariat">Mécénat & Partenariat</NavLink>
                    </li>

                    <li>
                        <a href="https://magasin.avh.asso.fr/" target="_blank" rel="noreferrer">La boutique</a>
                        {/* <NavLink to="/boutique/catalogue">La boutique</NavLink> */}
                    </li>
                    {/*
                    <li
                        onMouseEnter={() => setSellIsOpen(true)}
                        onMouseLeave={() => setSellIsOpen(false)}
                        ref={sell}
                    >
                        
                        <span>
                            {sellIsOpen
                                &&
                                <ChevronUp className="arrow" />
                            }
                            {!sellIsOpen
                                &&
                                <ChevronDown className="arrow" />
                            }
                        </span>
                        <p>La boutique</p>
                         <span>
                            {sellIsOpen
                                &&
                                <ChevronUp className="arrow" />
                            }
                            {!sellIsOpen
                                &&
                                <ChevronDown className="arrow" />
                            }
                        </span>
                        {sellIsOpen
                            &&
                            <ul className="subnav">
                                <li className="subnav-link">
                                    <NavLink to="/boutique/catalogue">Le catalogue</NavLink>
                                </li>
                                <li className="subnav-link">
                                    <NavLink to="/boutique/materiel">Matériel</NavLink>
                                </li>
                            </ul>
                        } 
                    </li>
                    */}
                </ul>
            </nav>
            <div id="header-nav-mobile">
                <input id="burger" type="checkbox" className="burger-check" checked={isOpen} onClick={() => setIsOpen(!isOpen)} />

                <label for="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <nav>
                    <div id="header-nav__join">
                        <button id="join-button" className="join-click" src="#">Devenir bénévole</button>
                        <button id="donate-button" className="join-click" src="#">Faites un don</button>
                    </div>
                    <ul
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <li className="burger-title">
                            Association Valentin Haüy
                            <NavLink
                                to="/AVH"
                                className="burger-subTitle"
                            >
                                Présentation de l'AVH
                            </NavLink>
                            <NavLink
                                to="/history"
                                className="burger-subTitle"
                            >
                                Notre histoire
                            </NavLink>
                            <NavLink
                                to="/caen/AVH"
                                className="burger-subTitle"
                            >
                                AVH Caen Calvados
                            </NavLink>
                            <NavLink
                                to="/caen/rh"
                                className="burger-subTitle"
                            >
                                Nos ressources humaines
                            </NavLink>
                            <NavLink
                                to="/caen/benevoles"
                                className="burger-subTitle"
                            >
                                Bénévoles
                            </NavLink>
                        </li>
                        <li className="burger-title">
                            <NavLink
                                to="/actualites"
                                className="burger-title"
                            >
                                Actualités
                            </NavLink>
                        </li>
                        <li className="burger-title">
                            Activités
                            <NavLink
                                to="/activites/braille"
                                className="burger-subTitle"
                            >
                                Le Braille
                            </NavLink>
                            <NavLink
                                to="/activites/informatique"
                                className="burger-subTitle"
                            >
                                L'informatique adapté
                            </NavLink>
                            <NavLink
                                to="/activites/accessibility"
                                className="burger-subTitle"
                            >
                                L'accessibilité
                            </NavLink>
                            <NavLink
                                to="/activites/sensibilisation"
                                className="burger-subTitle"
                            >
                                La sensibilisation
                            </NavLink>
                            <NavLink
                                to="/activites/cls"
                                className="burger-subTitle"
                            >
                                Culture, loisirs et sports
                            </NavLink>
                        </li>
                        <li className="burger-title">
                            <NavLink
                                to="/mecenat-partenariat"
                                className="burger-title"
                            >
                                Mécenat & Partenariat
                            </NavLink>
                        </li>
                        <li className="burger-title">
                            La boutique
                            <NavLink
                                to="/boutique/catalogue"
                                className="burger-subTitle"
                            >
                                La boutique
                            </NavLink>
                            {/* <NavLink
                                to="/boutique/materiel"
                                className="burger-subTitle"
                            >
                                Le matériel
                            </NavLink> */}
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
};

export default Header;