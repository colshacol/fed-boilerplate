import { React } from '@packages';
import './styles/AuthorInfo.css';

type PropsT = {
  children: any
};

const AuthorInfo = (props: PropsT) => {
  return (
    <div styleName="AuthorInfo">
      <p>This is AuthorInfo.</p>
    </div>
  );
};

export default AuthorInfo;
