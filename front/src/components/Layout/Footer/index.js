import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Heart, Mail, MessageCircle, Phone } from "react-feather";
import Modal from 'react-modal';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Moment from 'moment';

// STYLE
import "./footer.scss";

// PICTURES
import Logo from "../../../assets/img/logo.png";

// MODAL STYLE
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-25%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#e5e5e5bb',
        border: '1px solid #dd4814',
        borderRadius: '25px',
        boxShadow: '0px 0px 10px #dd4814',
        padding: '0',
        widht: 'auto',
        height: 'auto',
        maxWidth: '95vw',
        maxHeight: '80vh',
    },
};

const Footer = ({
    nom,
    prenom,
    telephone,
    email,
    entreprise,
    objet,
    message,
    contact,
    flash,
    showFlash,
}) => {
    var form = useRef();

    //? FLASH MESSAGE
    function flashError() {
        toast.error('Une erreur est survenue. Avez-vous rempli l\'ensemble des champs obligatoires', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    if (flash === 'error') {
        flashError();
    }

    if (flash === 'redirect') {
        showFlash('success');
    }

    //? MODAL
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#4b0a9a';
    }

    function closeModal() {
        setIsOpen(false);
    }

    //? EMAILJS
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('avh_contact', 'contact_template', e.target, '_YsYqOdnEsIYTolQg')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                closeModal();
                showFlash('redirect');
            }, (error) => {
                console.log('Message error', error);
                showFlash('error');
            });
        e.target.reset();
    }

    //?GESTION DE L'ANNEE
    const year = Moment().format('MMMM YYYY');
    return (
        <footer>
            <div id="footer">
                <div id="footer__logo">
                    <img src={Logo} alt="logo association Valentin Haüy" />
                </div>
                <div className="footer-content">
                    <p className="footer-content__title">Adresse</p>
                    <p className="footer-content__text">Association Valentin Haüy Caen Calvados</p>
                    <p className="footer-content__text">5 rue Roger Bastion</p>
                    <p className="footer-content__text">14000 Caen</p>
                </div>
                <div className="footer-content">
                    <p className="footer-content__title">Horaires</p>
                    <p className="footer-content__text">Lundi : 10:00 - 12:00 / 14:00 - 17:00</p>
                    <p className="footer-content__text">Mercredi : 10:00 - 12:00 / 14:00 - 17:00</p>
                    <p className="footer-content__text">Vendredi : 14:00 - 17:00</p>
                    <p className="footer-content__text">et sur rendez-vous</p>
                </div>
                <div className="footer-content">
                    <p className="footer-content__title">Contact</p>
                    <p className="footer-content__text"><Phone /> 02 31 85 71 57</p>
                    <p className="footer-content__text"><Phone /> 06 29 36 49 28</p>
                    <p className="footer-content__text">
                        <a href="mailto: comite.caen@avh.asso.fr" alt="email de l'association Valentin Haüy">
                            <Mail /> comite.caen@avh.asso.fr
                        </a>
                    </p>
                </div>
                <div className="footer-content">
                    <p className="footer-content__title">Aidez-nous</p>
                    <p className="footer-content__text">Soutenez l'association en faisant un don</p>
                    <a href="https://sensibiliser.avh.asso.fr/campagne-2018/" target="_blank" rel="noreferrer" >
                        <button type="button">
                            <Heart color="white" />
                            <p> Faîtes un don !</p>
                        </button>
                    </a>
                    {/* <p className="footer-content__title">Contactez-nous</p>
                    <p className="footer-content__text">Pour un soutien ou une question</p> */}
                    {/* <a href="mailto: comite.caen@avh.asso.fr" alt="email de l'association Valentin Haüy"> */}
                    <button onClick={openModal} type="button">
                        <p> Contactez-nous</p>
                        <MessageCircle color="white" />
                    </button>
                    {/* </a> */}
                    {/* MODAL */}
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Contactez-nous"
                    >
                        <div id="modal">
                            <h2 id="contactTitle" ref={(_subtitle) => (subtitle = _subtitle)}>Contactez-nous</h2>
                            <div id="overview">
                                <p>Vous souhaitez nous contacter ?</p>
                                <p>Veuillez renseigner le formulaire ci-dessous, nous vous répondrons dès que possible</p>
                            </div>
                            <form
                                id="formContact"
                                ref={form}
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    sendEmail(e);
                                }}
                            >
                                <fieldset>
                                    <legend>Vos coordonnées</legend>
                                    <div className="displayInput">
                                        <div className="coordinates">
                                            <div className="coordinates_content">
                                                <label
                                                    for="nom">Nom
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="nom"
                                                    placeholder="DUPOND"
                                                    value={nom}
                                                    onChange={(e) => {
                                                        contact(e.target.value, 'nom');
                                                    }}
                                                    required
                                                />
                                            </div>
                                            <div className="coordinates_content">
                                                <label
                                                    for="prenom">Prénom
                                                </label>
                                                <input
                                                    type="text"
                                                    id="prenom"
                                                    name="prenom"
                                                    placeholder="Jean"
                                                    value={prenom}
                                                    onChange={(e) => {
                                                        contact(e.target.value, 'prenom');
                                                    }}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="coordinates">
                                            <div className="coordinates_content">
                                                <label
                                                    for="telephone">Téléphone
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="telephone"
                                                    name="telephone"
                                                    // pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}"
                                                    value={telephone}
                                                    onChange={(e) => {
                                                        contact(e.target.value, 'telephone');
                                                    }}
                                                    placeholder="01 02 03 04 05"
                                                />
                                            </div>
                                            <div className="coordinates_content">
                                                <label
                                                    for="email">Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="dupond.jean@gmail.com"
                                                    value={email}
                                                    onChange={(e) => {
                                                        contact(e.target.value, 'email');
                                                    }}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Entreprises et partenaires</legend>
                                    <div className="coordinates">
                                        <label
                                            for="entreprise">Si vous êtes un entreprise, veuillez renseigner son nom
                                        </label>
                                        <input
                                            type="text"
                                            id="entreprise"
                                            name="entreprise"
                                            placeholder="Nom de l'entreprise"
                                            value={entreprise}
                                            onChange={(e) => {
                                                contact(e.target.value, 'entreprise');
                                            }}
                                        />
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Votre message</legend>
                                    <div>
                                        <div className="coordinates">
                                            <label
                                                for="message">Quel est votre message ?
                                            </label>
                                            <textarea
                                                type="text"
                                                id="message"
                                                name="message"
                                                placeholder="Bonjour, ..."
                                                value={message}
                                                onChange={(e) => {
                                                    contact(e.target.value, 'message');
                                                }}
                                                required
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="buttons">
                                    <button id="reset" type="exit" onClick={closeModal}>Annuler</button>
                                    <button id="send" type="submit" >Envoyer</button>
                                </div>
                            </form>
                        </div>
                    </Modal>
                </div>
            </div>
            <div id="legal">
                <p><span id="year">{year}</span> - Copyright © Association Valentin Haüy Caen Calvados - Tous droits réservés</p>
                <NavLink to="/mentions-legales">Mentions légales</NavLink>
            </div>
        </footer>
    );
};

export default Footer;