import expect from "expect";
import * as courseActions from "./courseActions";
import * as types from "./actionTypes";

import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";

describe("Course Actions", () => {
  describe("createCourseSuccess", () => {
    it("should create a CREATE_COURSE_SUCCESS action", () => {
      const course = { id: "clean-code", title: "Clean Code" };
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };
      const action = courseActions.createCourseSuccess(course);
      expect(action).toEqual(expectedAction);
    });
  });
});

//A nossa store precisa de middleware que é o thunk
const middleware = [thunk];
const mockStore = configureMockStore(middleware); //passando meu middleware para minha store

describe("Async Actions", () => {
  //Depois de cada chamada do teste ele limpa as requisições em memórian
  afterEach(() => {
    nock.cleanAll();
  });

  //Esse done é uma callback function usado para avisar o Moch.
  //Chamar essa função quando a chamada assincrona estiver completa
  it("should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses", done => {
    // nock("http://loaclhost:300") //passar a url de produção
    //   .get("/course") //Endpoint do meu método
    //   .reply(200, {
    //     body: { course: [{ id: 1, firstNmae: "Cory", lastName: "House" }] }
    //   });
    const expectedActions = [
      { type: types.BEGIN_AJAX_CALL },
      { type: types.LOAD_COURSES_SUCCESS }
    ];

    const store = mockStore({ courses: [] }, expectedActions);
    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });
  });
});
