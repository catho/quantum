import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '../../../components/Grid';
import AutoProps from '../AutoProps';
import LivePreview from '../LivePreview';
import CodeExample from '../CodeExample';
import HowToImport from '../HowToImport';

class ComponentPanel extends React.Component {
  constructor(props) {
    super(props);

    const {
      component: { props: componentProps },
    } = props;
    this.state = componentProps;
  }

  handleChange = newState => {
    const state = {
      ...this.state,
      ...newState,
    };

    this.setState(state);
  };

  render() {
    const { component: Component, importModules } = this.props;

    return (
      <React.Fragment>
        <Row>
          <Col desktop={12} tablet={12}>
            <HowToImport importModules={importModules} />
          </Col>

          <Col desktop={6} tablet={6}>
            <AutoProps
              component={Component}
              state={this.state}
              changeState={this.handleChange}
            />
          </Col>

          <Col desktop={6} tablet={6}>
            <LivePreview
              component={Component}
              state={this.state}
              onChange={this.handleChange}
            />
            <CodeExample component={Component} state={this.state} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

ComponentPanel.propTypes = {
  importModules: PropTypes.string.isRequired,
  component: PropTypes.instanceOf(Object).isRequired,
};

export default ComponentPanel;
