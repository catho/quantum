import React from 'react';
import Skeleton from './Skeleton';

const SkeletonTypes = {
  Button: props => <Skeleton type="Button" {...props} />,
  Circle: props => <Skeleton type="circle" {...props} />,
  Text: props => <Skeleton type="text" {...props} />,
};

SkeletonTypes.Button.displayName = 'Skeleton.Button';
SkeletonTypes.Circle.displayName = 'Skeleton.Circle';
SkeletonTypes.Text.displayName = 'Skeleton.Text';

export default SkeletonTypes;
