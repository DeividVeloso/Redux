import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from './../../actions/courseActions';

class ManageCoursePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ();
    }
}

ManageCoursePage.propTypes = {

};

mapStateToProps = (state, ownProps) => {
    return { state: state }
}

mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage); 
