import React from "@packages";
import "./styles/$NAME.css";

type Props = {
  children: any
};

const $NAME = (props: Props) => {
  return (
    <div styleName="$NAME">
      <p>This is $NAME.</p>
    </div>
  );
};

export default $NAME;
