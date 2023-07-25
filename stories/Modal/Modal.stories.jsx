import { useState } from 'react';
import { Modal, Button } from '../../components';

export default {
  title: 'Modal',
  component: Modal,
};

const Template = (args) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
      {openModal && (
        <Modal onClose={() => setOpenModal(false)} {...args}>
          You will not be able to recover this item later.
        </Modal>
      )}
    </>
  );
};

const TemplateModalAdvanced = (args) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
      {openModal && (
        <Modal onClose={() => setOpenModal(false)} {...args}>
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
                onClick={() => setOpenModal(false)}
                stroked
              >
                Cancel
              </Button>
              <Button onClick={() => setOpenModal(false)}>Delete</Button>
            </div>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export const SimpleModal = Template.bind({});
export const AdvancedModal = TemplateModalAdvanced.bind({});
