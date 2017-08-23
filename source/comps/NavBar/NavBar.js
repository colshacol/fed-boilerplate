import { React } from "@packages";
import "./styles/NavBar.css";

type Props = {
  children: any
};

const NavBar = (props: Props) => {
  return (
    <div styleName="NavBar">
      <p>This is NavBar.</p>
    </div>
  );
};

export default NavBar;
