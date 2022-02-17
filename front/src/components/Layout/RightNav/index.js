import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

// logos
import { Facebook, Heart, Instagram, Twitter, Youtube } from "react-feather";
import Give from "../../../assets/img/give.png";

import "./rightNav.scss";

const RightNav = () => {
    return (
        <aside id="rightNav">
            <NavLink to={`/`}>
                <Facebook className="rightNav-item" />
            </NavLink>
            <NavLink to={`/`}>
                <Instagram className="rightNav-item" />
            </NavLink>
            <NavLink to={`/`}>
                <Twitter className="rightNav-item" />
            </NavLink>
            <NavLink to={`/`}>
                <Youtube className="rightNav-item" />
            </NavLink>
            <NavLink to={`/`} className="heart">
                <Heart className="heart-hover" alt="Faire un don" />
            </NavLink>
        </aside>
    );
};

export default RightNav;