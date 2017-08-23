import "regenerator-runtime/runtime";
import DevTools from "mobx-react-devtools";
import React from "react";
import ReactDom from "react-dom";
import "@styles/reset";

ReactDom.render(
  <div data-app-root>
    <DevTools />
  </div>,
  document.getElementById("main")
);
