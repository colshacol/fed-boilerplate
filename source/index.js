import "regenerator-runtime/runtime";
import React from "react";
import ReactDom from "react-dom";
import { TestComp } from "@comps";
import "@styles/reset";

ReactDom.render(
  <div data-app-root>
    <TestComp caps={true} />
  </div>,
  document.getElementById("main")
);
