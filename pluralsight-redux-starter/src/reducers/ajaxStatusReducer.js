import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const actionTypeEndsInSucess = type => {
  return type.substring(type.length - 8) == "_SUCCESS";
};

export default (state = initialState.ajaxCallsInProgress, action) => {
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (actionTypeEndsInSucess(action.type)) {
    return state - 1;
  }
  return state;
};
