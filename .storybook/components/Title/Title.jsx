import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ColorPalette from '../../../components/Colors';

const StyledTitle = styled.h2`
  border-bottom: 1px solid ${ColorPalette.NEUTRAL.GRAY.WHITETHREE};
  padding-bottom: 8px;
  font-weight: normal;
  margin: 10px 0;
`;

const Title = ({ children, ...rest }) => (<StyledTitle {...rest}>{children}</StyledTitle>);

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
