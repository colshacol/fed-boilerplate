import React from "react";
import { shallow, mount, render } from "enzyme";
import { renderJSX, JSX } from "jsx-test-helpers";
import $NAME from "../$NAME";

describe("<$NAME/>", () => {
  it("True should be true. (This component needs tests.)", () => {
    const wrapper = shallow(<$NAME />);
    expect(true).toBe(true);
  });
});
