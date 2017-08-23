import { React } from '@packages';
import './styles/PostPeekBig.css';

type PropsT = {
  children: any
};

const PostPeekBig = (props: PropsT) => {
  return (
    <div styleName="PostPeekBig">
      <p>This is PostPeekBig.</p>
    </div>
  );
};

export default PostPeekBig;
