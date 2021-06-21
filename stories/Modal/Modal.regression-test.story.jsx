import React from 'react';
import { Modal, Button } from '../../components';

const modalHeader = (titleProps = {}) => (
  <Modal.Header>
    <Modal.HeaderText>
      <Modal.Title {...titleProps}>
        Are you sure you want to delete this item?
      </Modal.Title>
    </Modal.HeaderText>
  </Modal.Header>
);

const modalContent = (
  <Modal.Content>
    You will not be able to recover this item later.
  </Modal.Content>
);

const modalFooterSimple = <Modal.Footer>this is a modal footer</Modal.Footer>;

export default {
  title: 'Modal',
};

export const SimpleModal = () => (
  <>
    {modalHeader()}
    {modalContent}
    {modalFooterSimple}
  </>
);

SimpleModal.story = {
  name: 'simple modal',
};

export const SimpleModalWithSmallTextTitle = () => (
  <>
    {modalHeader({ small: true })}
    {modalContent}
    {modalFooterSimple}
  </>
);

SimpleModalWithSmallTextTitle.story = {
  name: 'simple modal with small text title',
};

export const ModalWithButtonActions = () => (
  <>
    {modalHeader()}
    {modalContent}
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
  </>
);

ModalWithButtonActions.story = {
  name: 'modal with button actions',
};
