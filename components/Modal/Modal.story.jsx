import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './Modal';
import Button from '../Button/Button';

const stories = storiesOf('5. Modal', module);

class ModalExample extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }

  handleClick = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Button skin="primary" onClick={this.handleClick}>{this.state.showModal ? 'Close' : 'Open'} modal</Button>
        {this.state.showModal && <Modal title="Modal example">lorem</Modal>}
      </React.Fragment>
    );
  }
}

stories
  .add('Modal', () => (
    <ModalExample />
  ));
