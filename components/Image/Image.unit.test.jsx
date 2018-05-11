import React from 'react';
import renderer from 'react-test-renderer';
import Image from './Image';

describe('Image component ', () => {
  it('Should match snapshot', () => {
    const image = <Image src="example.png" alt="Example image" />;
    expect(renderer.create(image).toJSON()).toMatchSnapshot();
  });
});
