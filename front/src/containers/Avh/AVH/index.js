import { connect } from "react-redux";
import Avh from "../../../components/Avh/AVH";
import { fetchNational } from "../../../actions/national";

const mapStateToProps = (state) => {
    return {
        national: state.national.national,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadNational: () => dispatch(fetchNational()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Avh);