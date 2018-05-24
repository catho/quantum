import React, { Component } from 'react';
import * as MaterialIcons from '@material-ui/icons';
import { Container, Row, Col } from '../../components/Grid';
import ColorPalette from '../../components/Colors';
import Input from '../../components/Input';
import IconToClipboard from './IconToClipboard';

class Catalogue extends Component {
  constructor(props) {
    super(props);

    const iconNames = Object.keys(MaterialIcons).map(name => (
      name
        .replace(/([a-zA-Z0-9](?=[A-Z]))/g, '$1 ')
        .replace(/\s/g, '-')
        .toLowerCase()
    ));

    this.state = { iconNames, filtered: iconNames };
  }

  filterIcons = (e, { value }) => {
    const filtered = value
      ? this.state.iconNames.filter(name => name.indexOf(value) >= 0)
      : this.state.iconNames;

    this.setState({ filtered });
  }

  render() {
    const { filtered } = this.state;

    return (
      <React.Fragment>
        <Container fluid>
          <Row style={{ marginTop: '-40px' }}>
            <Col tablet={10}>
              <h3 style={{ marginTop: '50px' }}>
                Available Icons <small style={{ color: ColorPalette.GREY['100'] }}>click to copy</small>
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
