import { useState } from 'react';
import styled from 'styled-components';
import { Modal, Button } from '../../components';

const ContentExample = styled.div`
  background: white;
  margin: auto;
  padding: 8px;
  width: 300px;

  button {
    display: flex;
    width: 100%;
  }
`;

const Template = args => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Click to open Modal</Button>
      {openModal && (
        <Modal onClose={() => setOpenModal(false)} {...args}>
          <ContentExample>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button onClick={() => setOpenModal(false)}>Close Modal</Button>
          </ContentExample>
        </Modal>
      )}
    </>
  );
};

export const Default = Template.bind({});

export const WithButtonActions = Template.bind({});
WithButtonActions.args = {
  footer: (
    <Modal.Footer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button style={{ marginRight: 24 }} stroked>
          Cancel
        </Button>
        <Button>Delete</Button>
      </div>
    </Modal.Footer>
  ),
};
