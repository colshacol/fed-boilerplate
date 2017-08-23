import { React } from "@packages";
import "./styles/PostPeekBig.css";

type Props = {
  children: any
};

const PostPeekBig = (props: Props) => {
  return (
    <div styleName="PostPeekBig">
      <p>This is PostPeekBig.</p>
    </div>
  );
};

export default PostPeekBig;
