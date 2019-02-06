import React from 'react';
import styled from 'styled-components';
import Colors from '../../Colors/deprecated';

const Footer = styled.div`
  background-color: #f4f4f4;
  border-top: 2px solid ${Colors.SECONDARY['50']};
  display: flex;
  font-size: 14px;
  padding: 10px;
  justify-content: ${({ children }) =>
    React.Children.toArray(children).length > 1 ? 'space-between' : 'flex-end'};
`;

Footer.displayName = 'Modal.Footer';

export default Footer;
