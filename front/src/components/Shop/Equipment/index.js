import React from "react";

// STYLE
import './equipment.scss';

const Equipment = () => {
    return (
        <main className="equipment">
            <h2>Le matériel</h2>
            <section className="equipment__container">
                <article className="equipment__item">
                    <h3>Nom du matériel</h3>
                    <aside className="equipment__item__description">
                        <img src="https://via.placeholder.com/300x300" alt="" />
                        <div className="equipment__item__description__text">
                            <p className="overview">Overview du matériel</p>
                            <p className="price">Prix : 0,00 €</p>
                            <button>Détail</button>
                        </div>
                    </aside>
                </article>
                <article className="equipment__item">
                    <h3>Nom du matériel</h3>
                    <aside className="equipment__item__description">
                        <img src="https://via.placeholder.com/300x300" alt="" />
                        <div className="equipment__item__description__text">
                            <p className="overview">Overview du matériel</p>
                            <p className="price">Prix : 0,00 €</p>
                            <button>Détail</button>
                        </div>
                    </aside>
                </article>
                <article className="equipment__item">
                    <h3>Nom du matériel</h3>
                    <aside className="equipment__item__description">
                        <img src="https://via.placeholder.com/300x300" alt="" />
                        <div className="equipment__item__description__text">
                            <p className="overview">Overview du matériel</p>
                            <p className="price">Prix : 0,00 €</p>
                            <button className="button">Détail</button>
                        </div>
                    </aside>
                </article>
                <article className="equipment__item">
                    <h3>Nom du matériel</h3>
                    <aside className="equipment__item__description">
                        <img src="https://via.placeholder.com/300x300" alt="" />
                        <div className="equipment__item__description__text">
                            <p className="overview">Overview du matériel</p>
                            <p className="price">Prix : 0,00 €</p>
                            <button>Détail</button>
                        </div>
                    </aside>
                </article>
                <article className="equipment__item">
                    <h3>Nom du matériel</h3>
                    <aside className="equipment__item__description">
                        <img src="https://via.placeholder.com/300x300" alt="" />
                        <div className="equipment__item__description__text">
                            <p className="overview">Overview du matériel</p>
                            <p className="price">Prix : 0,00 €</p>
                            <button>Détail</button>
                        </div>
                    </aside>
                </article>
                <article className="equipment__item">
                    <h3>Nom du matériel</h3>
                    <aside className="equipment__item__description">
                        <img src="https://via.placeholder.com/300x300" alt="" />
                        <div className="equipment__item__description__text">
                            <p className="overview">Overview du matériel</p>
                            <p className="price">Prix : 0,00 €</p>
                            <button>Détail</button>
                        </div>
                    </aside>
                </article>
            </section>
        </main>
    );
}

export default Equipment;