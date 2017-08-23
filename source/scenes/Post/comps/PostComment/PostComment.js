import { React } from "@packages";
import "./styles/PostComment.css";

type Props = {
  children: any
};

const PostComment = (props: Props) => {
  return (
    <div styleName="PostComment">
      <p>This is PostComment.</p>
    </div>
  );
};

export default PostComment;
