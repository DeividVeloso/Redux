import * as types from './actionTypes';

export const beginAjaxCall = () => {
  console.log("action")
  return {
    type: types.BEGIN_AJAX_CALL
  }
}

export const ajaxCallError = () => {
  console.log("action")
  return {
    type: types.AJAX_CALL_ERROR
  }
}
