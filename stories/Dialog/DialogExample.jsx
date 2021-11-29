import React, { useState } from 'react';
import { Dialog, Button } from '../../components';
import Example from './ExampleStyle';

const DialogExample = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const closeDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Button onClick={() => setOpenDialog(true)}>Open Dialog</Button>
      {openDialog && (
        <Dialog onClose={closeDialog}>
          <Example>
            <h1>Example text</h1>
          </Example>
        </Dialog>
      )}
    </>
  );
};

DialogExample.code = `
import React, { useState } from 'react';
import styled from 'styled-components';
import { Dialog, Button } from '../../components';

const Example = styled.div
  align-items: center;
  background: white;
  display: flex;
  height: 30%;
  justify-content: center;
  margin: auto;
  width: 30%;


const DialogExample = () => {

  const [openDialog, setOpenDialog] = useState(false);

  const handleDialog = () => {
    setOpenDialog(!openDialog)
  };

  return (
    <>
      <Button onClick={() => setOpenDialog(true)}>Open Dialog</Button>
      {openDialog <Dialog onClose={handleDialog}>
        <Example>
          <h1>Some text</h1>
        </Example>
      </Dialog>}
    </>
  )
}

export default DialogExample;
`;

export default DialogExample;
