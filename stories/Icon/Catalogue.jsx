import React, { Component } from 'react';
import { Container, Row, Col } from '../../components/Grid';
import Colors from '../../components/Colors';
import Input from '../../components/Input';
import IconToClipboard from './IconToClipboard';
import icons from '../../components/shared/icons';

class Catalogue extends Component {
  constructor(props) {
    super(props);

    this.state = { icons, filtered: icons };
  }

  filterIcons = (e, { value }) => {
    const filtered = value
      ? this.state.icons.filter(name => name.indexOf(value) >= 0)
      : this.state.icons;

    this.setState({ filtered });
  }

  render() {
    const { filtered } = this.state;

    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col tablet={12}>
              <p>
                We are using <a href="https://material.io/tools/icons/?style=baseline" target="_blank" rel="noopener noreferrer">Material Design icons</a> as default library.
              </p>
            </Col>
          </Row>
          <Row style={{ marginTop: '-40px' }}>
            <Col tablet={10}>
              <h3 style={{ marginTop: '50px' }}>
                Available Icons <small style={{ color: Colors.SECONDARY['100'] }}>click to copy</small>
              </h3>
            </Col>
            <Col tablet={2}>
              <Input label="Search" onChange={this.filterIcons} />
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            { filtered.map(name => <IconToClipboard name={name} key={name} />) }
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}


export default Catalogue;
