import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses }
}

export function loadCourses() {
  //Essa função vai encapsular todas as funções aqui no thunk
  return function (dispatch) {
      return courseApi.getAllCourses().then(courses => {
        //dispara para o componente o resultado da API na ação
        dispatch(loadCoursesSuccess(courses))
      }).catch(error => {
        throw(error);
      })
  }
}
