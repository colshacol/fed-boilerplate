import { React } from '@packages';
import './styles/NavBar.css';

type PropsT = {
  children: any
};

const NavBar = (props: PropsT) => {
  return (
    <div styleName="NavBar">
      <p>This is NavBar.</p>
    </div>
  );
};

export default NavBar;
