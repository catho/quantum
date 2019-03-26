import React from 'react';
import Button from '../../../components/Button';
import SnackBar from '../../../components/SnackBar';

class SnackBarExample extends React.Component {
  constructor() {
    super();

    this.state = {
      showSnackBar: false,
    };
  }

  openSnackBar = () => this.setState({ showSnackBar: true });

  closeSnackBar = () => this.setState({ showSnackBar: false });

  render() {
    const { showSnackBar } = this.state;

    return (
      <>
        <Button onClick={this.openSnackBar}>Open SnackBar</Button>
        {showSnackBar && (
          <SnackBar
            text="Texto introdutório do SnackBar para testes"
            onClose={this.closeSnackBar}
          />
        )}
      </>
    );
  }
}

export default SnackBarExample;
