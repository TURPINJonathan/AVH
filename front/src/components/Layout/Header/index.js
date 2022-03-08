import React, { useEffect, useRef, useState } from "react";

import "./header.scss";
import "./nav.scss";
import './burger.scss';

// pictures
import Logo from "../../../assets/img/logo.png";

// Feather
import { ChevronDown, ChevronUp, Facebook, Instagram, Linkedin, Mail, Twitter, Youtube } from "react-feather";

// functions
import dropdown from "../../../functions/dropdown";
import { NavLink } from "react-router-dom";

const Header = () => {

    const activity = useRef(null);
    const avhDropdown = useRef(null);
    const sell = useRef(null);

    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);
    const [avhIsOpen, setAvhIsOpen] = useState(false);
    const [activityIsOpen, setActivityIsOpen] = useState(false);
    const [sellIsOpen, setSellIsOpen] = useState(false);

    const [listening, setListening] = useState(false);

    useEffect(dropdown(listening, setListening, activity, avhDropdown, sell, setSellIsOpen, setAvhIsOpen, setActivityIsOpen), [setActivityIsOpen, setAvhIsOpen]);

    return (
        <header id="header">
            <div id="header-social">
                <div id="header-main__join">
                    <button id="join-button" className="join-click" src="#">Devenir bénévole</button>
                    <button id="donate-button" className="join-click" src="#">Faites un don</button>
                </div>
                <div id="header-social__icons">
                    <Facebook className="header-social__item" color="white" />
                    <Twitter className="header-social__item" color="white" />
                    <Youtube className="header-social__item" color="white" />
                    <Instagram className="header-social__item" color="white" />
                    <Linkedin className="header-social__item" color="white" />
                    <Mail className="header-social__item" color="white" />
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
                        <NavLink to="/come">
                            <button id="join-button" className="join-click">Devenir bénévole</button>
                        </NavLink>
                        <NavLink to="/give">
                            <button id="donate-button" className="join-click">Faites un don</button>
                        </NavLink>
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
                                <li className="subnav-link">
                                    <NavLink
                                        to="/caen"
                                    >
                                        AVH Caen Calvados
                                    </NavLink>
                                </li>
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
                                    <NavLink to="/activites/formation">Formation professionnelle</NavLink>
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
                                to="/caen"
                                className="burger-subTitle"
                            >
                                AVH Caen
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
                                to="/braille"
                                className="burger-subTitle"
                            >
                                Le Braille
                            </NavLink>
                            <NavLink
                                to="/informatique"
                                className="burger-subTitle"
                            >
                                L'informatique adapté
                            </NavLink>
                            <NavLink
                                to="/formation"
                                className="burger-subTitle"
                            >
                                Formation Professionnelle
                            </NavLink>
                            <NavLink
                                to="/cls"
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
                                Le catalogue
                            </NavLink>
                            <NavLink
                                to="/boutique/materiel"
                                className="burger-subTitle"
                            >
                                Le matériel
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
};

export default Header;