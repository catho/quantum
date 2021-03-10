import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Carousel from './Carousel';

const content = [
  {
    imagePath: 'https://assets.catho.com.br/logo/svg/blue.svg',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '1 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://assets.catho.com.br/logo/svg/blue.svg',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '2 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://assets.catho.com.br/logo/svg/blue.svg',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '3 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://assets.catho.com.br/logo/svg/blue.svg',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '4 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://assets.catho.com.br/logo/svg/blue.svg',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '5 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://assets.catho.com.br/logo/svg/blue.svg',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '6 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://assets.catho.com.br/logo/svg/blue.svg',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '7 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://assets.catho.com.br/logo/svg/blue.svg',
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
    expect(
      renderer.create(<Carousel cards={content} cardSize="small" />).toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer.create(<Carousel cards={content} cardSize="large" />).toJSON(),
    ).toMatchSnapshot();
  });

  it('should not have dots when the card size is small', () => {
    const component = mount(<Carousel cards={content} cardSize="small" />);
    expect(component.find('.slick-slider .slick-dots').exists()).toBeFalsy();
  });

  it('should hide dots when dotsPagination is false', () => {
    const componentMediumDotsFalse = mount(
      <Carousel cards={content} dotsPagination={false} />,
    );
    expect(
      componentMediumDotsFalse.find('.slick-slider .slick-dots').exists(),
    ).toBeFalsy();

    const componentLargeDotsFalse = mount(
      <Carousel cards={content} cardSize="large" dotsPagination={false} />,
    );
    expect(
      componentLargeDotsFalse.find('.slick-slider .slick-dots').exists(),
    ).toBeFalsy();
  });

  it('should show dots', () => {
    const componentMediumDotsThruthy = mount(<Carousel cards={content} />);
    expect(
      componentMediumDotsThruthy.find('.slick-slider .slick-dots').exists(),
    ).toBeTruthy();

    const componentLargeDotsThruthy = mount(
      <Carousel cards={content} cardSize="large" />,
    );
    expect(
      componentLargeDotsThruthy.find('.slick-slider .slick-dots').exists(),
    ).toBeTruthy();
  });
});
