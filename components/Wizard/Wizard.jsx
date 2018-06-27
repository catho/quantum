import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const ProgressBar = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const Wizard = ({ children }) => (
  <Wrapper>
    <ProgressBar>{children}</ProgressBar>
  </Wrapper>
);

Wizard.propTypes = {
  /** Step Component list */
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Wizard;
