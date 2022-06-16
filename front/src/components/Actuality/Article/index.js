import React from "react";

import ReactPlayer from 'react-player';

import parse from 'html-react-parser';

import Moment from 'moment';
import 'moment/locale/fr';

import './article.scss';


import { Facebook, Instagram, Twitter, Youtube } from "react-feather";
import { Link, NavLink, useParams } from "react-router-dom";

import { picture } from "../../../data";

const Article = ({ oneActuality }) => {
    const { slug } = useParams();
    const article = oneActuality.find(article => article.url === slug);

    // Gestion des différents articles
    if (article.paragraphe2 != null) {
        var paragraphe2 = parse(article.paragraphe2);
    }

    if (article.file2 != null) {
        var file2 = parse(article.file2);
    }

    if (article.paragraphe3 != null) {
        var paragraphe3 = parse(article.paragraphe3);
    }

    if (article.youtube != null) {
        var youtubeurl = parse(article.youtube);
    }
    console.log(youtubeurl)
    // console.log(youtube);
    return (
        <main className="article">
            <article>
                <h3 className="article-title">{article.titre}</h3>
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
                    <p className="article_content">{parse(article.paragraphe1)}</p>
                    <p className="article_content" id="paragraphe2">{paragraphe2}</p>
                    <div className="article_picture" >
                        <img src={picture + 'actualite_image/' + article.file2} alt={article.liseuse2} />
                        {/* <p className="article_picture--photograph">Photographie de<> </>
                        <span className="firstname">Jonathan</span><> </>
                        <span className="lastname">Turpin</span>
                    </p> */}
                    </div>
                    <p className="article_content" id="paragraphe2">{paragraphe3}</p>
                    <div className="article_picture">
                        <img src={picture + 'actualite_image/' + article.file3} alt={article.liseuse3} />
                        {/* <p className="article_picture--photograph">Photographie de<> </>
                        <span className="firstname">Jonathan</span><> </>
                        <span className="lastname">Turpin</span>
                    </p> */}
                    </div>

                    <ReactPlayer url={youtubeurl} controls="true" id="youtube" />
                    <div className="article_sign">
                        <p className="article_date">Article du <> </>
                            {Moment(article.date).format('dddd DD MMMM YYYY')}
                        </p>
                        {/* <p className="article_author">Par<> </>
                            <span className="firstname">Jonathan</span><> </>
                            <span className="lastname">Turpin</span>
                        </p> */}
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