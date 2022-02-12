import React, { useEffect, useRef, useState } from "react";

import "./header.scss";
import "./nav.scss";

// pictures
import Logo from "../../../assets/img/logo.png";
import Volunteer from "../../../assets/img/devenir_benevole.png";
import Donate from "../../../assets/img/faire_un_don.png";

// Feather
import { ChevronDown, ChevronUp, Facebook, Instagram, Linkedin, Mail, Twitter, Youtube } from "react-feather";

// functions
import dropdown from "../../../functions/dropdown";
import { NavLink } from "react-router-dom";

const Header = () => {

    const activity = useRef(null);
    const avhDropdown = useRef(null);
    const sell = useRef(null);

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
                    <button id="donate-button" className="join-click" src="#">Faire un don</button>
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
                            <button id="donate-button" className="join-click">Faire un don</button>
                        </NavLink>
                    </div>
                </div>
                <div id="header-main__bg" />
            </section>
            <nav id="header-nav">
                <ul>
                    <li
                        onClick={() => setAvhIsOpen(!avhIsOpen)}
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
                                        to="/paris"
                                    >
                                        AVH Paris
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
                        onClick={() => setActivityIsOpen(!activityIsOpen)}
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
                        onClick={() => setSellIsOpen(!sellIsOpen)}
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
        </header >
    );
};

export default Header;