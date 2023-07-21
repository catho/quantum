import { useState } from 'react';
import styled from 'styled-components';
import { Dialog, Button } from '../../components';

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

const Template = (args) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenDialog(true)}>Click to open dialog</Button>
      {openDialog && (
        <Dialog onClose={() => setOpenDialog(false)} {...args}>
          <ContentExample>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button onClick={() => setOpenDialog(false)}>Close Dialog</Button>
          </ContentExample>
        </Dialog>
      )}
    </>
  );
};

export const Default = Template.bind({});

export const CloseOnTime = Template.bind({});
CloseOnTime.args = {
  closeOnTime: 3,
};

export const DisableClickOutside = Template.bind({});
DisableClickOutside.args = {
  disableClickOutside: true,
};
