import React from "react";

import './cls.scss';

import loading from '../../../assets/img/page_developping.png';

const Cls = () => {
    return (
        <main className="cls">
            <h2>Culture Loisirs et Sport</h2>
            <img className="loading" src={loading} alt="Page en cours de construction" />
        </main>
    );
}

export default Cls;