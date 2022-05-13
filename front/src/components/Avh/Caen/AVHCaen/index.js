import React from "react";

import './avhCaen.scss';

import loading from '../../../../assets/img/page_developping.png';

const AVHCaen = () => {
    return (
        <main className="AVHCaen">
            <h2>Présentation de l'AVH Caen Calvados</h2>
            <article>
                <p>
                    L’Association Valentin HAÜY Caen est née en 1948.
                </p>
                <p>
                    Sa mission est de se faire connaître des déficients visuels afin de les accueillir, de les écouter et de leur apporter un accompagnement ainsi que les moyens nécessaires pour accroître leur autonomie et leur rendre la vie quotidienne plus facile.
                </p>
                <p>
                    À cet effet, l’AVH Caen Calvados propose différentes formations :
                </p>
                <p className="definition">
                    Apprentissage du braille
                </p>
                <div className="double_picture">
                    <img src="https://via.placeholder.com/150" alt="Machine PERKINS" />
                    <img src="https://via.placeholder.com/150" alt="Lecture d'un livre en braille" />
                </div>
            </article>
            <article>
                <h3>La machine PERKINS</h3>
                <p>
                    Les six touches correspondent aux six touches du domino Braille.
                </p>
                <p>
                    Apprentissage de l’informatique et de logiciels adaptés aux déficients visuels ;
                </p>
                <p className="definition">
                    Utilisation de matériel spécialisé, … par exemple le Lecteur Victor Stractus est le lecteur de livres audios le plus populaire car il permet d'écouter tout type de format (DAISY, audio, MP3) à partir de CD-Rom ou DVD.
                </p>
                <img src="https://via.placeholder.com/150" alt="Machine PERKINS" />
            </article>
            <article>
                <h3>L'AVH Caen, c'est aussi des activités</h3>
                <p className="definition">
                    Sportives (voile adaptée, tir à l'arc adapté, ...)
                </p>
                <div className="picture_comment">
                    <img src="https://via.placeholder.com/150" alt="Soufiane, adhérent non voyant de l'AVH Caen, à l'entrainement de tir à l'arc" />
                    <p>
                        Soufiane, adhérent non voyant de l'AVH Caen, à l'entrainement de tir à l'arc.
                    </p>
                </div>
                <div className="picture_comment">
                    <img src="https://via.placeholder.com/150" alt="L'équipage du défi voile à l'entrainement sur le bâteau, avec Momo" />
                    <p>
                        L'équipage du défi voile à l'entrainement sur le bâteau, avec Momo.
                    </p>
                </div>
                <p className="definition">
                    Culturelles et de loisirs (visites de musées, d’expositions, de sites historiques, pièces de théâtres en audiodescription, repas gastronomiques …)
                </p>
                <div className="picture_comment">
                    <img src="https://via.placeholder.com/150" alt="Adhérents et bénévoles de l'AVH Caen à la visite tactile des coulisses précédent la pièce de théâtre La machine du Turing" />
                    <p>
                        Adhérents et bénévoles de l'AVH Caen à la visite tactile des coulisses précédent la pièce de théâtre "La machine du Turing".
                    </p>
                </div>
                <p className="definition">Des permanences hebdomadaires, moments de convivialité (quizz, jeux, goûters, ...)</p>
                <div className="picture_comment">
                    <img src="https://via.placeholder.com/150" alt="Adhérents et bénévoles de l'AVH Caen autour d'une table" />
                </div>
                <div id="join_us">
                    <p>
                        Vous aimeriez être des nôtres ...
                    </p>
                    <p>
                        EH BIEN, REJOINGNEZ-NOUS !
                    </p>
                </div>
            </article>

        </main>
    );
}

export default AVHCaen;