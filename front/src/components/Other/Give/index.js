import React from "react";

import './give.scss';

import loading from '../../../assets/img/page_developping.png';

const Give = () => {
    return (
        <main className="give">
            <h2>Faîtes un don</h2>
            <img className="loading" src={loading} alt="Page en cours de construction" />
        </main>
    );
}

export default Give;