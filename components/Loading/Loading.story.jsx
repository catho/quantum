import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import HowToImport from '../../.storybook/decorators/HowToImport';
import Loading from './Loading';

const StyledContainer = styled.div`
  // background-color: yellow;
`;

storiesOf('6. Loading', module)
  .addDecorator(HowToImport)
  .add('Loading', () => (
    <StyledContainer>
      <Loading />
    </StyledContainer>
  ));
