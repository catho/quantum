import { useState } from 'react';
import { Dialog, Button } from '../../components';
import Example, { ButtonWrapper } from './ExampleStyle';

const DialogExample = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const closeDialog = () => {
    setOpenDialog(false);
  };

  const handleSave = () => {
    // eslint-disable-next-line no-alert
    // eslint-disable-next-line no-undef
    alert('ACME Corporation');
    closeDialog();
  };

  return (
    <>
      <Button onClick={() => setOpenDialog(true)}>Open Dialog</Button>
      {openDialog && (
        <Dialog
          onClose={closeDialog}
          onClickOutside={event => console.log(event)}
        >
          <Example>
            <h3>Salvar alteração?</h3>
            <ButtonWrapper>
              <Button skin="error" onClick={() => closeDialog()}>
                Cancelar
              </Button>
              <Button onClick={() => handleSave()}>Salvar</Button>
            </ButtonWrapper>
          </Example>
        </Dialog>
      )}
    </>
  );
};

DialogExample.code = `
import { useState } from 'react';
import styled from 'styled-components';
import { Dialog, Button } from '../../components';

const Example = styled.div
  align-items: center;
  background: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 30%;
  justify-content: space-evenly;
  margin: auto;
  width: 300px;

  const ButtonWrapper = styled.div
  display: flex;
  justify-content: space-around;
  width: 100%;

const DialogExample = () => {

  const [openDialog, setOpenDialog] = useState(false);

  const handleDialog = () => {
    setOpenDialog(false)
  };

  const handleSave = () => {
    alert('ACME Corporation');
    closeDialog();
  }

  return (
    <>
      <Button onClick={() => setOpenDialog(true)}>Open Dialog</Button>
      {openDialog && (
        <Dialog onClose={closeDialog} onClickOutside={(event) => console.log(event)}>
          <Example>
            <h3>Salvar alteração?</h3>
            <ButtonWrapper>
              <Button skin='error' onClick={() => closeDialog()}>Cancelar</Button>
              <Button onClick={() => handleSave()}>Salvar</Button>
            </ButtonWrapper>
          </Example>
        </Dialog>
      )}
    </>
  )
}

export default DialogExample;
`;

export default DialogExample;
