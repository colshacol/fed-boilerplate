import { React } from '@packages';
import './styles/FootBar.css';

type PropsT = {
  children: any
};

const FootBar = (props: PropsT) => {
  return (
    <div styleName="FootBar">
      <p>This is FootBar.</p>
    </div>
  );
};

export default FootBar;
