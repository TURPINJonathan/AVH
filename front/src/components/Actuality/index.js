import React from "react";

import './actuality.scss';

import loading from '../../assets/img/page_developping.png';

const Actuality = () => {
    return (
        <main className="actuality">
            <h2>Actualités</h2>
            <img className="loading" src={loading} alt="Page en cours de construction" />
        </main>
    );
}

export default Actuality;