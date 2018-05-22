import React from 'react';
import { storiesOf } from '@storybook/react';
import * as MaterialIcons from '@material-ui/icons';
import styled from 'styled-components';
import Icon from '../../components/Icon';
import { Container, Row, Col, Hide } from '../../components/Grid';
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

const getIcon = (text) => {
  const name = text
    .replace(/([a-zA-Z0-9](?=[A-Z]))/g, '$1 ')
    .replace(/\s/g, '-')
    .toLowerCase();

  return (
    <IconWrapper tablet={1} key={name}>
      <StyledIcon name={name} />
      <CodeToClipboard code={`<Icon name="${name}" />`} />
    </IconWrapper>
  );
};

storiesOf('1. Foundation', module)
  .add('Icons', () => (
    <React.Fragment>
      <Heading image={Atom} name="Icon" />
      <HowToImport importModules="Icon" />
      <Container fluid>
        <Row>
          { Object.keys(MaterialIcons).map(getIcon) }
        </Row>
      </Container>
    </React.Fragment>
  ));
