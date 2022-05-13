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
            <NavLink to={`/`}>
                <ReactTooltip
                    place="left"
                    type="dark"
                    effect="float"
                />
                <Facebook className="rightNav-item" data-tip="Facebook" />
            </NavLink>
            <NavLink to={`/`}>
                <ReactTooltip
                    place="left"
                    type="dark"
                    effect="float"
                />
                <Instagram className="rightNav-item" data-tip="Instagram" />
            </NavLink>
            <NavLink to={`/`}>
                <ReactTooltip
                    place="left"
                    type="dark"
                    effect="float"
                />
                <Twitter className="rightNav-item" data-tip="Twitter" />
            </NavLink>
            <NavLink to={`/`}>
                <ReactTooltip
                    place="left"
                    type="dark"
                    effect="float"
                />
                <Youtube className="rightNav-item" data-tip="Youtube" />
            </NavLink>
            <NavLink to={`/`} className="heart">
                <ReactTooltip
                    place="left"
                    type="dark"
                    effect="float"
                />
                <Heart className="heart-hover" data-tip="Faire un don" />
            </NavLink>
        </aside>
    );
};

export default RightNav;