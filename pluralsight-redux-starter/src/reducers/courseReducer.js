import * as types from "../actions/actionTypes";
import initialState from "./initialState";

//Para não ter erro, o reducer precisa ter um valor padrão, para isso vamos usar um [] inicial
//Quer dizer que como não temos curso ainda ele fica com o array vazio
export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.CREATE_COURSE_SUCCESS:
      return [...state, Object.assign({}, action.course)];
    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(
          course => course.id !== action.course.id,
          Object.assign({}, action.course)
        )
      ];
    default:
      return state;
  }
}
