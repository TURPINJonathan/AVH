import { connect } from 'react-redux';

import Footer from '../../components/Layout/Footer';

import { contact } from '../../actions/contact';

const mapStateToProps = state => ({
    nom: state.contact.nom,
    prenom: state.contact.prenom,
    telephone: state.contact.telephone,
    email: state.contact.email,
    entreprise: state.contact.entreprise,
    objet: state.contact.objet,
    message: state.contact.message,
});

const mapDispatchToProps = dispatch => ({
    contact: (newvalue, identifier) => dispatch(contact(newvalue, identifier)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);