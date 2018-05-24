import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Icon from '../../components/Icon';
import icons from '../../components/shared/icons';
import { Container, Row, Col } from '../../components/Grid';
import {
  Heading,
  Atom,
  CodeToClipboard,
  HowToImport,
} from '../../.storybook/components';

const StyledIcon = styled(Icon)``;

const IconWrapper = styled(Col)`
  padding: 15px;
  text-align: center;
  position: relative;
  cursor: pointer;

  &:hover {
    display: none;

    button {
      display: inline-block;
    }
  }

  button {
    display: none;
    position: absolute;
    /* display: inline-block; */
    right: 23px;
    top: 12px;
  }

  div:first-child {
    margin: 0;
  }

  div:last-child {
    /* background-color: green; */
  }
`;

const getIcon = name => (
  <div>
    <Icon name={name} />
  </div>
);


storiesOf('1. Foundation', module)
  .add('Icons', () => (
    <React.Fragment>
      <Heading name="Icon" />
      <HowToImport importModules="Icon" />
      <Container fluid>
        <Row>
          { Object.values(icons).map(getIcon) }
        </Row>
      </Container>
    </React.Fragment>
  ));
