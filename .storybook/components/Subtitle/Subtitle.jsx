import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSubtitle = styled.h3`
  font-weight: 300;
  margin-top: 40px;
`;

const Subtitle = ({ children, ...rest }) => (
  <StyledSubtitle {...rest}>{children}</StyledSubtitle>
);

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Subtitle;
