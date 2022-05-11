import React from "react";

import './informatique.scss';

import loading from '../../../assets/img/page_developping.png';

const Informatique = () => {
    return (
        <main className="informatique">
            <h2>L'informatique adapté</h2>
            <img className="loading" src={loading} alt="Page en cours de construction" />
        </main>
    );
}

export default Informatique;