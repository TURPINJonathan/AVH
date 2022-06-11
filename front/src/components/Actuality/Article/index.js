import React from "react";

import './article.scss';

import defi_voile from "../../../assets/img/defi_voile.jpg";

import { Facebook, Instagram, Twitter, Youtube } from "react-feather";
import { Link, NavLink, useParams } from "react-router-dom";

import { picture } from "../../../data";

const Article = ({ oneActuality }) => {
    const { slug } = useParams();
    const article = oneActuality.find(article => article.url === slug);
    return (
        <main className="article">
            <article>
                <h3 className="article-title">13ème édition de la Norlanda's Cup</h3>
                <div className="article_picture">
                    <img src={picture + 'actualite_image/' + article.file} alt="defi voile" />
                    {/* <p className="article_picture--photograph">Photographie de<> </>
                        <span className="firstname">Jonathan</span><> </>
                        <span className="lastname">Turpin</span>
                    </p> */}
                </div>
                <aside>
                    <p className="article_overview">
                        {article.overview}
                    </p>
                    <p className="article_content">
                        {article.paragraphe1}
                    </p>
                    <div className="article_sign">
                        <p className="article_date">Article du {article.createdAt}</p>
                        <p className="article_author">Par<> </>
                            <span className="firstname">Jonathan</span><> </>
                            <span className="lastname">Turpin</span>
                        </p>
                    </div>
                </aside>
                <aside className="article_social">
                    <p className="article_social--title">Partager sur les réseaux sociaux</p>
                    <div className="article_social--icons">
                        <a href="https://www.facebook.com/avhcaen" target="_blank" rel="noreferrer"><Facebook /></a>
                        <a href="https://twitter.com/avhcaen" target="_blank" rel="noreferrer"><Twitter /></a>
                        <a href="https://www.instagram.com/avhcaen" target="_blank" rel="noreferrer"><Instagram /></a>
                    </div>
                </aside>
                <NavLink className="back" to="/actualites">
                    <button className="back-button">Retour aux articles</button>
                </NavLink>
            </article>
        </main>
    );
}

export default Article;