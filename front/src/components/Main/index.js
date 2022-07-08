import React, { useEffect } from "react";
import PropTypes from "prop-types";

// STYLE
import './main.scss';

// URL
import { picture } from "../../data";

// PICTURES
import president from "../../assets/img/desk/jeanPierreLeclercq.jpg";
import { NavLink } from "react-router-dom";
import { ArrowRightCircle, Facebook, Instagram, Twitter } from "react-feather";

// MAPBOX
import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// TOASTIFY
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = ({ loadMission, mission, loadActuality, actuality, flash, showFlash }) => {
    useEffect(() => {
        loadMission();
        loadActuality();
        if (flash === 'success') {
            flashSuccess();
            showFlash(null);
        }
    }, []);

    // Mapbox
    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoidHVycGluam9uYXRoYW4iLCJhIjoiY2t3bDg0ZHc3MWpybzJ4bWRxNXRzYzUxZyJ9.t_jtpG-4kmbii3A1mDXfNQ'
    });
    const Longitude = -0.34575;
    const Latitude = 49.17530;

    const Style = 'mapbox://styles/mapbox/outdoors-v11';
    const Zoom = [16];


    function flashSuccess() {
        toast.success('Votre message a été envoyé avec succès. Nous vous répondrons dès que possible.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    }

    useEffect(() => {
        if (flash === 'success') {
            flashSuccess();
            showFlash(null);
        }
    }, [flash]);

    return (
        <main className="main">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            {/* Actualités */}
            <section className="main-actuality">
                <div className="main-actuality-content-text">
                    <div className="main-actuality-content">
                        <h2 className="main-actuality-content-title">Actualités</h2>
                        {actuality.map((item) => {
                            if (item.focus === true) {
                                return (
                                    <>
                                        <p className="main-actuality-content-contentText">
                                            {item.overview}
                                        </p>
                                        <NavLink to={`/actualites/${item.url}`} className="main-actuality-content-link">
                                            <button className="main-actuality-content-button">
                                                En savoir plus
                                                <ArrowRightCircle className="main-actuality-content-button-arrow" />
                                            </button>
                                        </NavLink>
                                    </>
                                )
                            }
                        })
                        }
                    </div>
                </div>
                <div className="main-actuality-content-img--container">
                    {actuality.map((item) => {
                        if (item.focus === true) {
                            return (
                                <img className="main-actuality-content-img" src={`${picture}actualite_image/${item.file}`} alt={item.liseuse} />
                            )
                        }
                    })}
                </div>
            </section>

            {/* OU NOUS TROUVER, FAIRE UN DON, DEVENIR BENEVOLE */}
            <section className="main-association">
                <h2 className="main-association-title"> Nos missions</h2>
                <div className="main-association-container">
                    {mission.map(oneMission => {
                        if (oneMission.show_main === true) {
                            return (
                                <article
                                    className="main-association-article"
                                    style={{ backgroundImage: `url(${picture}mission_image/${oneMission.file})` }}
                                    key={oneMission.id}
                                >
                                    <aside className="main-association-article-aside">
                                        <h3 className="main-association-article-aside-title"
                                        >{oneMission.nom}</h3>

                                        {/* <NavLink to="/actualites" className="main-association-article-aside-link">
                                <button className="main-association-article-aside-button">
                                    En savoir plus
                                    <ArrowRightCircle className="main-association-article-aside-content-button-arrow" />
                                </button>
                            </NavLink> */}
                                    </aside>
                                </article>
                            )
                        }
                    })}
                </div>
            </section>

            {/* PRESIDENT SPEAK */}
            <section className="main-president">
                <div className="main-president-content-img--container">
                    <img className="main-president-content-img" src={president} alt="president" />
                </div>
                <div className="main-president-content">
                    <div className="main-president-content-text">
                        <h4 className="main-president-content-title">Le mot du président</h4>
                        <p className="main-president-content-contentText">
                            De nombreux obstacles se dressent sur la route des personnes déficientes visuelles. De nouveaux territoires seront conquis à force de courage, de persévérance et d'audace…
                        </p>
                        <aside className="main-president-content-sign">
                            <p id="name">Jean Pierre Leclercq</p>
                            <p>Président de l'association Valentin Haüy</p>
                            <p>Caen Calvados</p>
                        </aside>
                    </div>
                </div>
            </section>

            {/* FOLLOW US */}
            <section className="main-follow">
                <h2 className="main-follow-title">Suivez-nous !</h2>
                <div className="main-follow-container">
                    <article className="main-follow-article">
                        <div className="main-follow-article-content">
                            <aside className="main-follow-article-aside">
                                <Facebook className="main-follow-article-aside-icon" />
                                <div className="main-follow-article-aside-content">
                                    {/* <NavLink to="/actualites" className="main-follow-article-aside-content-link">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Mauris euismod, lectus eget consectetur vehicula,
                                    </p>
                                </NavLink> */}
                                    <NavLink to="/actualites" className="main-follow-article-aside-link">
                                        <p className="main-follow-article-aside-link-text">
                                            <a href="https://www.facebook.com/avhcaen" target="_blank" rel="noreferrer">suivez-nous sur Facebook</a>
                                        </p>
                                    </NavLink>
                                </div>
                            </aside>
                            <aside className="main-follow-article-aside">
                                <Instagram className="main-follow-article-aside-icon" />
                                <div className="main-follow-article-aside-content">
                                    {/* <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris euismod, lectus eget consectetur vehicula,
                                </p> */}
                                    <NavLink to="/actualites" className="main-follow-article-aside-link">
                                        <p className="main-follow-article-aside-link-text">
                                            <a href="https://www.instagram.com/avhcaen" target="_blank" rel="noreferrer">suivez-nous sur Instagram</a>
                                        </p>
                                    </NavLink>
                                </div>
                            </aside>
                        </div>
                        <div className="main-follow-article-content">
                            <aside className="main-follow-article-aside">
                                <Twitter className="main-follow-article-aside-icon" />
                                <div className="main-follow-article-aside-content">
                                    {/* <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris euismod, lectus eget consectetur vehicula,
                                </p> */}
                                    <NavLink to="/actualites" className="main-follow-article-aside-link">
                                        <p className="main-follow-article-aside-link-text">
                                            <a href="https://twitter.com/avhcaen" target="_blank" rel="noreferrer">suivez-nous sur Twitter</a>
                                        </p>
                                    </NavLink>
                                </div>
                            </aside>
                            {/* <aside className="main-follow-article-aside">
                            <Youtube className="main-follow-article-aside-icon" />
                            <div className="main-follow-article-aside-content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris euismod, lectus eget consectetur vehicula,
                                </p>
                                <NavLink to="/actualites" className="main-follow-article-aside-link">
                                    <p className="main-follow-article-aside-link-text">
                                        suivez-nous sur Youtube
                                    </p>
                                </NavLink>
                            </div>
                        </aside> */}
                        </div>
                    </article>
                </div>
            </section>

            {/* MAP */}
            <section className="main-map">
                <Map className="main-map"
                    style={Style}
                    containerStyle={{
                        height: '20rem',
                        width: '100vw'
                    }}
                    center={[Longitude, Latitude]}
                    zoom={Zoom}
                >
                    <Layer type="circle" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                        <Feature coordinates={[Longitude, Latitude]} />
                    </Layer>

                    <Popup
                        coordinates={[Longitude, Latitude]}
                        offset={{
                            'bottom-left': [12, -38], bottom: [0, -10], 'bottom-right': [-12, -38],
                        }}
                        className="main-map-popup"
                    >
                        <h1>AVH CAEN</h1>
                        <p>5 rue Roger Bastion</p>
                        <p>14000 CAEN</p>
                    </Popup>
                </Map>
            </section>
        </main >
    );
};

Main.propTypes = {
    // MISSION
    loadMission: PropTypes.func.isRequired,
    mission: PropTypes.objectOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nom: PropTypes.string.isRequired,
            overview: PropTypes.string.isRequired,
            detail: PropTypes.string.isRequired,
            show_main: PropTypes.bool.isRequired,
            file: PropTypes.string.isRequired,
            imageFile: PropTypes.string,
            slug: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,

    // ACTUALITY
    loadActuality: PropTypes.func.isRequired,
    actuality: PropTypes.objectOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            titre: PropTypes.string.isRequired,
            sous_titre: PropTypes.string.isRequired,
            lieu: PropTypes.string.isRequired,
            overview: PropTypes.string.isRequired,
            paragraphe1: PropTypes.string.isRequired,
            paragraphe2: PropTypes.string,
            paragraphe3: PropTypes.string,
            focus: PropTypes.bool.isRequired,
            liseuse: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            aside: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
            updatedAt: PropTypes.string,
            categorie: PropTypes.array,
            tag: PropTypes.string,
            file: PropTypes.string.isRequired,
            imageFile: PropTypes.string.isRequired,
            file2: PropTypes.string,
            imageFile2: PropTypes.string,
            file3: PropTypes.string,
            imageFile3: PropTypes.string,
            liseuse2: PropTypes.string,
            liseuse3: PropTypes.string,
            youtube: PropTypes.string,
            // User: PropTypes.objectOf(
            //     PropTypes.shape({
            //         id: PropTypes.number.isRequired,
            //         nom: PropTypes.string.isRequired,
            //         prenom: PropTypes.string.isRequired,
            //         email: PropTypes.string.isRequired,
            //         fonction: PropTypes.string.isRequired,
            //     }).isRequired
            // ).isRequired,
        }).isRequired,
    ).isRequired,
};

export default Main;