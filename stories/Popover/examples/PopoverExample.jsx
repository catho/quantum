import React from 'react';
import Popover from '../../../components/Popover';

class PopoverExample extends React.Component {
  constructor() {
    super();

    this.state = {
      // showSnackBar: false,
    };
  }

  // openSnackBar = () => this.setState({ showSnackBar: true });

  // closeSnackBar = () => this.setState({ showSnackBar: false });

  // actionCallback = () => this.closeSnackBar();

  render() {
    return (
      <>
        <Popover text="Popover text">popover here</Popover>
      </>
    );
  }
}

PopoverExample.code = `

`;

export default PopoverExample;
