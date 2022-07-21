import { Component } from 'react';
import { Row, Col } from '../../components/Grid';
import Input from '../../components/Input';
import IconToClipboard from './IconToClipboard';
import Icons from '../../components/shared/icons';

class Catalogue extends Component {
  constructor(props) {
    super(props);

    this.state = { icons: Icons, filtered: Icons };
  }

  filterIcons = ({ target: { value } }) => {
    const { icons } = this.state;
    const filtered = value
      ? icons.filter(name => name.indexOf(value) >= 0)
      : icons;

    this.setState({ filtered });
  };

  resetFilteredIcons = () => {
    this.setState({ filtered: Icons });
  };

  render() {
    const { filtered } = this.state;

    return (
      <>
        <Row>
          <Col medium={8}>
            <p>
              Here&apos;s a list of all available Icons. Click on a respective
              Icon to copy.
            </p>
          </Col>
          <Col medium={4}>
            <Input
              label="Search"
              onChange={this.filterIcons}
              onClean={this.resetFilteredIcons}
            />
          </Col>
        </Row>
        <Row>
          {filtered.map(name => (
            <IconToClipboard name={name} key={name} />
          ))}
        </Row>
      </>
    );
  }
}

export default Catalogue;
