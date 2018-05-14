import React from 'react';
import renderer from 'react-test-renderer';
import Logo from './Logo';

describe('Logo component ', () => {
  it('Should match snapshot with default logo', () => {
    const logo = <Logo alt="Example" />;
    expect(renderer.create(logo).toJSON()).toMatchSnapshot();
  });
});
