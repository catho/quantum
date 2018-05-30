import React from 'react';
import { storiesOf } from '@storybook/react';
import Slider from '../../components/Slider';
import { Container, Row, Col } from '../../components/Grid';
import { Tab, Example, AutoExample } from '../../.storybook/components';

const exampleTab = (
  <Tab title="Example">
    <Container fluid>
      <Row>
        <Col tablet={12} desktop={12} hd={12}>
          <h3>Simple slider</h3>
          <Example component={<Slider min={0} max={10} />} />
        </Col>
      </Row>
      <Row>
        <Col tablet={12} desktop={12} hd={12}>
          <h3>Slider with tooltip</h3>
          <Example component={<Slider tooltip min={0} max={10} />} />
        </Col>
      </Row>
      <Row>
        <Col tablet={12} desktop={12} hd={12}>
          <h3>Slider with marks</h3>
          <Example component={<Slider min={0} max={10} marks={{ 0: '0', 5: '5', 10: '10' }} />} />
        </Col>
      </Row>
      <Row>
        <Col tablet={12} desktop={12} hd={12}>
          <h3>Slider with marks, tooltip and step</h3>
          <Example component={<Slider tooltip min={0} max={100} step={10} marks={{ 0: '0', 50: '50', 100: '100' }} />} />
        </Col>
      </Row>
      <Row>
        <Col tablet={12} desktop={12} hd={12}>
          <h3>Slider disabled</h3>
          <Example component={<Slider disabled min={0} max={100} />} />
        </Col>
      </Row>
    </Container>
  </Tab>
);

storiesOf('11. Slider', module)
  .add('Slider', () => (
    <AutoExample
      component={Slider}
      additionalTabs={exampleTab}
      componentProps={{
        tooltip: true,
        min: 0,
        max: 50,
        step: 10,
      }}
    />
  ));
