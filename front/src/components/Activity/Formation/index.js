import React from "react";

import './formation.scss';

import loading from '../../../assets/img/page_developping.png';

const Formation = () => {
    return (
        <main className="formation">
            <h2>Les formations professionnelles</h2>
            <img className="loading" src={loading} alt="Page en cours de construction" />
        </main>
    );
}

export default Formation;