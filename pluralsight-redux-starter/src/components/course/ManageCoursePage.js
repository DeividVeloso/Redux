import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "./../../actions/courseActions";
import CourseForm from "./CourseForm";
import { browserHistory } from "react-router";
import toastr from "toastr";
import { authorsFormattedForDropDown } from "../../selectors/selectors";
export class ManageCoursePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {},
      saving: false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      console.log("nextProps", nextProps.course);
      this.setState({ course: Object.assign({}, nextProps.course) });
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    this.setState({ course: course });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success("Course saved");
    browserHistory.push("/courses");
  }

  courseFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.course.title.length < 5) {
      errors.title = "Title must be at least 5 characters.";
      formIsValid = false;
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  saveCourse(event) {
    event.preventDefault();

    if (!this.courseFormIsValid()) {
      return;
    }

    this.setState({ saving: true });
    this.props.actions
      .saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({ saving: false });
      });
  }

  render() {
    return (
      <CourseForm
        onSave={this.saveCourse}
        onChange={this.updateCourseState}
        allAuthors={this.props.authors}
        course={this.state.course}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Fazendo isso o React Router fica disponivel nesse componente através do this.context.router.
ManageCoursePage.contextType = {
  router: PropTypes.object
};

const getCourseById = (courses, id) => {
  const course = courses.filter(course => course.id == id);
  console.log("course", course);
  if (course.length) return course[0]; //Já que o filter sempre retorna um arrray é só pegar o primeiro item
  return null;
};

const mapStateToProps = (state, ownProps) => {
  const courseId = ownProps.params.id; //vem do caminho '/course/:id'
  let course = {
    id: "",
    watchHref: "",
    title: "",
    authorId: "",
    length: "",
    category: ""
  };



  if (courseId) {
    course = getCourseById(state.courses, courseId);
  }

  return {
    course: course,
    authors: authorsFormattedForDropDown(state.authors)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
