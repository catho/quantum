// eslint-disable-next-line import/no-cycle
import Skeleton from './Skeleton';

const SkeletonTypes = {
  Circle: props => <Skeleton type="circle" {...props} />,
  Text: props => <Skeleton type="text" {...props} />,
  Button: props => <Skeleton type="button" {...props} />,
  Tag: props => <Skeleton type="tag" {...props} />,
};

SkeletonTypes.Circle.displayName = 'Skeleton.Circle';
SkeletonTypes.Text.displayName = 'Skeleton.Text';
SkeletonTypes.Button.displayName = 'Skeleton.Button';
SkeletonTypes.Tag.displayName = 'Skeleton.Tag';

export default SkeletonTypes;
