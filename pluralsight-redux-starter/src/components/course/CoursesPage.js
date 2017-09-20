import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

/*
Essa função retorna as props que queremos expor no componente. São props que vem dos reducers que vem do Redux Store.
Colocando courses, vou ter acesso no meu componente dessa forma this.props.courses.
1° state representa o state que está dentro do redux store
2° ownProps ele da acesso as propriedades desse componente container
*/
function mapStateToProps(state, ownProps) {
  debugger;
  return {
    courses: state.courses, //Vem do reducer courseReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //Desse jeito ele pega totos as minhas actions dentro do courseActions
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
