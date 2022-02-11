import React, { useEffect, useRef, useState } from "react";

import "./header.scss";

// pictures
import Logo from "../../../assets/img/logo.png";
import Volunteer from "../../../assets/img/devenir_benevole.png";
import Donate from "../../../assets/img/faire_un_don.png";

// Feather
import { ArrowDown, ArrowUp, ChevronDown, ChevronsUp, ChevronUp, Facebook, Instagram, Linkedin, Mail, Twitter, Youtube } from "react-feather";

// functions
import dropdown from "../../../functions/dropdown";

const Header = () => {

    const ref = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [listening, setListening] = useState(false);

    useEffect(dropdown(listening, setListening, ref, setIsOpen));

    return (
        <header id="header">
            <div id="header-social">
                <Facebook className="header-social__item" color="white" />
                <Twitter className="header-social__item" color="white" />
                <Youtube className="header-social__item" color="white" />
                <Instagram className="header-social__item" color="white" />
                <Linkedin className="header-social__item" color="white" />
                <Mail className="header-social__item" color="white" />
            </div>
            <section id="header-main">
                <div id="header-main-main">
                    <div id="header-main__logo">
                        <img src={Logo} alt="logo association Valentin Haüy" />
                    </div>
                    <div id="header-main__title">
                        <p id="title-assoc">Association</p>
                        <h1 id="title-vh">Valentin Haüy</h1>
                        <p id="title-cc">Caen Calvados</p>
                        <p id="title-orga">Organisation à but non lucratif</p>
                    </div>
                    <div id="header-main__join">
                        <img src={Volunteer} alt="devenir bénévole" className="join-picture" />
                        <img src={Donate} alt="faire un don" className="join-picture" />
                    </div>
                </div>
                <div id="header-main__bg" />
            </section>
            <nav id="header-nav">
                <ul>
                    <li
                        onClick={() => setIsOpen(!isOpen)}
                        ref={ref}>

                        <span>
                            {isOpen
                                &&
                                <ChevronUp className="arrow" />
                            }
                            {!isOpen
                                &&

                                <ChevronDown className="arrow" />
                            }
                        </span>
                        <p>
                            Association Valentin Haüy
                        </p>
                        <span>
                            {isOpen
                                &&
                                <ChevronUp className="arrow" />
                            }
                            {!isOpen
                                &&

                                <ChevronDown className="arrow" />
                            }
                        </span>
                        {isOpen
                            &&
                            <ul className="subnav">
                                <li className="subnav-link">AVH Paris</li>
                                <li className="subnav-link">AVH Caen Calvados</li>
                            </ul>
                        }
                    </li>
                    <li>
                        <a href="#">Actualités</a>
                    </li>
                    <li>
                        <a href="#">Activités</a>
                    </li>
                    <li>
                        <a href="#">Mécénat partenariat</a>
                    </li>
                    <li>
                        <a href="#">La boutique</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;