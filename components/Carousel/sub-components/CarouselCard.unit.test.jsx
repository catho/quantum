import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import CarouselCard from './CarouselCard';

const CARD_TITLE = 'Card title';
const CARD_DESCRIPTION = 'Lorem ipsum dolor avec';

const content = {
  imagePath: 'https://assets.catho.com.br/logo/svg/blue.svg',
  imageDescription: 'a11y image description',
  title: CARD_TITLE,
  description: CARD_DESCRIPTION,
};

describe('<CarouselCard />', () => {
  it('should match the snapshots', () => {
    expect(
      renderer
        .create(<CarouselCard card={content} cardSize="small" />)
        .toJSON(),
    ).toMatchSnapshot();

    expect(
      renderer
        .create(<CarouselCard card={content} cardSize="medium" />)
        .toJSON(),
    ).toMatchSnapshot();

    expect(
      renderer
        .create(<CarouselCard card={content} cardSize="large" />)
        .toJSON(),
    ).toMatchSnapshot();
  });

  it('small card shouldnt have a title and description', () => {
    const component = mount(<CarouselCard card={content} cardSize="small" />);
    expect(component.find('Title').exists()).toBeFalsy();
    expect(component.find('Description').exists()).toBeFalsy();
  });

  it('medium cards should have title and description', () => {
    const component = mount(<CarouselCard card={content} cardSize="medium" />);
    expect(component.find('Title').text()).toEqual(CARD_TITLE);
    expect(component.find('Description').text()).toEqual(CARD_DESCRIPTION);
  });

  it('large cards should have title and description', () => {
    const component = mount(<CarouselCard card={content} cardSize="large" />);
    expect(component.find('Title').text()).toEqual(CARD_TITLE);
    expect(component.find('Description').text()).toEqual(CARD_DESCRIPTION);
  });
});
