import { Component } from 'react';
import Button from '../../../components/Button';
import SnackBar from '../../../components/SnackBar';

class SnackBarExampleWarning extends Component {
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
        <Button onClick={this.openSnackBar}>Open SnackBar Warning</Button>
        {showSnackBar && (
          <SnackBar
            text="SnackBar warning text content"
            onClose={this.closeSnackBar}
            skin="warning"
          />
        )}
      </>
    );
  }
}

SnackBarExampleWarning.code = `

import Button from '../../../components/Button';
import SnackBar from '../../../components/SnackBar';

class SnackBarExampleWarning extends Component {
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
        <Button onClick={this.openSnackBar}>Open SnackBar Success</Button>
        {showSnackBar && (
          <SnackBar
            text="SnackBar success text content"
            onClose={this.closeSnackBar}
            skin="success"
          />
        )}
      </>
    );
  }
}
`;

export default SnackBarExampleWarning;
