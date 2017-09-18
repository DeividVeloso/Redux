import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = { course: { title: '' } };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });
    }

    onClickSave(){
        //this.props.dispatch(courseActions.createCourse(this.state.course));
        this.props.createCourse(this.state.course);
    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                {this.props.courses.map((course, index) => this.courseRow(course,index))}
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}
                />
                <input
                    type="submit"
                    onClick={this.onClickSave}
                    value="Save"
                />
            </div>
        );
    }
}

/*
Essa função retorna as props que queremos expor no componente. São props que vem dos reducers que vem do Redux Store.
Colocando courses, vou ter acesso no meu componente dessa forma this.props.courses.
1° state representa o state que está dentro do redux store
2° ownProps ele da acesso as propriedades desse componente container
*/
function mapStateToProps(state, ownProps){
    debugger;
    return {
        courses: state.courses, //Vem do reducer courseReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createCourse: course => dispatch(courseActions.createCourse(course))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); 