import styled from 'styled-components';
import SkeletonBase from './SkeletonBase';

const SkeletonCircle = styled(SkeletonBase)`
  border-radius: 50%;
`;

SkeletonCircle.displayName = 'SkeletonCircle';
SkeletonCircle.propTypes = {};

export default SkeletonCircle;
