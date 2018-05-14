import React from 'react';
import { shallow } from 'enzyme';
import Image from './Image';

describe('Image component ', () => {
  it('Should match snapshot', () => {
    const image = <Image src="example.png" alt="Example image" />;
    expect(shallow(image)).toMatchSnapshot();
  });
});
