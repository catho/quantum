import styled from 'styled-components';

const SubTitle = styled.p`
  font-size: ${props => (props.small ? '12px' : '14px')};
  margin: 8px 0 0 0;
`;

SubTitle.displayName = 'Card.SubTitle';

export default SubTitle;
