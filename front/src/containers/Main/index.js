import { connect } from "react-redux";
import Main from "../../components/Main";
import { fetchMission } from "../../actions/main";

const mapStateToProps = (state) => {
    return {
        mission: state.main.mission,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadMission: () => dispatch(fetchMission()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);