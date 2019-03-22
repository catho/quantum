import React from 'react';
import { mount, shallow } from 'enzyme';
import Modal from './Modal';

describe('<Modal />', () => {
  let component;
  const wrapper = (
    <Modal>
      <Modal.Header>
        <Modal.HeaderText>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.HeaderText>
      </Modal.Header>
      <Modal.Content>Modal Content</Modal.Content>
      <Modal.Footer>ModalFooter</Modal.Footer>
    </Modal>
  );

  afterEach(() => component.unmount());

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      component = shallow(wrapper);
      expect(component).toMatchSnapshot();
    });
  });

  describe('Modal DOM position', () => {
    it('should be child of body element', () => {
      expect(document.body.childNodes.length).toBe(0);
      component = shallow(wrapper);
      expect(document.body.childNodes.length).toBe(1);
    });
  });

  describe('closeIcon Button', () => {
    it('should exists a closeIcon button when modal is rendered', () => {
      const modal = shallow(<Modal />);

      expect(modal.find('CloseIcon')).toBeTruthy();
    });

    it('should call onClock when CloseIcon is clicked', () => {
      const onCloseMock = jest.fn();
      const modal = shallow(<Modal onClose={onCloseMock} />);

      modal.find('CloseIcon').simulate('click');

      expect(onCloseMock).toHaveBeenCalled();
    });
  });
});
