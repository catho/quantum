import React from 'react';
import renderer from 'react-test-renderer';
// import { mount, shallow } from 'enzyme';
import Carousel from './Carousel';

const content = [
  {
    imagePath: 'https://picsum.photos/192/104',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '1 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://picsum.photos/192/104',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '2 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://picsum.photos/192/104',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '3 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://picsum.photos/192/104',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '4 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://picsum.photos/192/104',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '5 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://picsum.photos/192/104',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '6 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://picsum.photos/192/104',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '7 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://picsum.photos/192/104',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '8 Lorem ipsum dolor avec celestium of soterum',
  },
];

describe('<Carousel />', () => {
  it('should match the snapshot', () => {
    expect(
      renderer.create(<Carousel cards={content} />).toJSON(),
    ).toMatchSnapshot();
  });
});
