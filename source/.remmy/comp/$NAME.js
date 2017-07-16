import React from "react";
import "./$NAME.css";

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
