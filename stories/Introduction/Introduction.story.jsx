import React from 'react';
import { Heading } from '@catho/quantum-storybook-ui';
import styled from 'styled-components';
import Introduction from './Introduction';
import Background from '../../.storybook/static/getting-started-bg.png';

const StyledHeading = styled(Heading)`
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

export default {
  title: 'Introduction',
};

export const GettingStarted = () => (
  <>
    <StyledHeading title="Quantum">
      CSS in JS based reusable components, are the core of Quantum
      design-system: a library for developing consistent UI/UX at Catho.
    </StyledHeading>

    <Introduction />
  </>
);

GettingStarted.story = {
  name: 'Getting started',
};
