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

const setSize = ({ height, width }) => {
  const sizes = [];
  if (height !== null) {
    sizes.push(`height: ${height};`);
  }
  if (width !== null) {
    sizes.push(`width: ${width};`);
  }
  return sizes.join('');
};

const SkeletonBase = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
  animation: ${skeletonAnimation} 1.5s ease-in-out infinite;
  display: inline-block;
  box-sizing: border-box;

  ${({ height, width }) => setSize({ height, width })}
`;

SkeletonBase.displayName = 'SkeletonBase';

SkeletonBase.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

SkeletonBase.defaultProps = {
  width: null,
  height: null,
};

export default SkeletonBase;
