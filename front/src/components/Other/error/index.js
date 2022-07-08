import React from "react";

// STYLE
import './error.scss';

const Error = () => {
    return (
        <main className="error">
            <h2>ERREUR 404</h2>
            <h3>La page que vous recherchez n'existe pas</h3>
            <p>Nous vous invitons à revenir à la page d'accueil en cliquant sur le logo ci-dessous,</p>
            <a href="https://avhcaen.fr/" target="_blank" rel="noreferrer">
                <img src="https://avhcaen.fr/static/media/logo.d272c8bbb18a1edb56ad.png" alt="logo de l'association renvoyant vers la page d'accueil" />
            </a>
            <p>ou à nous envoyer votre recherche en nous contactant grâce au bouton <em>Contactez-nous</em>, tout en bas à droite.</p>
        </main>
    );
}

export default Error;