import React from 'react';
import Button from '../../../components/Button';
import SnackBar from '../../../components/SnackBar';

class SnackBarExamplePrimary extends React.Component {
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

    const actions = {
      title: 'HIDE',
      callbackFn: this.actionCallback,
    };

    return (
      <>
        <Button onClick={this.openSnackBar}>Open SnackBar Primary</Button>
        {showSnackBar && (
          <SnackBar
            text="SnackBar text content"
            onClose={this.closeSnackBar}
            actionTrigger={actions}
            skin="primary"
          />
        )}
      </>
    );
  }
}

SnackBarExamplePrimary.code = `
import React from 'react';
import Button from '../../../components/Button';
import SnackBar from '../../../components/SnackBar';

class SnackBarExamplePrimary extends React.Component {
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

    const actions = {
      title: 'HIDE',
      callbackFn: this.actionCallback,
    };

    return (
      <>
        <Button onClick={this.openSnackBar}>Open SnackBar Primary</Button>
        {showSnackBar && (
          <SnackBar
            text="SnackBar text content"
            onClose={this.closeSnackBar}
            actionTrigger={actions}
            skin="primary"
          />
        )}
      </>
    );
  }
}
`;

export default SnackBarExamplePrimary;
