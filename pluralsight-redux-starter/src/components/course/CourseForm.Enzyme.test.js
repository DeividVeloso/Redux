import expect from "expect"; //Assertion Lib
import React from "react";
import { mount, shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import CourseForm from "./CourseForm";

//Mock CourseForm
const setup = saving => {
  //Criando as props do component CourseForm
  let props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props} />);
};

describe("CourseForm via Enzyme", () => {
  it("renders form and h1", () => {
    const wrapper = setup(false);
    expect(wrapper.find("form").length).toBe(1);
    expect(wrapper.find("h1").text()).toEqual("Manage Course");
  });
  it('save button is labeled "Save"', () => {
    const wrapper = setup(false);
    expect(wrapper.find("input").props().value).toBe("Save");
  });
  it('save button is labeled "Saving"', () => {
    const wrapper = setup(true);
    expect(wrapper.find("input").props().value).toBe("Saving...");
  });
});
