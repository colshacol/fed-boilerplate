import React from "@packages";
import "./styles/Home.css";

type Props = {
  children: any
};

const Home = (props: Props) => {
  return (
    <div styleName="Home">
      <p>This is Home.</p>
    </div>
  );
};

export default Home;
