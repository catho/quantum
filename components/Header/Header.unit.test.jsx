import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import cookie from 'react-cookies';

import Header from './Header';
import PromotionBar from './sub-components/PromotionBar';

jest.mock('axios', () => jest.fn(() => Promise.resolve({ data: true })));
cookie.load = jest.fn(() => 'foo_bar');

describe('<Header />', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<Header path="/" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should show promotion bar', async () => {
    const componentDidMount = jest.spyOn(Header.prototype, 'componentDidMount');
    const component = await shallow(<Header path="/" />);

    component.update();

    expect(component.find(PromotionBar)).toHaveLength(1);
    expect(componentDidMount).toHaveBeenCalledTimes(1);
  });
});
