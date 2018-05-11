import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Placeholder from './placeholder.png';
import Image from './Image';

describe('Image component ', () => {
  it('Should match snapshot', () => {
    const image = <Image src={Placeholder} alt="Example image" />;
    expect(renderer.create(image).toJSON()).toMatchSnapshot();
  });
});
