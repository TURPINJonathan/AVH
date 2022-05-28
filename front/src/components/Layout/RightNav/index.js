import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import ReactTooltip from "react-tooltip";

// logos
import { Facebook, Heart, Instagram, Twitter, Youtube } from "react-feather";
import Give from "../../../assets/img/give.png";

import "./rightNav.scss";

const RightNav = () => {
    return (
        <aside id="rightNav">
            <a href="https://www.facebook.com/avhcaen" target="_blank" rel="noreferrer">
                <ReactTooltip
                    place="left"
                    type="dark"
                    effect="float"
                />
                <Facebook className="rightNav-item" data-tip="Facebook" />
            </a>
            <a href="https://www.instagram.com/avhcaen" target="_blank" rel="noreferrer">
                <ReactTooltip
                    place="left"
                    type="dark"
                    effect="float"
                />
                <Instagram className="rightNav-item" data-tip="Instagram" />
            </a>
            <a href="https://twitter.com/avhcaen" target="_blank" rel="noreferrer">
                <ReactTooltip
                    place="left"
                    type="dark"
                    effect="float"
                />
                <Twitter className="rightNav-item" data-tip="Twitter" />
            </a>
            <NavLink to={`/`}>
                <ReactTooltip
                    place="left"
                    type="dark"
                    effect="float"
                />
                <Youtube className="rightNav-item" data-tip="Youtube" />
            </NavLink>
            <a href="https://sensibiliser.avh.asso.fr/campagne-2018/" target="_blank" rel="noreferrer" className="heart">
                <ReactTooltip
                    place="left"
                    type="dark"
                    effect="float"
                />
                <Heart className="heart-hover" data-tip="Faire un don" />
            </a>
        </aside>
    );
};

export default RightNav;