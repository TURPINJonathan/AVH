import React from "react";

import './come.scss';

import loading from '../../../assets/img/page_developping.png';

const Come = () => {
    return (
        <main className="come">
            <h2>Devenez bénévole !</h2>
            <img className="loading" src={loading} alt="Page en cours de construction" />
        </main>
    );
}

export default Come;