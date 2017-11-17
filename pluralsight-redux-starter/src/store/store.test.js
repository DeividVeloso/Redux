import expect from "expect";
import { createStore } from "redux";
import rootReducer from "../reducers";
import initialState from "../reducers/initialState";
import * as actions from "../actions/courseActions";
import * as types from "../actions/actionTypes";

describe("Store", () => {
  const store = createStore(rootReducer, initialState);
  const course = {
    title: "Clean Code"
  };

  const action = actions.createCourseSuccess(course);
  store.dispatch(action);

  const actual = store.getState().courses[0];
  const expected = {
    title: "Clean Code"
  };

  expect(actual).toEqual(expected);
});
