import React, { Component } from 'react';
import { Button, Modal } from '../../../components';

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
                  Tem certeza que deseja excluir este arquivo?
                </Modal.Title>
              </Modal.HeaderText>
            </Modal.Header>
            <Modal.Content>
              Após excluir, não será possível recuperar este arquivo novamente.
            </Modal.Content>
            <Modal.Footer>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <Button
                  skin="secondary"
                  style={{ marginRight: 24 }}
                  onClick={this.closeModal}
                >
                  Excluir
                </Button>
                <Button onClick={this.closeModal}>Cancelar</Button>
              </div>
            </Modal.Footer>
          </Modal>
        )}
      </>
    );
  }
}

ModalExample.code = `import React, { Component } from 'react';
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
                  Tem certeza que deseja excluir este arquivo?
                </Modal.Title>
              </Modal.HeaderText>
            </Modal.Header>
            <Modal.Content>
              Após excluir, não será possível recuperar este arquivo novamente.
            </Modal.Content>
            <Modal.Footer>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <Button
                  skin="secondary"
                  style={{ marginRight: 24 }}
                  onClick={this.closeModal}
                >
                  Excluir
                </Button>
                <Button onClick={this.closeModal}>Cancelar</Button>
              </div>
            </Modal.Footer>
          </Modal>
        )}
      </>
    );
  }
}

export default ModalExample;
`;

export default ModalExample;
