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
  const { type, size, theme, height, width } = props;

  const rectProps = {
    height,
    width,
  };
  const circleProps = {
    height,
    width,
  };

  const textProps = {
    height,
    width,
  };

  const buttonProps = {
    size,
    theme,
    width,
  };

  const tagProps = {
    size,
    theme,
    width,
  };

  return (
    <>
      {type === 'rect' && <SkeletonRect {...rectProps} />}
      {type === 'circle' && <SkeletonCircle {...circleProps} />}
      {type === 'text' && <SkeletonText {...textProps} />}
      {type === 'Button' && <SkeletonButton {...buttonProps} />}
      {type === 'Tag' && <SkeletonTag {...tagProps} />}
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
