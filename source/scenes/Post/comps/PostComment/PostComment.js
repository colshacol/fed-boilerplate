import { React } from '@packages';
import './styles/PostComment.css';

type PropsT = {
  children: any
};

const PostComment = (props: PropsT) => {
  return (
    <div styleName="PostComment">
      <p>This is PostComment.</p>
    </div>
  );
};

export default PostComment;
