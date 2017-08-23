import React from "@packages";
import "./styles/FootBar.css";

type Props = {
  children: any
};

const FootBar = (props: Props) => {
  return (
    <div styleName="FootBar">
      <p>This is FootBar.</p>
    </div>
  );
};

export default FootBar;
