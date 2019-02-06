import React from 'react';
import styled from 'styled-components';
import Colors from '../../Colors/deprecated';

const Line = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${Colors.SECONDARY['50']};
  margin-top: 15px;
`;

const Divider = () => <Line />;

Divider.displayName = 'Card.Divider';

export default Divider;
