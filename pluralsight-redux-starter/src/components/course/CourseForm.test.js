import expect from "expect"; //Assertion Lib
import React from "react";
import TestUtils from "react-addons-test-utils";
import CourseForm from "./CourseForm";

//Mock CourseForm
const setup = (saving) => {
  //Criando as props do component CourseForm
  let props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props} />); //Passando as props criadas acima
  let output = renderer.getRenderOutput(); //Pega o component renderizado no DOM

  return {
    props,
    output,
    renderer
  };
};

describe("CourseForm via React Test Utils", () => {
  it("render form and h1", () => {
    const { output } = setup();
    expect(output.type).toBe("form"); //PEga o primeiro elemento do HTML
    let [h1] = output.props.children; //Pega o segundo elemento do HTML
    expect(h1.type).toBe("h1");
  });

  it('save button is labeled "Save" when not saving', () => {
    const { output } = setup(false);
    const submitButton = output.props.children[5]; //Pega o input button
    expect(submitButton.props.value).toBe("Save");
  });

  it('save button is labeled "Saving" when not saving', () => {
    const { output } = setup(true);
    const submitButton = output.props.children[5]; //Pega o input button
    expect(submitButton.props.value).toBe("Saving...");
  });
});
