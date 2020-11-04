import PropTypes from 'prop-types';
import styled from 'styled-components';

import SkeletonBase from './SkeletonBase';

const SkeletonTag = styled(SkeletonBase)`
  border-radius: 8px;
  margin-right: 8px;

  ${({
    size,
    theme: {
      baseFontSize,
      spacing: { xxsmall },
    },
  }) => {
    const padding = xxsmall * 2;
    const heights = {
      small: baseFontSize * 0.875,
      medium: baseFontSize * 1.125,
      large: baseFontSize * 1.25,
    };

    return `height: ${heights[size] + padding}px;`;
  }}
`;

SkeletonTag.displayName = 'SkeletonTag';

SkeletonTag.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  theme: PropTypes.objectOf({
    baseFontSize: PropTypes.number,
    spacing: PropTypes.object,
  }).isRequired,
};

export default SkeletonTag;
