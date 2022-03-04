import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

//styles
import './styles/index.scss';

//? imports components

// Main components
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Main from './components/Main';

// Navigate components
import Caen from './components/Avh/Caen';
import Paris from './components/Avh/Paris';
import Actuality from './components/Actuality';
import Braille from './components/Activity/Braille';
import Informatique from './components/Activity/Informatique';
import Cls from './components/Activity/Cls';
import Formation from './components/Activity/Formation';
import Mp from './components/MecenatPartenariat';
import Book from './components/Shop/Book';
import Equipment from './components/Shop/Equipment';
import Come from './components/Other/Come';
import Give from './components/Other/Give';
import Contact from './components/Other/Contact';
import Map from './components/Map';
import RightNav from './components/Layout/RightNav';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <RightNav />
      <Routes>
        <Route
          path="/"
          element={<Main />}
          exact
        />
        <Route
          path="/caen"
          element={<Caen />}
          exact
        />
        <Route
          path="/paris"
          element={<Paris />}
          exact
        />
        <Route
          path="/actualites"
          element={<Actuality />}
          exact
        />
        <Route
          path="/activites/braille"
          element={<Braille />}
          exact
        />
        <Route
          path="/activites/informatique"
          element={<Informatique />}
          exact
        />
        <Route
          path="/activites/formation"
          element={<Formation />}
          exact
        />
        <Route
          path="/activites/cls"
          element={<Cls />}
          exact
        />
        <Route
          path="/mecenat-partenariat"
          element={<Mp />}
          exact
        />
        <Route
          path="/boutique/catalogue"
          element={<Book />}
          exact
        />
        <Route
          path="/boutique/materiel"
          element={<Equipment />}
          exact
        />
        <Route
          path="/come"
          element={<Come />}
          exact
        />
        <Route
          path="/give"
          element={<Give />}
          exact
        />
        <Route
          path="/contact"
          element={<Contact />}
          exact
        />
        <Route
          path="/find-us"
          element={<Map />}
          exact
        />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
