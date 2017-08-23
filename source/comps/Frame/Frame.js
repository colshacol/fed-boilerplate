import { React } from '@packages';

import './styles/Frame.css';
import { NavBar, FootBar } from '@comps';

type PropsT = {
  children: any
};

const Frame = (props: PropsT) => {
  return (
    <div styleName="Frame">
      <NavBar />
      {props.children}
      <FootBar />
    </div>
  );
};

export default Frame;
