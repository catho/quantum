import styled from 'styled-components';
import Colors from '../../Colors/deprecated';

const Header = styled.h2`
  border-bottom: 2px solid ${Colors.SECONDARY['50']};
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  padding: 18px 24px;
`;

Header.displayName = 'Modal.Header';

export default Header;
