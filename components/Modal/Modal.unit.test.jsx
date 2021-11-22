import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
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

  afterEach(() => {
    if (component && component.length) component.unmount();
  });

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      component = mount(wrapper);
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe('Modal DOM position', () => {
    it('should be child of body element', () => {
      expect(document.body.childNodes.length).toBe(0);
      component = mount(wrapper);
      expect(document.body.childNodes.length).toBe(1);
    });
  });

  describe('closeIcon', () => {
    it('should exists a closeIcon button when modal is rendered', () => {
      const modal = mount(<Modal />);

      expect(modal.find('CloseIcon')).toBeTruthy();
    });
  });

  describe('onClose prop', () => {
    it('should call onClose when CloseIcon is clicked', () => {
      const onCloseMock = jest.fn();
      const modal = mount(<Modal onClose={onCloseMock} />);

      modal.find('CloseIcon').simulate('click');

      expect(onCloseMock).toHaveBeenCalled();
    });

    it('should call onClose when is clicked outside Modal', () => {
      const onCloseMock = jest.fn();
      const modal = mount(<Modal onClose={onCloseMock} />);

      modal.find('ModalWrapper').simulate('click');

      expect(onCloseMock).toHaveBeenCalled();
    });

    it('should call onClose when "Escape" key is pressed', () => {
      const eventMap = {
        keydown: null,
      };
      window.addEventListener = jest.fn((event, cb) => {
        eventMap[event] = cb;
      });

      const onCloseMock = jest.fn();
      mount(<Modal onClose={onCloseMock} />);

      eventMap.keydown({ key: 'Escape' });

      expect(onCloseMock).toHaveBeenCalled();
    });
  });

  describe('Tab events', () => {
    it('should not focus first element when Modal is opened', () => {
      const modal = mount(
        <Modal>
          <Modal.Footer>
            <button type="button">Cancel</button>
            <button type="button">Ok</button>
          </Modal.Footer>
        </Modal>,
      );

      const focusedElement = document.activeElement;

      expect(
        modal
          .find('button')
          .at(0)
          .getDOMNode(),
      ).toBe(focusedElement);
    });

    it('should not focus first element when Modal is opened', () => {
      mount(
        <Modal>
          <Modal.Content>
            <p>
              Some text<a href="catho.com">Some link</a>
            </p>
          </Modal.Content>
          <Modal.Footer>
            <button type="button">Cancel</button>
            <button type="button">Ok</button>
          </Modal.Footer>
        </Modal>,
      );

      const focusedElement = document.activeElement;

      expect(focusedElement.nodeName).not.toBe('A');
      expect(focusedElement.nodeName).toBe('BUTTON');
    });
  });
});
