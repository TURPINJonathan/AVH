import React from "react";
import PropTypes from 'prop-types';

// BIBLIOTHEQUES
import ReactPlayer from 'react-player';
import parse from 'html-react-parser';

// MOMENT
import Moment from 'moment';
import 'moment/locale/fr';

// STYLE
import './article.scss';

// PICTURES
import { Facebook, Instagram, Twitter, User } from "react-feather";
import { Link, useParams } from "react-router-dom";

// URL
import { picture } from "../../../data";

const Article = ({ oneActuality }) => {
    const { slug } = useParams();
    const article = oneActuality.find(article => article.url === slug);
    console.log(article);
    console.log(picture + 'user_image/' + article.User[0].file);
    // Gestion des différents paragraphes
    if (article.paragraphe2 != null) {
        var paragraphe2 = parse(article.paragraphe2);
    }

    if (article.paragraphe3 != null) {
        var paragraphe3 = parse(article.paragraphe3);
    }

    // Gestion de la video youtube
    if (article.youtube != null) {
        var youtubeurl = parse(article.youtube);
    }
    return (
        <main>
            <article>
                <h1>{article.titre}</h1>
                <div className="article-infos">
                    <time id="article_date">Article du
                        <span>
                            {' ' + Moment(article.createdAt).format('dddd DD MMMM YYYY')}
                        </span>
                    </time>
                    <author className="article_author">Par<> </>
                        <span className="firstname">{article.User[0].nom}</span><> </>
                        <span className="lastname">{article.User[0].prenom}</span>
                        <img
                            id="user_picture"
                            data-tip={article.User[0].prenom + " " + article.User[0].nom + "<br/>" + article.User[0].email}
                            src={picture + 'user_image/' + article.User[0].file}
                            alt=
                            {
                                'Image de l\'auteur : ' +
                                article.User[0].nom +
                                ' ' +
                                article.User[0].prenom +
                                ' ' +
                                article.User[0].fonction
                            }
                        />
                    </author>
                </div>
                <div>
                    <img
                        src={picture + 'actualite_image/' + article.file}
                        alt="defi voile"
                        className="article_pictures"
                    />
                    {/* <p className="article_picture--photograph">Photographie de<> </>
                        <span className="firstname">Jonathan</span><> </>
                        <span className="lastname">Turpin</span>
                    </p> */}
                </div>
                <p id="article_overview">
                    {article.overview}
                </p>
                <aside>
                    <p className="article_paragraph">{parse(article.paragraphe1)}</p>

                    {/* SECOND PARAGRAPHE */}
                    <div className="article_part">
                        {article.file2 != null ? (
                            <img
                                src={picture + 'actualite_image/' + article.file2}
                                alt={article.liseuse2}
                                className="article_pictures article_picture--option"
                            />
                        ) : (
                            <div></div>
                        )}
                        {/* <p className="article_picture--photograph">Photographie de<> </>
                        <span className="firstname">Jonathan</span><> </>
                        <span className="lastname">Turpin</span>
                    </p> */}
                        {article.paragraphe2 != null ? (
                            <p className="article_paragraph article_paragraph--option">{paragraphe2}</p>
                        ) : (
                            <div></div>
                        )}
                    </div>
                    {/* TROISIEME PARAGRAPHE */}
                    <div className="article_part" id="third_paragraph">
                        {article.paragraphe3 != null ? (
                            <p className="article_paragraph article_paragraph--option">{paragraphe3}</p>
                        ) : (
                            <div></div>
                        )}
                        {article.file3 != null ? (
                            <img
                                src={picture + 'actualite_image/' + article.file3}
                                alt={article.liseuse3}
                                className="article_pictures article_picture--option"
                            />
                        ) : (
                            <div></div>
                        )}
                        {/* <p className="article_picture--photograph">Photographie de<> </>
                        <span className="firstname">Jonathan</span><> </>
                        <span className="lastname">Turpin</span>
                    </p> */}
                    </div>

                    {/* YOUTUBE */}
                    {article.youtube != null ? (
                        <div id="youtube_wrapper">
                            <ReactPlayer
                                url={youtubeurl}
                                controls="true"
                                id="youtube_player"
                                width={'100%'}
                                height={'100%'}
                            />
                        </div>
                    ) : (
                        <div></div>
                    )}

                </aside>
                <aside id="article_share">
                    <p>Partagez sur les réseaux sociaux</p>
                    <div>
                        <a href="https://www.facebook.com/avhcaen" target="_blank" rel="noreferrer"><Facebook className="article_share--picture" /></a>
                        <a href="https://twitter.com/avhcaen" target="_blank" rel="noreferrer"><Twitter className="article_share--picture" /></a>
                        <a href="https://www.instagram.com/avhcaen" target="_blank" rel="noreferrer"><Instagram className="article_share--picture" /></a>
                    </div>
                </aside>
                <Link className="actuality_link" to="/actualites">
                    <button className="actuality_button">Retour aux articles</button>
                </Link>
            </article>
        </main >
    );
}

Article.propTypes = {
    oneActuality: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            titre: PropTypes.string.isRequired,
            sous_titre: PropTypes.string,
            lieu: PropTypes.string,
            overview: PropTypes.string.isRequired,
            paragraphe1: PropTypes.string.isRequired,
            paragraphe2: PropTypes.string,
            paragraphe3: PropTypes.string,
            focus: PropTypes.bool.isRequired,
            liseuse: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            aside: PropTypes.bool.isRequired,
            createdAt: PropTypes.string.isRequired,
            updatedAt: PropTypes.string,
            categorie: PropTypes.array,
            tag: PropTypes.string,
            file: PropTypes.string.isRequired,
            imageFile: PropTypes.string,
            file2: PropTypes.string,
            imageFile2: PropTypes.string,
            file3: PropTypes.string,
            imageFile3: PropTypes.string,
            liseuse2: PropTypes.string,
            liseuse3: PropTypes.string,
            youtube: PropTypes.string,
            User: PropTypes.objectOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    nom: PropTypes.string.isRequired,
                    prenom: PropTypes.string.isRequired,
                    fonction: PropTypes.string.isRequired,
                    file: PropTypes.string.isRequired,
                }).isRequired
            ).isRequired,
        }).isRequired,
    ).isRequired,
};
export default Article;