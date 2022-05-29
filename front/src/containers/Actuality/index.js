import { connect } from 'react-redux';

import Actuality from '../../components/Actuality';
import { fetchActuality } from '../../actions/actuality.js';

const mapStateToProps = (state) => {
    return {
        actuality: state.actuality.actuality,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadActuality: () => dispatch(fetchActuality()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Actuality);