import React from "react";

import './article.scss';

import defi_voile from "../../../assets/img/defi_voile.jpg";

import { Facebook, Instagram, Twitter, Youtube } from "react-feather";
import { Link, NavLink } from "react-router-dom";

const Article = () => {
    return (
        <main className="article">
            <article>
                <h3 className="article-title">13ème édition de la Norlanda's Cup</h3>
                <div className="article_picture">
                    <img src={defi_voile} alt="defi voile" />
                    {/* <p className="article_picture--photograph">Photographie de<> </>
                        <span className="firstname">Jonathan</span><> </>
                        <span className="lastname">Turpin</span>
                    </p> */}
                </div>
                <aside>
                    <p className="article_overview">
                        La 13ème édition de la Norlanda's Cup approche à grands pas ...
                    </p>
                    <p className="article_content">
                        Elle se déroulera le 31 mai, 01 et 02 juin 2022.
                        <br />
                        24 équipages répartis en 4 groupes de 6 y sont inscrits.
                        <br />
                        Le tirage au sort a eu lieu mardi 26 avril à la base nautique Bertrand Génard.
                    </p>
                    <div className="article_sign">
                        <p className="article_date">Article du 28/05/2022<> </></p>
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