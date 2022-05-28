import React from "react";

import "./legal.scss";

// pictures
import Pin from "../../../../assets/img/list_style.png"
// import { Heart, Mail, MessageCircle, Phone } from "react-feather";
// import { NavLink } from "react-router-dom";

const Legal = () => {
    return (
        <main className="legal">
            <h2>Mentions légales et politique de confidentialité</h2>
            <article>
                <p>
                    L'association  Valentin HAÜY CAEN CALVADOS, soucieuse des droits des individus, notamment au regard des traitements automatisés et dans une volonté de transparence avec ses clients, a mis en place une politique reprenant l’ensemble de ces traitements, des finalités poursuivies par ces derniers ainsi que des moyens d’actions à la disposition des individus afin qu’ils puissent au mieux exercer leurs droits.
                </p>
                <p>
                    Pour toute information complémentaire sur la protection des données personnelles, nous vous invitons à consulter le site : <a href="https://www.cnil.fr" target="_blank" rel="noreferrer" alt="lien vers le site de la CNIL" >https://www.cnil.fr/</a>
                </p>
                <p>
                    La poursuite de la navigation sur ce site vaut acceptation sans réserve des dispositions et conditions d'utilisation qui suivent.
                </p>
                <p>
                    La version actuellement en ligne de ces conditions d'utilisation est la seule opposable pendant toute la durée d'utilisation du site et jusqu'à ce qu'une nouvelle version la remplace.
                </p>
            </article>
            <article>
                <h3 className="title">Article 1 - Mentions légales</h3>

                <h4 className="subtitle">1.1 Site (ci-après « le site »)</h4>

                <a href="https://avhcaen.fr" alt="site de l'association Valentin Haüy" target="_blank" rel="noreferrer">https://www.avhcaen.fr</a>

                <h4 className="subtitle">1.2 Éditeur (ci-après « l'éditeur »)</h4>

                <p>L'association Valentin HAÜY CAEN CALVADOS, dont l'implantation régionale est située :</p>
                <ul className="address">
                    <li>
                        <p>5 rue Roger Bastion</p>
                    </li>
                    <li>
                        <p>14000 CAEN</p>
                    </li>
                    <li>
                        <p>numéro de téléphone : 02 31 85 71 57</p>
                    </li>
                    <li>
                        <p>email :
                            <a href="mailto:
                            comite.caen@avh.asso.fr" alt="email de l'association Valentin Haüy">
                                comite.caen@avh.asso.fr</a>
                        </p>
                    </li>
                    <li>
                        <p>représentée par Jean-Pierre LECLERCQ, Président</p>
                    </li>
                </ul>
                <h4 className="subtitle">1.3 Hébergeur (ci-après « l'hébergeur »)</h4>
                <a href="https://avhcaen.fr" alt="site de l'association Valentin Haüy" target="_blank" rel="noreferrer">www.avhcaen.fr</a> est hébergé par <a href="https://www/ovh.com" alt="site de l'hébergeur OVH" target="_blank" rel="noreferrer">OVH</a>, dont le siège social est situé :
                <ul className="address">
                    <li>
                        <p>2 rue Kellermann</p>
                    </li>
                    <li>
                        <p>BP 80157</p>
                    </li>
                    <li>
                        <p>59053 ROUBAIX Cedex 1</p>
                    </li>
                </ul>
            </article>
            <article>
                <h3 className="title">Article 2 - Accès au site</h3>
                <p>
                    L'accès au site et son utilisation sont réservés à un usage strictement personnel. Vous vous engagez à ne pas utiliser ce site et les informations ou données qui y figurent à des fins commerciales, politiques, publicitaires et pour toute forme de sollicitation commerciale et notamment l'envoi de courriers électroniques non sollicités.
                </p>
            </article>
            <article>
                <h3 className="title">Article 3 - Contenu du site</h3>
                <p>
                    Toutes les marques, photographies, textes, commentaires, illustrations, images animées ou non, séquences vidéo, sons, ainsi que toutes les applications informatiques qui pourraient être utilisées pour faire fonctionner ce site et plus généralement tous les éléments reproduits ou utilisés sur le site sont protégés par les lois en vigueur au titre de la propriété intellectuelle.
                </p>
                <p>
                    Ils sont la propriété pleine et entière de l'éditeur ou de ses partenaires. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y compris les applications informatiques, sans l'accord préalable et écrit de l'éditeur, sont strictement interdites. Le fait pour l'éditeur de ne pas engager de procédure dès la prise de connaissance de ces utilisations non autorisées ne vaut pas acceptation desdites utilisations et renonciation aux poursuites.
                </p>
            </article>
            <article>
                <h3 className="title">Article 4 - Gestion du site</h3>
                <p>

                    Pour la bonne gestion du site, l'éditeur pourra à tout moment :
                </p>
                <ul>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        suspendre, interrompre ou limiter l'accès à tout ou partie du site, réserver l'accès au site, ou à certaines parties du site, à une catégorie déterminée d'internautes ;
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        supprimer toute information pouvant en perturber le fonctionnement ou entrant en contravention avec les lois nationales ou internationales ;
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        suspendre le site afin de procéder à des mises à jour.
                    </li>
                </ul>
            </article>
            <article>
                <h3 className="title">Article 5 - Responsabilités</h3>
                <p>
                    La responsabilité de l'éditeur ne peut être engagée en cas de défaillance, panne, difficulté ou interruption de fonctionnement, empêchant l'accès au site ou à une de ses fonctionnalités.
                </p>
                <p>
                    Le matériel de connexion au site que vous utilisez est sous votre entière responsabilité. Vous devez prendre toutes les mesures appropriées pour protéger votre matériel et vos propres données notamment d'attaques virales par Internet. Vous êtes par ailleurs seul responsable des sites et données que vous consultez.
                </p>
                <p>
                    L'éditeur ne pourra être tenu responsable en cas de poursuites judiciaires à votre encontre :
                </p>
                <ul>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        du fait de l'usage du site ou de tout service accessible via Internet ;
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        du fait du non-respect par vous des présentes conditions générales.
                    </li>
                </ul>
                <p>
                    L'éditeur n'est pas responsable des dommages causés à vous-même, à des tiers et/ou à votre équipement du fait de votre connexion ou de votre utilisation du site et vous renoncez à toute action contre lui de ce fait.
                </p>
                <p>
                    Si l'éditeur venait à faire l'objet d'une procédure amiable ou judiciaire en raison de votre utilisation du site, il pourra se retourner contre vous pour obtenir l'indemnisation de tous les préjudices, sommes, condamnations et frais qui pourraient découler de cette procédure.
                </p>
            </article>
            <article>
                <h3 className="title">Article 6 - Liens hypertextes</h3>
                <p>
                    La mise en place par les utilisateurs de tous liens hypertextes vers tout ou partie du site est autorisée par l'éditeur. Tout lien devra être retiré sur simple demande de l'éditeur.
                </p>
                <p>
                    Toute information accessible via un lien vers d'autres sites n'est pas publiée par l'éditeur. L'éditeur ne dispose d'aucun droit sur le contenu présent dans ledit lien.
                </p>
            </article>
            <article>
                <h3 className="title">Article 7 - Collecte et protection des données</h3>
                <p>
                    Vos données sont collectées par l'association  Valentin HAÜY CAEN CALVADOS.
                    Une donnée à caractère personnel désigne toute information concernant une personne physique identifiée ou identifiable (personne concernée) ; est réputée identifiable une personne qui peut être identifiée, directement ou indirectement, notamment par référence à un nom, un numéro d'identification ou à un ou plusieurs éléments spécifiques, propres à son identité physique, physiologique, génétique, psychique, économique, culturelle ou sociale.
                </p>
                <p>
                    Les informations personnelles pouvant être recueillies sur le site sont principalement utilisées par l'éditeur pour la gestion des relations avec vous, et le cas échéant pour le traitement de vos commandes.
                </p>
                <p>
                    Les données personnelles collectées sont les suivantes :
                </p>
                <ul>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        nom et prénom
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        adresse
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        adresse mail
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        numéro de téléphone
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        données financières : dans le cadre du paiement des produits et prestations proposés sur la Plateforme, celle-ci enregistre des données financières relatives à la carte de crédit de l'utilisateur.
                    </li>
                </ul>
            </article>
            <article>
                <h3 className="title">Article 8 - Droit d’accès, de rectification et de déréférencement de vos données</h3>
                <p>
                    En application de la réglementation applicable aux données à caractère personnel, les utilisateurs disposent des droits suivants :
                </p>
                <ul>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        le droit d’accès : ils peuvent exercer leur droit d'accès, pour connaître les données personnelles les concernant, en écrivant à l'adresse électronique ci-dessous mentionnée. Dans ce cas, avant la mise en œuvre de ce droit, la Plateforme peut demander une preuve de l'identité de l'utilisateur afin d'en vérifier l'exactitude ;
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        le droit de rectification : si les données à caractère personnel détenues par la Plateforme sont inexactes, ils peuvent demander la mise à jour des informations ;
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        le droit de suppression des données : les utilisateurs peuvent demander la suppression de leurs données à caractère personnel, conformément aux lois applicables en matière de protection des données ;
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        le droit à la limitation du traitement : les utilisateurs peuvent de demander à la Plateforme de limiter le traitement des données personnelles conformément aux hypothèses prévues par le RGPD ;
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        le droit de s’opposer au traitement des données : les utilisateurs peuvent s’opposer à ce que leurs données soient traitées conformément aux hypothèses prévues par le RGPD ;
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        le droit à la portabilité : ils peuvent réclamer que la Plateforme leur remette les données personnelles qu'ils ont fournies pour les transmettre à une nouvelle Plateforme. Vous pouvez exercer ce droit en nous contactant, à l’adresse suivante : 5 rue Roger Bastion 14000 CAEN, ou par mail à l'adresse <a href="mailto:comite.caen@avh.asso.fr">comite.caen@avh.asso.fr</a> ;
                    </li>
                </ul>
                <p>
                    Toute demande doit être accompagnée de la photocopie d’un titre d’identité en cours de validité signé et faire mention de l’adresse à laquelle l'éditeur pourra contacter le demandeur. La réponse sera adressée dans le mois suivant la réception de la demande. Ce délai d'un mois peut être prolongé de deux mois si la complexité de la demande et/ou le nombre de demandes l'exigent.
                </p>
                <p>
                    De plus, et depuis la loi n°2016-1321 du 7 octobre 2016, les personnes qui le souhaitent, ont la possibilité d’organiser le sort de leurs données après leur décès. Pour plus d’information sur le sujet, vous pouvez consulter le site Internet de la CNIL : <a href="https://www.cnil.fr/" target="_blank" rel="noreferrer">https://www.cnil.fr</a>.
                </p>
                <p>
                    Les utilisateurs peuvent aussi introduire une réclamation auprès de la CNIL sur le site de la CNIL : <a href="https://www.cnil.fr/" target="_blank" rel="noreferrer">https://www.cnil.fr</a>.
                </p>
                <p>
                    Nous vous recommandons de nous contacter dans un premier temps avant de déposer une réclamation auprès de la CNIL, car nous sommes à votre entière disposition pour régler votre problème.
                </p>
            </article>
            <article>
                <h3 className="title">Article 9 - Utilisation des données</h3>
                <p>
                    Les données personnelles collectées auprès des utilisateurs ont pour objectif la mise à disposition des services de la Plateforme, leur amélioration et le maintien d'un environnement sécurisé. La base légale des traitements est  l’exécution du contrat entre l’utilisateur et la Plateforme. Plus précisément, les utilisations sont les suivantes :
                </p>
                <ul>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        accès et utilisation de la Plateforme par l'utilisateur ;
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        gestion du fonctionnement et optimisation de la Plateforme ;
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        mise en œuvre d'une assistance utilisateurs ;
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        vérification, identification et authentification des données transmises par l'utilisateur ;
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        personnalisation des services en affichant des publicités en fonction de l'historique de navigation de l'utilisateur, selon ses préférences ;
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        prévention et détection des fraudes, malwares (malicious softwares ou logiciels malveillants) et gestion des incidents de sécurité ;
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        gestion des éventuels litiges avec les utilisateurs ;
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        envoi d'informations commerciales et publicitaires, en fonction des préférences de l'utilisateur ;
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        organisation des conditions d'utilisation des Services de paiement.
                    </li>
                </ul>
            </article>
            <article>
                <h3 className="title">Article 10 - Politique de conservation des données</h3>
                <p>
                    La Plateforme conserve vos données pour la durée nécessaire pour vous fournir ses services ou son assistance.
                </p>
                <p>
                    Dans la mesure raisonnablement nécessaire ou requise pour satisfaire aux obligations légales ou réglementaires, régler des litiges, empêcher les fraudes et abus ou appliquer nos modalités et conditions, nous pouvons également conserver certaines de vos informations si nécessaire, même après que vous ayez fermé votre compte ou que nous n'ayons plus besoin pour vous fournir nos services.
                </p>
            </article>
            <article>
                <h3 className="title">Article 11 - Partage des données personnelles avec des tiers</h3>
                <p>
                    Les données personnelles peuvent être partagées avec des sociétés tierces exclusivement dans l’Union européenne, dans les cas suivants :
                </p>
                <ul>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        quand l'utilisateur utilise les services de paiement, pour la mise en œuvre de ces services, la Plateforme est en relation avec des sociétés bancaires et financières tierces avec lesquelles elle a passé des contrats ;
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        lorsque l'utilisateur publie, dans les zones de commentaires libres de la Plateforme, des informations accessibles au public ;
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        quand l'utilisateur autorise le site web d'un tiers à accéder à ses données ;
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        quand la Plateforme recourt aux services de prestataires pour fournir l'assistance utilisateurs, la publicité et les services de paiement. Ces prestataires disposent d'un accès limité aux données de l'utilisateur, dans le cadre de l'exécution de ces prestations, et ont l'obligation contractuelle de les utiliser en conformité avec les dispositions de la réglementation applicable en matière protection des données à caractère personnel ;
                    </li>
                    <li>
                        <img src={Pin} alt="Pin" className="pin" />
                        si la loi l'exige, la Plateforme peut effectuer la transmission de données pour donner suite aux réclamations présentées contre la Plateforme et se conformer aux procédures administratives et judiciaires.
                    </li>

                </ul>
            </article>
            <article>
                <h3 className="title">Article 12 - Offres commerciales</h3>
                <p>
                    Vous êtes susceptible de recevoir des offres commerciales de l'éditeur. Si vous ne le souhaitez pas, veuillez cliquer sur le lien suivant : <a href="mailto:comite.caen@avh.asso.fr">comite.caen@avh.asso.fr</a>.
                </p>
                <p>
                    Vos données sont susceptibles d’être utilisées par les partenaires de l'éditeur à des fins de prospection commerciale, si vous ne le souhaitez pas, veuillez cliquer sur le lien suivant : <a href="mailto:comite.caen@avh.asso.fr">comite.caen@avh.asso.fr</a>.
                </p>
                <p>
                    Si, lors de la consultation du site, vous accédez à des données à caractère personnel, vous devez vous abstenir de toute collecte, de toute utilisation non autorisée et de tout acte pouvant constituer une atteinte à la vie privée ou à la réputation des personnes. L'éditeur décline toute responsabilité à cet égard.
                </p>
                <p>
                    Les données sont conservées et utilisées pour une durée conforme à la législation en vigueur.
                </p>
            </article>
            <article>
                <h3 className="title">Article 13 - Cookies</h3>
                <p className="question">
                    Qu’est-ce qu’un « cookie » ?
                </p>
                <p className="answer">
                    Un « Cookie » ou traceur est un fichier électronique déposé sur un terminal (ordinateur, tablette, smartphone,…) et lu par exemple lors de la consultation d'un site internet, de la lecture d'un courrier électronique, de l'installation ou de l'utilisation d'un logiciel ou d'une application mobile et ce, quel que soit le type de terminal utilisé (source : <a href="https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi" target="_blank" rel="noreferrer">https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi</a>.
                </p>
                <p className="answer">
                    Le site peut collecter automatiquement des informations standards. Toutes les informations collectées indirectement ne seront utilisées que pour suivre le volume, le type et la configuration du trafic utilisant ce site, pour en développer la conception et l'agencement et à d'autres fins administratives et de planification et plus généralement pour améliorer le service que nous vous offrons.
                </p>
                <p className="answer">
                    Le cas échéant, des « cookies » émanant de l'éditeur du site et/ou des sociétés tiers pourront être déposés sur votre terminal, avec votre accord. Dans ce cas, lors de la première navigation sur ce site, une bannière explicative sur l’utilisation des « cookies » apparaîtra. Avant de poursuivre la navigation, le client et/ou le prospect devra accepter ou refuser l’utilisation desdits « cookies ». Le consentement donné sera valable pour une période de treize (13) mois. L'utilisateur a la possibilité de désactiver les cookies à tout moment.
                </p>
                <p>
                    {/* Les cookies suivants sont présents sur ce site :
                    La durée de vie de ces cookies est de treize mois. */}
                    Pour le moment, aucun cookie n'est présent sur ce site.
                </p>
            </article>
            <article>
                <h3 className="title">Article 14 - Photographies et représentation des produits</h3>
                <p>
                    Les photographies de produits, accompagnant leur description, ne sont pas contractuelles et n'engagent pas l'éditeur.
                </p>
            </article>
            <article>
                <h3 className="title">Article 15 - Loi applicable</h3>
                <p>
                    Les présentes conditions d'utilisation du site sont régies par la loi française et soumises à la compétence des tribunaux du siège social de l'éditeur, sous réserve d'une attribution de compétence spécifique découlant d'un texte de loi ou réglementaire particulier.
                </p>
            </article>
            <article>
                <h3 className="title">Article 16 - Contactez-nous</h3>
                <p>
                    Pour toute question, information sur les produits présentés sur le site, ou concernant le site lui-même, vous pouvez laisser un message à l'adresse suivante : <a href="mailto:comite.caen@avh.asso.fr">comite.caen@avh.asso.fr</a>.
                </p>
            </article>
            {/* Ces mentions légales et politique de confidentialité ont été créées sur le site Rocket Lawyer. */}
        </main>
    );
};

export default Legal;