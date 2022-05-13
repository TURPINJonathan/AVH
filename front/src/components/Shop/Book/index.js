import React from "react";

import './book.scss';

import loading from '../../../assets/img/page_developping.png';

const Book = () => {
    return (
        <main className="book">
            <h2>La boutique</h2>
            <img className="loading" src={loading} alt="Page en cours de construction" />
        </main>
    );
}

export default Book;