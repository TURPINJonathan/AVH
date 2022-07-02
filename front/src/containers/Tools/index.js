import { connect } from 'react-redux';

import Footer from '../../components/Layout/Footer';

import { contact, showFlash } from '../../actions/contact';

const mapStateToProps = state => ({
    nom: state.contact.nom,
    prenom: state.contact.prenom,
    telephone: state.contact.telephone,
    email: state.contact.email,
    entreprise: state.contact.entreprise,
    objet: state.contact.objet,
    message: state.contact.message,
    // FLASH MESSAGE
    flash: state.contact.flash,
});

const mapDispatchToProps = dispatch => ({
    contact: (newvalue, identifier) => dispatch(contact(newvalue, identifier)),
    showFlash: (newvalue) => dispatch(showFlash(newvalue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);