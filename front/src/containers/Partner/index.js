import { connect } from "react-redux";
import Partner from "../../components/MecenatPartenariat";
import { fetchPartner } from "../../actions/partner";

const mapStateToProps = (state) => {
    return {
        partner: state.partner.partner,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPartner: () => dispatch(fetchPartner()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Partner);