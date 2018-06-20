import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../../../components/Colors';

const StyledTitle = styled.h2`
  border-bottom: 1px solid ${Colors.SECONDARY['100']};
  padding-bottom: 8px;
  font-weight: normal;
  margin: 10px 0;
`;

const Title = ({ children, ...rest }) => (<StyledTitle {...rest}>{children}</StyledTitle>);

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
