import { React } from '@packages';
import './styles/PostPeekMini.css';

type PropsT = {
  children: any
};

const PostPeekMini = (props: PropsT) => {
  return (
    <div styleName="PostPeekMini">
      <p>This is PostPeekMini.</p>
    </div>
  );
};

export default PostPeekMini;
