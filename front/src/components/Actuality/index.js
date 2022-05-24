import React from "react";

import './actuality.scss';

import loading from '../../assets/img/page_developping.png';
import defi_voile from "../../assets/img/defi_voile.jpg";

const Actuality = () => {
    return (
        <main className="actuality">
            <h2>Actualités</h2>
            <div className="actuality_content">
                <aside className="search">
                    <img src={defi_voile} alt="loading" />
                </aside>
                <article className="allArticle">
                    <div className="anArticle">
                        <img className="anArticle_picture" src={loading} alt="loading" />
                        <h4>Titre de l'article</h4>
                        <button className="anArticle_button" />
                    </div>
                    <div className="anArticle">
                        <img className="anArticle_picture" src={loading} alt="loading" />
                        <h4>Titre de l'article</h4>
                        <button className="anArticle_button" />
                    </div>
                    <div className="anArticle">
                        <img className="anArticle_picture" src={loading} alt="loading" />
                        <h4>Titre de l'article</h4>
                        <button className="anArticle_button" />
                    </div>
                    <div className="anArticle">
                        <img className="anArticle_picture" src={loading} alt="loading" />
                        <h4>Titre de l'article</h4>
                        <button className="anArticle_button" />
                    </div>
                </article>
            </div>
        </main>
    );
}

export default Actuality;