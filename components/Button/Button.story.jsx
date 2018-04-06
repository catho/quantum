import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import HowToImport from '../../.storybook/decorators/HowToImport';
import Button from './Button';

const StyledDiv = styled.div`
  margin: 10px;
`;
const stories = storiesOf('3. Buttons', module);
stories
  .addDecorator(HowToImport)
  .add('Button', () => (
    <React.Fragment>
      <StyledDiv>
        <Button primary>Primary</Button>
      </StyledDiv>
      <StyledDiv>
        <Button secondary>Secondary</Button>
      </StyledDiv>
      <StyledDiv>
        <Button hollow>Hollow</Button>
      </StyledDiv>
      <StyledDiv>
        <Button light>Light</Button>
      </StyledDiv>
      <StyledDiv>
        <Button link>Link</Button>
      </StyledDiv>
      <StyledDiv>
        <Button disabled>Disabled</Button>
      </StyledDiv>
    </React.Fragment>
  ));
