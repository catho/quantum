import styled from 'styled-components';
import Colors from '../../Colors';

const Footer = styled.div`
  background-color: #f4f4f4;
  border-top: 2px solid ${Colors.SECONDARY['50']};
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  padding: 10px;
`;

Footer.displayName = 'Modal.Footer';

export default Footer;
