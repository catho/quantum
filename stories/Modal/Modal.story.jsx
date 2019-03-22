import React from 'react';
import { storiesOf } from '@storybook/react';
import { Modal } from '../../components';

storiesOf('Modal', module).add('Modal', () => (
  <Modal>
    <Modal.Header>
      <Modal.HeaderText>
        <Modal.Title>Este é o Header do Modal Dialog</Modal.Title>
      </Modal.HeaderText>
    </Modal.Header>
    <Modal.Content>
      Esta é a Mensagem do Modal Dialog. Ela é opcional e ajuda a descrever com
      mais detalhes a mensagem que precisa ser transmitida. Este modal também
      pode ter botões com até 2 ações, uma primária e uma secundária.
    </Modal.Content>
  </Modal>
));
