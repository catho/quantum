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

    const { component: Component } = props;

    this.component = Component;
    this.state = this.component.type.defaultProps;
  }

  handleChange = (state) => {
    this.setState(state);
    this.component.type.defaultProps = state;
  };

  render() {
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
            <LivePreview component={this.component} />
            <CodeExample component={this.component} />
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
