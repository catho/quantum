import React from 'react';
import PropTypes from 'prop-types';
import SkeletonTypes from './SkeletonTypes';
import { spacing, baseFontSize as defaultBaseFontSize } from '../shared/theme';
import {
  SkeletonRect,
  SkeletonCircle,
  SkeletonText,
  SkeletonButton,
  SkeletonTag,
} from './sub-components';

const Skeleton = props => {
  const { type } = props;

  return (
    <>
      {type === 'rect' && <SkeletonRect {...props} />}
      {type === 'circle' && <SkeletonCircle {...props} />}
      {type === 'text' && <SkeletonText {...props} />}
      {type === 'Button' && <SkeletonButton {...props} />}
      {type === 'Tag' && <SkeletonTag {...props} />}
    </>
  );
};

Skeleton.defaultProps = {
  type: 'rect',
  width: '100%',
  height: '14px',
  size: 'medium',
  theme: {
    baseFontSize: defaultBaseFontSize,
    spacing,
  },
};

Skeleton.propTypes = {
  type: PropTypes.oneOf(['rect', 'circle', 'text', 'Button', 'Tag']),
  width: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
  theme: PropTypes.shape({
    spacing: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
};

// Types
Skeleton.Button = SkeletonTypes.Button;
Skeleton.Circle = SkeletonTypes.Circle;
Skeleton.Text = SkeletonTypes.Text;
Skeleton.Tag = SkeletonTypes.Tag;

export default Skeleton;
