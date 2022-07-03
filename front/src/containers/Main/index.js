import { connect } from "react-redux";
import Main from "../../components/Main";
import { fetchMission, fetchActuality } from "../../actions/main";
import { showFlash } from "../../actions/contact";

const mapStateToProps = (state) => {
    return {
        mission: state.main.mission,
        actuality: state.main.actuality,
        flash: state.contact.flash,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadMission: () => dispatch(fetchMission()),
        loadActuality: () => dispatch(fetchActuality()),
        showFlash: (newvalue) => dispatch(showFlash(newvalue)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);