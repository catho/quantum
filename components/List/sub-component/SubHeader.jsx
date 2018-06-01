import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Description = styled.span`
  font-size: 12px;
`;

const SubHeader = ({ children }) => <Description>{children}</Description>;

SubHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubHeader;
