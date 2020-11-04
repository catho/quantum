import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-cycle
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
      {type === 'button' && <SkeletonButton {...buttonProps} />}
      {type === 'tag' && <SkeletonTag {...tagProps} />}
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
  /** Sets the component behavior */
  type: PropTypes.oneOf(['rect', 'circle', 'text', 'button', 'tag']),
  width: PropTypes.string,
  /** Will affect only types that not uses the prop `size` */
  height: PropTypes.string,
  /** Will affect only `Tag` and `Button` types.  */
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
  /** Used only for themification.  */
  theme: PropTypes.objectOf({
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
