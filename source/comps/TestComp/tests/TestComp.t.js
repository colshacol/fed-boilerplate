import React from "react";
import { shallow, mount, render } from "enzyme";
import { renderJSX, JSX } from "jsx-test-helpers";
import TestComp from "../TestComp";

describe("<TestComp/>", () => {
  it("Should render caps text when caps={true}.", () => {
    const wrapper = shallow(<TestComp caps={true} />);
    expect(wrapper.text()).toEqual("THIS IS TESTCOMP.");
  });
  it("Should render non-caps text when caps={false}.", () => {
    const wrapper = shallow(<TestComp caps={false} />);
    expect(wrapper.text()).toEqual("This is TestComp.");
  });
});
