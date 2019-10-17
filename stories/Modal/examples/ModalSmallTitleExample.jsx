import React, { Component } from 'react';
import { Button, Modal } from '../../../components';

class ModalSmallTitleExample extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
    };
  }

  openModal = () => this.setState({ showModal: true });

  closeModal = () => this.setState({ showModal: false });

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Button onClick={this.openModal}>Open Modal</Button>
        {showModal && (
          <Modal onClose={this.closeModal}>
            <Modal.Header>
              <Modal.HeaderText>
                <Modal.Title small>
                  Are you sure you want to delete this item?
                </Modal.Title>
              </Modal.HeaderText>
            </Modal.Header>
            <Modal.Content>
              You will not be able to recover this item later.
            </Modal.Content>
            <Modal.Footer>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <Button
                  style={{ marginRight: 24 }}
                  onClick={this.closeModal}
                  stroked
                >
                  Cancel
                </Button>
                <Button onClick={this.closeModal}>Delete</Button>
              </div>
            </Modal.Footer>
          </Modal>
        )}
      </>
    );
  }
}

ModalSmallTitleExample.code = `import React, { Component } from 'react';
import { Button, Modal } from '@catho/quantum';

class ModalExample extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
    };
  }

  openModal = () => this.setState({ showModal: true });

  closeModal = () => this.setState({ showModal: false });

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Button onClick={this.openModal}>Open Modal</Button>
        {showModal && (
          <Modal onClose={this.closeModal}>
            <Modal.Header>
              <Modal.HeaderText>
                <Modal.Title>
                  Are you sure you want to delete this item?
                </Modal.Title>
              </Modal.HeaderText>
            </Modal.Header>
            <Modal.Content>
              You will not be able to recover this item later.
            </Modal.Content>
            <Modal.Footer>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <Button
                  style={{ marginRight: 24 }}
                  onClick={this.closeModal}
                >
                  Delete
                </Button>
                <Button
                  onClick={this.closeModal}
                  skin="secondary"
                >Cancel</Button>
              </div>
            </Modal.Footer>
          </Modal>
        )}
      </>
    );
  }
}

export default ModalSmallTitleExample;
`;

export default ModalSmallTitleExample;
