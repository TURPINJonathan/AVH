import React from "react";

import './volunteers.scss';

import loading from '../../../../assets/img/page_developping.png';

const Volunteers = () => {
    return (
        <main className="volunteers">
            <h2>Volunteers</h2>
            <img className="loading" src={loading} alt="Page en cours de construction" />
        </main>
    );
}

export default Volunteers;