import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CourseList from './CoursesList';

class CoursesPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadCourses().catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToPros(state) {
  return {
    courses: state.courses
  };
}

function mapDispatchToPros(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(
  mapStateToPros,
  mapDispatchToPros
)(CoursesPage);
