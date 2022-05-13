import React from "react";

import './contact.scss';

import loading from '../../../assets/img/page_developping.png';

const Contact = () => {
    return (
        <main className="contact">
            <h2>Contactez-nous</h2>
            <img className="loading" src={loading} alt="Page en cours de construction" />
        </main>
    );
}

export default Contact;