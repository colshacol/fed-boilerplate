import React from "react";
import "./TestComp.css";

type Props = {
  children: any
};

const TestComp = (props: Props) => {
  return (
    <div styleName="TestComp">
      <Choose>
        <When condition={props.caps}>THIS IS TESTCOMP.</When>
        <Otherwise>This is TestComp.</Otherwise>
      </Choose>
    </div>
  );
};

export default TestComp;
