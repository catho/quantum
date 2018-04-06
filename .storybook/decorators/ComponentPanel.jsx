import React from 'react';
import { createContext } from "react-broadcast";

import { Container, Row, Col } from '../../components/Grid';
import AutoProps from './AutoProps';
import LivePreview from './LivePreview';
import CodeExample from './CodeExample';

const { Provider, Consumer } = createContext('light');

class ComponentPanel extends React.Component {

  constructor(props) {
    super(props);

    const { component: Component } = props;

    this.component = Component;
    this.state = this.component.defaultProps;
  }

  handleChange = state => {
    this.setState(state);
    this.component.defaultProps = state;
  };

  render () {

    return (
      <React.Fragment>
        <Row>
          <Col desktop={5} tablet={6}>
            <AutoProps component={this.component} changeState={this.handleChange} />
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
