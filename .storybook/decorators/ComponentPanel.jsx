import React from 'react';

import { Container, Row, Col } from '../../components/Grid';
import AutoProps from './AutoProps';
import LivePreview from './LivePreview';
import CodeExample from './CodeExample';

class ComponentPanel extends React.Component {

  constructor(props) {
    super(props);

    const { component: Component } = props;

    this.component = Component;

    this.state = this.component.defaultProps;
  }

  updateComponent = state => this.setState(state);

  render () {

    return (
      <React.Fragment>
        <pre>ComponentPanel: { JSON.stringify(this.state, null, 2)}</pre>
        <Row>
          <Col desktop={5} tablet={6}>
            <AutoProps component={this.component} onChange={this.updateComponent} />
          </Col>

          <Col desktop={5} tablet={6}>
            <LivePreview component={this.component} />
          </Col>
        </Row>
        <Row>
          <Col desktop={12} tablet={12}>
            <CodeExample component={this.component} />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
};

export default ComponentPanel;
