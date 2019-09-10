import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SkeletonTypes from './SkeletonTypes';
import { spacing } from '../shared/theme';
import {
  SkeletonRect,
  SkeletonCircle,
  SkeletonText,
  SkeletonButton,
} from './sub-components';

const Wrapper = styled.div`
  display: inline-block;
  box-sizing: inherit;

  ${({ height, width, cols }) => `
    height: ${height};
    width: ${cols > 0 ? `calc(100% / 12 * ${cols})` : width};
  `}
`;

const Skeleton = props => {
  const { type, width, height, cols } = props;

  return (
    <Wrapper width={width} height={height} cols={cols}>
      {type === 'rect' && <SkeletonRect {...props} />}
      {type === 'circle' && <SkeletonCircle {...props} />}
      {type === 'text' && <SkeletonText {...props} />}
      {type === 'Button' && <SkeletonButton {...props} />}
    </Wrapper>
  );
};

Skeleton.defaultProps = {
  type: 'rect',
  width: '100%',
  height: '14px',
  cols: 0,
  size: 'medium',
  theme: {
    spacing,
  },
};

Skeleton.propTypes = {
  type: PropTypes.oneOf(['rect', 'circle', 'text', 'Button']),
  width: PropTypes.string,
  height: PropTypes.string,
  cols: PropTypes.number,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  theme: PropTypes.shape({
    spacing: PropTypes.object,
  }),
};

// Types
Skeleton.Button = SkeletonTypes.Button;
Skeleton.Circle = SkeletonTypes.Circle;
Skeleton.Text = SkeletonTypes.Text;

export default Skeleton;
