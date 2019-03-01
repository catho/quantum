import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Example,
  Title,
  Heading,
  TabbedView,
  Tab,
  HowToImport,
  CodeExample,
  AutoPropsApi,
} from '@catho-private/quantum-storybook-ui';
import { Col, Row } from '../../components/Grid';
import List from '../../components/List';
import Slider from '../../components/Slider';

import * as Samples from './sub-components';

storiesOf('3. Forms', module).add('Slider', () => (
  <Heading name="Slider">
    <TabbedView>
      <Tab title="Usage">
        <HowToImport importModules="Slider" />
        <Row>
          <Col xsmall={4} small={8} medium={12}>
            <p>
              Slider is a component to select a value from a predefined range.
            </p>
            <p>
              Through component props it's possible to set the minimum and
              maximum values to be selected, format tooltip and label texts or
              disable the component itself.
            </p>
            <p>
              You can use some helper props to display the correct information
              desired.
            </p>
            <List>
              <List.Item>
                <strong>min</strong> - accepted min value (default: 0)
              </List.Item>
              <List.Item>
                <strong>max</strong> - accepted max value (default: 100)
              </List.Item>
              <List.Item>
                <strong>tipFormatter</strong> - format {'<Tooltip />'} text
              </List.Item>
              <List.Item>
                <strong>minMaxFormatter</strong> - format {'<Slider />'} label
                text
              </List.Item>
            </List>
          </Col>
        </Row>
        <Title>Basic usage</Title>
        <Row>
          <Col xsmall={2} small={4} medium={6}>
            <CodeExample code={Samples.Basic.code} showTitle={false} />
          </Col>
          <Col xsmall={2} small={4} medium={6}>
            <Samples.Basic />
          </Col>
        </Row>
        <Title>tipFormatter - Formatting {'<Tooltip />'} text</Title>
        <p>
          You can format {'<Tooltip />'} text through{' '}
          <strong>tipFormatter</strong> prop.
        </p>
        <p>
          It receives a function and should return a string.{' '}
          <em>
            <small>(hover {'<Slider />'} to see.)</small>
          </em>
        </p>
        <Row>
          <Col xsmall={2} small={4} medium={6}>
            <CodeExample code={Samples.TipFormatter.code} showTitle={false} />
          </Col>
          <Col xsmall={2} small={4} medium={6}>
            <Samples.TipFormatter />.
          </Col>
        </Row>

        <Title>minMaxFormatter - Formatting {'<Slider />'} labels text</Title>
        <p>
          You can format {'<Slider />'} label text through{' '}
          <strong>minMaxFormatter</strong> prop.
        </p>
        <p>
          It receives a function and should return a string.{' '}
          <em>
            <small>(hover {'<Slider />'} to see.)</small>
          </em>
        </p>
        <Row>
          <Col xsmall={2} small={4} medium={6}>
            <CodeExample
              code={Samples.MinMaxFormatter.code}
              showTitle={false}
            />
          </Col>
          <Col xsmall={2} small={4} medium={6}>
            <Samples.MinMaxFormatter />.
          </Col>
        </Row>
      </Tab>
      <Tab title="API" />
    </TabbedView>
  </Heading>
));
