import React from 'react';
import styled from 'styled-components';

import theme from '../../theme';

const LoadingWrapper = styled.div`
  ${theme.mixins.transition()};

  width: ${theme.sizes.loading};
  height: ${theme.sizes.loading};
  border-radius: ${theme.sizes.loading};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;

  &.in {
    animation-name: loader-in;
  }

  &.out {
    animation-name: loader-out;
  }
`;

const StyledSvg = styled.svg`
  animation: rotate 2s linear infinite;
`;

export default () => (
  <LoadingWrapper>
    <StyledSvg className="circular-loader" viewBox="25 25 50 50" >
      <circle className="loader-path" cx="50" cy="50" r="12" />
    </StyledSvg>
  </LoadingWrapper>
);
