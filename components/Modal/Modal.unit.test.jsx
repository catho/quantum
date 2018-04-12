import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Modal from './Modal';

describe('Radio component', () => {
  const closeModal = () => {};
  const modal = (
    <Modal
      closeModal={closeModal}
      title="Modal Example"
      opened
    >
      Example Message
    </Modal>
  );
  const wrapper = shallow(<div>{modal}</div>);

  it('Should verify if Modal contains the required properties', () => {
    expect(wrapper.find('Modal')).toHaveLength(1);
    expect(wrapper.find('Modal').prop('closeModal')).toEqual(closeModal);
    expect(wrapper.find('Modal').prop('title')).toEqual('Modal Example');
    expect(wrapper.find('Modal').prop('opened')).toEqual(true);
  });

  it('Should match the snapshot', () => {
    const tree = renderer.create(modal).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
