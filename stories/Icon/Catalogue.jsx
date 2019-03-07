import React, { Component } from 'react';
import { Row, Col } from '../../components/Grid';
import Colors from '../../components/Colors';
import Input from '../../components/Input';
import IconToClipboard from './IconToClipboard';
import Icons from '../../components/shared/icons';

class Catalogue extends Component {
  constructor(props) {
    super(props);

    this.state = { icons: Icons, filtered: Icons };
  }

  filterIcons = (e, { value }) => {
    const { icons } = this.state;
    const filtered = value
      ? icons.filter(name => name.indexOf(value) >= 0)
      : icons;

    this.setState({ filtered });
  };

  render() {
    const { filtered } = this.state;

    return (
      <React.Fragment>
        <Row>
          <Col medium={12}>
            <p>
              We are using{' '}
              <a
                href="https://material.io/tools/icons/?style=baseline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Material Design icons
              </a>{' '}
              as default library.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: '-40px' }}>
          <Col medium={8}>
            <h3 style={{ marginTop: '50px' }}>
              Available Icons{' '}
              <small style={{ color: Colors.COBALT['500'] }}>
                click to copy
              </small>
            </h3>
          </Col>
          <Col medium={4}>
            <Input label="Search" onChange={this.filterIcons} />
          </Col>
        </Row>

        <Row>
          {filtered.map(name => (
            <IconToClipboard name={name} key={name} />
          ))}
        </Row>
      </React.Fragment>
    );
  }
}

export default Catalogue;
