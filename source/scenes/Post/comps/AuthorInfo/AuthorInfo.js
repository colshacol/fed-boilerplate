import { React } from "@packages";
import "./styles/AuthorInfo.css";

type Props = {
  children: any
};

const AuthorInfo = (props: Props) => {
  return (
    <div styleName="AuthorInfo">
      <p>This is AuthorInfo.</p>
    </div>
  );
};

export default AuthorInfo;
