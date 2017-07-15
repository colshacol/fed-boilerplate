/**
 * @file Demonstrates anonymous "styleName" resolution.
 * @see https://github.com/gajus/babel-plugin-react-css-modules#anonymous-stylename-resolution
 */

import React from "react";
import "./table.css";

export const TESTCOMPY = () => {
  return (
    <div styleName="table">
      <div styleName="row">
        <If condition={true}>
          <div styleName="cell">-?A0</div>
        </If>
        <For each="num" of={[0, 1, 2, 3, 4, 5]} index="i">
          <div styleName="cell yellow">
            A{num}---DOGS----
          </div>
        </For>
      </div>
    </div>
  );
};
