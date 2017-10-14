import * as types from './actionTypes';

export const beginAjaxCall = () => {
  console.log("action")
  return {
    type: types.BEGIN_AJAX_CALL
  }
}
