import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Heart, Mail, MessageCircle, Phone } from "react-feather";
import Modal from 'react-modal';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

// STYLE
import "./contact.scss";

// PICTURES
// import Logo from "../../../assets/img/logo.png";

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
    },
};

// Modal.setAppElement('#contact');

const Contact = ({
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
                showFlash('error');
            });
        e.target.reset();
    }

    return (
        <main id="contact">
            <h2>Contactez-nous</h2>
            {/* <img className="loading" src={loading} alt="Page en cours de construction" /> */}
            <p>Vous souhaitez nous contacter ?</p>
            <div>
                <button onClick={openModal}>Contactez-nous</button>
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
                        <form>
                            <fieldset>
                                <legend>Vos coordonnées</legend>
                                <div className="displayInput">
                                    <div className="coordinates">
                                        <div className="coordinates_content">
                                            <label
                                                for="name">Nom
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="DUPOND"
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
                                                pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}"
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
                                    />
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Votre message</legend>
                                <div>
                                    <div className="coordinates">
                                        <label
                                            for="message">Objet de votre message
                                        </label>
                                        <input
                                            type="text"
                                            id="message"
                                            name="message"
                                            placeholder="Je souhaite..."
                                        />
                                    </div>
                                    <div className="coordinates">
                                        <label
                                            for="message">Quel est votre message ?
                                        </label>
                                        <textarea
                                            type="text"
                                            id="message"
                                            name="message"
                                            placeholder="Bonjour, ..."
                                        />
                                    </div>
                                </div>
                            </fieldset>
                            <div className="buttons">
                                <button id="reset" onClick={closeModal}>Annuler</button>
                                <button id="send">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        </main>
    );
}

export default Contact;