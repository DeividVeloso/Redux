import React from "react";
import expect from "expect";
import { mount, shallow } from "enzyme";
import { ManageCoursePage } from "./ManageCoursePage";

describe("Manage Course Page", () => {
  it("sets error message when trying to save empty title", () => {
    const props = {
      course: {
        id: "",
        watchHref: "",
        title: "",
        authorId: "",
        length: "",
        category: ""
      },
      authors: [],
      actions: {
        saveCourse: () => {
          return Promise.resolve();
        }
      }
    };

    const wrapper = mount(<ManageCoursePage {...props} />);
    const saveButton = wrapper.find("input").last();
    //Testando para ver se é o input certo, pois só tem um com tipo submit
    expect(saveButton.prop("type")).toBe("submit");
    saveButton.simulate("click");
  });
});
