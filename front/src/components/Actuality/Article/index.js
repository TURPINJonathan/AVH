import React from "react";

import './article.scss';

import loading from '../../../assets/img/page_developping.png';
import defi_voile from "../../../assets/img/defi_voile.jpg";

import { Facebook, Instagram, Twitter, Youtube } from "react-feather";
import { Link } from "react-router-dom";

const Article = () => {
    return (
        <main className="article">
            <article>
                <h3 className="article-title">13ème édition de la Norlanda's Cup</h3>
                <div className="article_picture">
                    <img src={defi_voile} alt="defi voile" />
                    <p className="article_picture--photograph">Photographie de<> </>
                        <span className="firstname">Jonathan</span><> </>
                        <span className="lastname">Turpin</span></p>
                </div>
                <aside>
                    <p className="article_overview">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu iaculis massa, nec congue ligula. Sed facilisis semper felis. Ut.
                    </p>
                    <p className="article_content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu iaculis massa, nec congue ligula. Sed facilisis semper felis. Ut.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu iaculis massa, nec congue ligula. Sed facilisis semper felis. Ut.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu iaculis massa, nec congue ligula. Sed facilisis semper felis. Ut.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu iaculis massa, nec congue ligula. Sed facilisis semper felis. Ut.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu iaculis massa, nec congue ligula. Sed facilisis semper felis. Ut.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu iaculis massa, nec congue ligula. Sed facilisis semper felis. Ut.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu iaculis massa, nec congue ligula. Sed facilisis semper felis. Ut.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu iaculis massa, nec congue ligula. Sed facilisis semper felis. Ut.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu iaculis massa, nec congue ligula. Sed facilisis semper felis. Ut.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu iaculis massa, nec congue ligula. Sed facilisis semper felis. Ut.
                    </p>
                    <div className="article_sign">
                        <p className="article_date">Article du 26/05/2022</p>
                        <p className="article_author">Par<> </>
                            <span className="firstname">Jonathan</span><> </>
                            <span className="lastname">Turpin</span>
                        </p>
                    </div>
                </aside>
                <aside className="article_social">
                    <p className="article_social--title">Partager sur les réseaux sociaux</p>
                    <div className="article_social--icons">
                        <a href="https://www.facebook.com/"><Facebook /></a>
                        <a href="https://twitter.com/"><Twitter /></a>
                        <a href="https://www.instagram.com/"><Instagram /></a>
                    </div>
                </aside>
                {/* <Link className="back" to="/actualites">
                    <button className="back-button">Retour aux articles</button>
                </Link> */}
            </article>
        </main>
    );
}

export default Article;