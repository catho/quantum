import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Line = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #f4f4f4;
  margin-top: 15px;
`;

const Divider = () => <Line />;

export default Divider;