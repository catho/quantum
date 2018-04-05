import React from 'react';

import { Container, Row, Col } from '../../components/Grid';
import Props from './Props';
import LivePreview from './LivePreview';
import CodeExample from './CodeExample';

const ComponentPanel = ({ component: Component }) => (
  <React.Fragment>
    <Row>
      <Col desktop={6} tablet={6}>
        <p>Aqui vai as prop mudando tudo dinâmico</p>
      </Col>

      <Col desktop={6} tablet={6}>
        <LivePreview component={Component} />
      </Col>
    </Row>
    <Row>
      <Col desktop={12} tablet={12}>
        <CodeExample component={Component} />
      </Col>
    </Row>
  </React.Fragment>
)

export default ComponentPanel;
