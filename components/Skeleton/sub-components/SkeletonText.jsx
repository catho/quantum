import styled from 'styled-components';
import SkeletonBase from './SkeletonBase';

const SkeletonText = styled(SkeletonBase)`
  border-radius: 4px;
`;

SkeletonText.displayName = 'SkeletonText';

SkeletonText.propTypes = {};

SkeletonText.defaultProps = {};

export default SkeletonText;
