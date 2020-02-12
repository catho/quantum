import React from 'react';
import styled from 'styled-components';
import {
  Title,
  Table,
  StoryContainer,
  SimpleHighlight,
} from '@catho/quantum-storybook-ui';

import { Row, Col, Hide } from '../../components/Grid';

const importGrid = `import { Container, Row, Col, Hide } from '@catho/quantum';';`;
const codeBackgroundColor = '#e8f2fc';
const codefontColor = '#1a82e2';

const StyledCol = styled(Col)`
  background-color: #f6f8fa;
  padding: 8px;
  font-size: 14px;
`;

// xsmall = { 1}
// xsmall - offset={ 4 }
// small = { 2}
// small - offset={ 7 }

const MobileDesktopExample = () => (
  <React.Fragment>
    <Row>
      <StyledCol xsmall={1} small={2} medium={4}>{'<Col xsmall={1} small={2}>'}</StyledCol>
      <StyledCol xsmall={2} small={4} medium={4}>{'<Col xsmall={2} small={4}>'}</StyledCol>
      <StyledCol xsmall={1} small={2} medium={4} medium-offset={10}>{'<Col xsmall={1} small={2}>'}</StyledCol>
    </Row>
    <Row>
      <StyledCol xsmall={2} small={4}>
        {'<Col xsmall={2} small={4}>'}
      </StyledCol>
      <StyledCol xsmall={2} small={4}>
        {'<Col xsmall={2} small={4}>'}
      </StyledCol>
    </Row>

    <Row>
      <StyledCol xsmall={4} small={4}>
        {'<Col xsmall={4} small={4}>'}
      </StyledCol>
      <StyledCol xsmall={4} small={4}>
        {'<Col xsmall={4} small={4}>'}
      </StyledCol>
      <StyledCol xsmall={4} small={4}>
        {'<Col xsmall={4} small={4}>'}
      </StyledCol>
    </Row>

    <Row>
      <StyledCol xsmall={2}>{'<Col xsmall={2}>'}</StyledCol>
      <StyledCol xsmall={2}>{'<Col xsmall={2}>'}</StyledCol>
    </Row>

    <SimpleHighlight
      backgroundColor={codeBackgroundColor}
      fontColor={codefontColor}
    >
      {`<Row>
  <Col xsmall={2} small={8}>...</Col>
  <Col xsmall={2} small={4}>...</Col>
</Row>

<Row>
  <Col xsmall={4} small={4}>...</Col>
  <Col xsmall={4} small={4}>...</Col>
  <Col xsmall={4} small={4}>...</Col>
</Row>

<Row>
  <Col xsmall={2}>...</Col>
  <Col xsmall={2}>...</Col>
</Row>`}
    </SimpleHighlight>
  </React.Fragment>
);


const Grid = () => (
  <StoryContainer>
    <Title as="h2">Importing grid</Title>

    <Title as="h3">Example: Mobile and desktop</Title>
    <p>
      Don’t want your columns to simply stack in smaller devices? Use the xsmall
      and small device grid props by adding <code>{'xsmall={*}'}</code>
      <code>{'small={*}'}</code> to your columns. See the example below for a
      better idea of how it all works.
    </p>
    <MobileDesktopExample />

  </StoryContainer>
);

export default Grid;
