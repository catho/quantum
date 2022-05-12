import PropTypes from 'prop-types';
import styled from 'styled-components';

import SkeletonBase from './SkeletonBase';
import { theme } from '../../shared';

const SkeletonButton = styled(SkeletonBase)`
  border-radius: 4px;

  ${({
    size,
    theme: {
      spacing: { large, xlarge, xxlarge, xxxlarge },
    },
  }) => {
    const heights = {
      xsmall: `${large}px`,
      small: `${xlarge}px`,
      medium: `${xxlarge}px`,
      large: `${xxxlarge}px`,
    };

    return `height: ${heights[size]};`;
  }}
`;

SkeletonButton.displayName = 'SkeletonButton';

SkeletonButton.propTypes = {
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
  theme: PropTypes.shape({
    spacing: PropTypes.object,
  }),
};

SkeletonButton.defaultProps = {
  size: 'medium',
  theme,
};

export default SkeletonButton;