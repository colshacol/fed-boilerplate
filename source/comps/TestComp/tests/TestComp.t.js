import ava from "ava";
import React from "react";
import { shallow } from "enzyme";
import TestComp from "../TestComp";

console.log("TestComp");
ava.test("+ handles caps={true} correctly.", t => {
  const comp0 = shallow(<TestComp caps={true} />);
  t.truthy(comp0.text(), "THIS IS TESTCOMP.");
});

ava.test("+ handles caps={false} correctly.", t => {
  const comp1 = shallow(<TestComp caps={false} />);
  t.truthy(comp1.text(), "This is TestComp.");
});
