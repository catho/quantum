import React from 'react';
import Button from '../../../components/Button';
import SnackBar from '../../../components/SnackBar';

class SnackBarExampleError extends React.Component {
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
        <Button onClick={this.openSnackBar}>Open SnackBar Error</Button>
        {showSnackBar && (
          <SnackBar
            text="SnackBar error text content"
            onClose={this.closeSnackBar}
            skin="error"
          />
        )}
      </>
    );
  }
}

SnackBarExampleError.code = `
import React from 'react';
import Button from '../../../components/Button';
import SnackBar from '../../../components/SnackBar';

class SnackBarExampleError extends React.Component {
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
        <Button onClick={this.openSnackBar}>Open SnackBar Error</Button>
        {showSnackBar && (
          <SnackBar
            text="SnackBar error text content"
            onClose={this.closeSnackBar}
            skin="error"
          />
        )}
      </>
    );
  }
}
`;

export default SnackBarExampleError;
