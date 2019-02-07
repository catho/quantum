import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';
import Button from '../Button';

describe('Radio component', () => {
  const component = (
    <Modal opened trigger={<Button>Open modal</Button>}>
      <Modal.Header>Title</Modal.Header>
      <Modal.Content>Example Content</Modal.Content>
      <Modal.Footer>
        <Button skin="primary">Cancel</Button>
        <Button>OK</Button>
      </Modal.Footer>
    </Modal>
  );

  it('Should match the snapshot', () => {
    expect(shallow(component)).toMatchSnapshot();
  });

  it('should open when click trigger element', () => {
    const modal = shallow(
      <Modal trigger={<Button>Open modal</Button>}>
        <Modal.Header>Title</Modal.Header>
        <Modal.Content>Example Content</Modal.Content>
        <Modal.Footer>
          <Button skin="primary">Cancel</Button>
          <Button>OK</Button>
        </Modal.Footer>
      </Modal>,
    );
    modal.find(Button).simulate('click');
    expect(modal.state('opened')).toBe(true);
  });

  it('should close when click on overlay', () => {
    const modal = shallow(
      <Modal opened closeOnOverlayClick trigger={<Button>Open modal</Button>}>
        <Modal.Header>Title</Modal.Header>
        <Modal.Content>Example Content</Modal.Content>
        <Modal.Footer>
          <Button skin="primary">Cancel</Button>
          <Button>OK</Button>
        </Modal.Footer>
      </Modal>,
    );
    expect(modal.state('opened')).toBe(true);
    modal.find('Overlay').simulate('click', {});
    expect(modal.state('opened')).toBe(false);
  });
});
