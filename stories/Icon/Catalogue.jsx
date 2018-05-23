import React, { Component } from 'react';
import * as MaterialIcons from '@material-ui/icons';
import { Container, Row, Col } from '../../components/Grid';
import Input from '../../components/Input';
import { Title } from '../../.storybook/components';
import IconToClipboard from './IconToClipboard';

/* eslint-disable react/no-multi-comp */
class Catalogue extends Component {
  constructor(props) {
    super(props);

    const iconNames = Object.keys(MaterialIcons).map(name => (
      name
        .replace(/([a-zA-Z0-9](?=[A-Z]))/g, '$1 ')
        .replace(/\s/g, '-')
        .toLowerCase()
    ));

    delete iconNames.LICENCE;

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
        <Title>Search and click to copy icon codes</Title>
        <Container fluid>
          <Row>
            <Col tablet={4}>
              <Input label="Search" onChange={this.filterIcons} />
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            { filtered.map(name => <IconToClipboard name={name} key={name}/>) }
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}


export default Catalogue;
