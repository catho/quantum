import { Component } from 'react';
import Button from '../../../components/Button';
import SnackBar from '../../../components/SnackBar';

class SnackBarExamplePrimary extends Component {
  constructor() {
    super();

    this.state = {
      showSnackBar: false,
    };
  }

  openSnackBar = () => this.setState({ showSnackBar: true });

  closeSnackBar = () => this.setState({ showSnackBar: false });

  actionCallback = () => this.closeSnackBar();

  render() {
    const { showSnackBar } = this.state;

    return (
      <>
        <Button onClick={this.openSnackBar}>Open SnackBar Primary</Button>
        {showSnackBar && (
          <SnackBar
            text="SnackBar primary text content"
            onClose={this.closeSnackBar}
            skin="primary"
          />
        )}
      </>
    );
  }
}

SnackBarExamplePrimary.code = `

import Button from '../../../components/Button';
import SnackBar from '../../../components/SnackBar';

class SnackBarExamplePrimary extends Component {
  constructor() {
    super();

    this.state = {
      showSnackBar: false,
    };
  }

  openSnackBar = () => this.setState({ showSnackBar: true });

  closeSnackBar = () => this.setState({ showSnackBar: false });

  actionCallback = () => this.closeSnackBar();

  render() {
    const { showSnackBar } = this.state;

    return (
      <>
        <Button onClick={this.openSnackBar}>Open SnackBar Primary</Button>
        {showSnackBar && (
          <SnackBar
            text="SnackBar primary text content"
            onClose={this.closeSnackBar}
            skin="primary"
          />
        )}
      </>
    );
  }
}
`;

export default SnackBarExamplePrimary;
