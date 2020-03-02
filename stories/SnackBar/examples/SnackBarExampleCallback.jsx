import React from 'react';
import Button from '../../../components/Button';
import SnackBar from '../../../components/SnackBar';

class SnackBarExampleCallback extends React.Component {
  constructor() {
    super();

    this.state = {
      showSnackBar: false,
    };
  }

  openSnackBar = () => this.setState({ showSnackBar: true });

  closeSnackBar = () => this.setState({ showSnackBar: false });

  // eslint-disable-next-line no-console
  actionCallback = () => console.log('Callback has called.');

  render() {
    const { showSnackBar } = this.state;

    const actions = {
      title: 'CALLBACK ACTION',
      callbackFn: this.actionCallback,
    };

    return (
      <>
        <Button onClick={this.openSnackBar}>Open SnackBar</Button>
        {showSnackBar && (
          <SnackBar
            text="SnackBar text content"
            onClose={this.closeSnackBar}
            actionTrigger={actions}
          />
        )}
      </>
    );
  }
}

SnackBarExampleCallback.code = `
import React from 'react';
import Button from '../../../components/Button';
import SnackBar from '../../../components/SnackBar';

class SnackBarExampleCallback extends React.Component {
  constructor() {
    super();

    this.state = {
      showSnackBar: false,
    };
  }

  openSnackBar = () => this.setState({ showSnackBar: true });

  closeSnackBar = () => this.setState({ showSnackBar: false });

  actionCallback = () => console.log('Callback has called.');

  render() {
    const { showSnackBar } = this.state;

    const actions = {
      title: 'CALLBACK ACTION',
      callbackFn: this.actionCallback,
    };

    return (
      <>
        <Button onClick={this.openSnackBar}>Open SnackBar</Button>
        {showSnackBar && (
          <SnackBar
            text="SnackBar text content"
            onClose={this.closeSnackBar}
            actionTrigger={actions}
          />
        )}
      </>
    );
  }
}
`;

export default SnackBarExampleCallback;
