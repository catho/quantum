import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './Header';
import PromotionBar from './sub-components/PromotionBar';
import data from './data';

Enzyme.configure({ adapter: new Adapter() });
jest.mock('axios', () => jest.fn(() => Promise.resolve({ data: true })));

describe('<Header />', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<Header
      data={data}
      path="/"
      handleMenuOpen={() => {}}
      handleLoginOpen={() => {}}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should show promotion bar', async () => {
    const componentDidMount = jest.spyOn(Header.prototype, 'componentDidMount');
    const component = await shallow(<Header handleMenuOpen={() => {}} handleLoginOpen={() => {}} data={data} path="/" />);

    component.update();

    expect(component.find(PromotionBar)).toHaveLength(1);
    expect(componentDidMount).toHaveBeenCalledTimes(1);
  });

  it('Should not show promotion bar', () => {
    const tree = renderer.create(<Header handleMenuOpen={() => {}} handleLoginOpen={() => {}} data={data} path="/" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
