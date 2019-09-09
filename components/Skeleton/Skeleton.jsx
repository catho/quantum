import React from 'react';
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

const StyledSkeleton = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
  animation: ${skeletonAnimation} 1.5s ease-in-out infinite;

  ${({ height, width }) => `
    height: ${height};
    width: ${width}; 
  `}
`;

const SkeletonRect = styled(StyledSkeleton)``;

const SkeletonCircle = styled(StyledSkeleton)`
  border-radius: 50%;
`;

const SkeletonText = styled(StyledSkeleton)`
  border-radius: 4px;
`;

const Wrapper = styled.div`
  display: inline-block;
  box-sizing: inherit;

  ${({ height, width }) => `
    height: ${height};
    width: ${width}; 
  `}
`;

const Skeleton = props => {
  const { type, width, height } = props;

  return (
    <Wrapper width={width} height={height}>
      {type === 'rect' && <SkeletonRect width={width} height={height} />}
      {type === 'circle' && <SkeletonCircle width={width} height={height} />}
      {type === 'text' && <SkeletonText width={width} height={height} />}
    </Wrapper>
  );
};

Skeleton.defaultProps = {
  type: 'rect',
  width: '100%',
  height: '100%',
};

Skeleton.propTypes = {
  type: PropTypes.oneOf(['rect', 'circle', 'text']),
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Skeleton;
