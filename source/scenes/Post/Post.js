import React from "@packages";
import "./styles/Post.css";

type Props = {
  children: any
};

const Post = (props: Props) => {
  return (
    <div styleName="Post">
      <p>This is Post.</p>
    </div>
  );
};

export default Post;
