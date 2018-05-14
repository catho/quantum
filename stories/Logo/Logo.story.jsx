import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Logo from '../../components/Logo';
import Heading from '../../.storybook/components/Heading';
import Atom from '../static/atom.svg';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import HowToImport from '../../.storybook/components/HowToImport';
import CodeExample from '../../.storybook/components/CodeExample';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import { Col, Row } from '../../components/Grid';

const StyledRow = styled(Row)`
  margin-bottom: 30px;
`;

storiesOf('6. Others', module)
  .add('Logo', () => (
    <Heading image={Atom} title="<Logo />">
      <TabbedView>
        <Tab title="Usage">
          <HowToImport importModules="Logo" />
          <p>You can use these logos:</p>
          <StyledRow>
            <Col desktop={12}>
              <h4>Catho logo for candidate pages:</h4>
            </Col>
            <Col tablet={2}>
              <Logo.B2C />
            </Col>
            <Col tablet={6}>
              <CodeExample
                code="<Logo.B2C />"
                showTitle={false}
              />
            </Col>
          </StyledRow>
          <StyledRow>
            <Col desktop={12}>
              <h4>Catho logo for enterprise pages:</h4>
            </Col>
            <Col tablet={2}>
              <Logo.B2B />
            </Col>
            <Col tablet={6}>
              <CodeExample
                code="<Logo.B2B />"
                showTitle={false}
              />
            </Col>
          </StyledRow>
          <StyledRow>
            <Col desktop={12}>
              <h4>Catho logo for course pages:</h4>
            </Col>
            <Col tablet={2}>
              <Logo.Course />
            </Col>
            <Col tablet={6}>
              <CodeExample
                code="<Logo.Course />"
                showTitle={false}
              />
            </Col>
          </StyledRow>
          <StyledRow>
            <Col desktop={12}>
              <h4>Google Logo:</h4>
            </Col>
            <Col tablet={2}>
              <Logo.Google />
            </Col>
            <Col tablet={6}>
              <CodeExample
                code="<Logo.Google />"
                showTitle={false}
              />
            </Col>
          </StyledRow>
          <StyledRow>
            <Col desktop={12}>
              <h4>Facebook Logo:</h4>
            </Col>
            <Col tablet={2}>
              <Logo.Facebook />
            </Col>
            <Col tablet={6}>
              <CodeExample
                code="<Logo.Facebook />"
                showTitle={false}
              />
            </Col>
          </StyledRow>
        </Tab>
        <Tab title="API">
          <AutoPropsApi component={Logo} ignoredProps={['src']} />
        </Tab>
      </TabbedView>
    </Heading>
  ));
