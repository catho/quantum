import { Component } from 'react';
import Button from '../../../components/Button';
import SnackBar from '../../../components/SnackBar';

class SnackBarExample extends Component {
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

SnackBarExample.code = `

import Button from '../../../components/Button';
import SnackBar from '../../../components/SnackBar';

class SnackBarExample extends Component {
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

export default SnackBarExample;
