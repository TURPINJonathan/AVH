import React from "react";

// STYLE
import './cls.scss';

// PICTURES
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