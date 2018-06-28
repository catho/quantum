import React from 'react';
import renderer from 'react-test-renderer';
import Modal from './Modal';

describe('Radio component', () => {
  const modal = <Modal trigger={<button />}>Example Message</Modal>;

  it('Should match the snapshot', () => {
    const tree = renderer.create(modal).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
