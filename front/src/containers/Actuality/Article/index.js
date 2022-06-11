import { connect } from 'react-redux';
import Article from '../../../components/Actuality/Article';
// import Actuality from '../../components/Actuality';
// import { fetchActuality } from '../../actions/actuality';

const mapStateToProps = (state) => {
    return {
        oneActuality: state.actuality.actuality,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // loadActuality: () => dispatch(fetchActuality()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);