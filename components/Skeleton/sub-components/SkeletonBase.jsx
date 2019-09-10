import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const skeletonAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const SkeletonBase = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
  animation: ${skeletonAnimation} 1.5s ease-in-out infinite;

  ${({ height, width }) => `
    height: ${height};
    width: ${width}; 
  `}
`;

SkeletonBase.displayName = 'SkeletonBase';

SkeletonBase.propTypes = {
  width: PropTypes.isRequired,
  height: PropTypes.isRequired,
};

export default SkeletonBase;
