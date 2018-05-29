import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  clear: both;
  display: table;
  width: 100%;
`;

const ProgressBar = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const Steps = ({ children }) => (
  <React.Fragment>
    <Wrapper>
      <ProgressBar>
        { children }
      </ProgressBar>
    </Wrapper>
  </React.Fragment>
);

Steps.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Steps;
