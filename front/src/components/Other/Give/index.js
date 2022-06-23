import React from "react";

// STYLE
import './give.scss';

// PICTURE
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