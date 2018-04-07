import React from 'react'
import { Container, Row, Col } from '../../../components/Grid';
import AutoProps from '../AutoProps';
import LivePreview from '../LivePreview';
import CodeExample from '../CodeExample';
import HowToImport from '../HowToImport';

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
          <Col desktop={12} tablet={12}>
            <HowToImport importModules={this.props.importModules} />
          </Col>

          <Col desktop={6} tablet={6}>
            <AutoProps component={this.component} changeState={this.handleChange} />
          </Col>

          <Col desktop={6} tablet={6}>
            <CodeExample component={this.component} />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
};

export default ComponentPanel;
