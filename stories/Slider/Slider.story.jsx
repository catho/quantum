import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Title,
  Heading,
  TabbedView,
  Tab,
  HowToImport,
  CodeExample,
  AutoPropsApi,
} from '@catho-private/quantum-storybook-ui';
import { Col, Row } from '../../components/Grid';
import Slider from '../../components/Slider';
import List from '../../components/List';

import * as Samples from './examples';

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
              Through component props it&apos;s possible to set the minimum and
              maximum values to be selected, format tooltip and label texts or
              disable the component itself.
            </p>
            <p>
              You can use some helper props to display the correct information
              desired.
            </p>
            <List>
              <List.Item>
                <strong>min</strong>: accepted min value (default: 0)
              </List.Item>
              <List.Item>
                <strong>max</strong>: accepted max value (default: 100)
              </List.Item>
              <List.Item>
                <strong>tipFormatter</strong>: format tooltip text
              </List.Item>
              <List.Item>
                <strong>minMaxFormatter</strong>: format {'<Slider />'} label
                text
              </List.Item>
            </List>
          </Col>
        </Row>
        <Title>Slider usage</Title>
        <p>Just set value prop with a Number value.</p>
        <Row>
          <Col xsmall={2} small={4} medium={6}>
            <CodeExample code={Samples.Slider.code} showTitle={false} />
          </Col>
          <Col xsmall={2} small={4} medium={6}>
            <Samples.Slider />
          </Col>
        </Row>
        <Title>Min & Max props</Title>
        <p>You can limit the available range to be selected</p>
        <Row>
          <Col xsmall={2} small={4} medium={6}>
            <CodeExample code={Samples.MinMax.code} showTitle={false} />
          </Col>
          <Col xsmall={2} small={4} medium={6}>
            <Samples.MinMax />
          </Col>
        </Row>
        <Title>Range usage</Title>
        <p>
          Set value prop with an Object with &quot;to&quot; and &quot;from&quot;
          properties.
        </p>
        <Row>
          <Col xsmall={2} small={4} medium={6}>
            <CodeExample code={Samples.Range.code} showTitle={false} />
          </Col>
          <Col xsmall={2} small={4} medium={6}>
            <Samples.Range />
          </Col>
        </Row>
        <Title>tipFormatter - Formatting tooltip text</Title>
        <p>
          You can format tooltip text through <strong>tipFormatter</strong>{' '}
          prop.
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

        <Title>
          Formatting <code>min</code> and <code>max</code> labels text
        </Title>
        <p>
          You can format both <code>min</code> and <code>max</code> labels text
          through <strong>minMaxFormatter</strong> prop.
        </p>
        <p>It receives a function and should return a string. </p>
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

        <Title>Controlled {'<Slider />'}</Title>
        <p>
          it&apos;s needed an{' '}
          <a
            href="https://reactjs.org/docs/forms.html#controlled-components"
            rel="noopener noreferrer"
            target="_blank"
            title="controlled component"
          >
            controlled component
          </a>{' '}
          to change the {'<Slider />'} value.
        </p>
        <p>The same is applied when is passed an object to value prop.</p>
        <Row>
          <Col xsmall={2} small={4} medium={6}>
            <CodeExample
              code={Samples.ControlledSlider.code}
              showTitle={false}
            />
          </Col>
          <Col xsmall={2} small={4} medium={6}>
            <Samples.ControlledSlider />.
          </Col>
        </Row>
      </Tab>
      <Tab title="API">
        <AutoPropsApi component={Slider} />
      </Tab>
    </TabbedView>
  </Heading>
));
