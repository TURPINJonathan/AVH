import { connect } from "react-redux";
import Main from "../../components/Main";
import { fetchMission, fetchActuality } from "../../actions/main";

const mapStateToProps = (state) => {
    return {
        mission: state.main.mission,
        actuality: state.main.actuality,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadMission: () => dispatch(fetchMission()),
        loadActuality: () => dispatch(fetchActuality()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);