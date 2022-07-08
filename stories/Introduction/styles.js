/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Heading } from '@catho/quantum-storybook-ui';

import Background from '../../.storybook/static/getting-started-bg.png';

export const StyledHeading = styled(Heading)`
  background-color: red;
  position: relative;
  background-image: url(${Background});
  background-color: #f3f3f5;
  padding: 45px 0 !important;
  background-repeat: no-repeat;

  h1 {
    font-size: 50px;
  }
`;
