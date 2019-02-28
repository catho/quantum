import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Slider from './Slider';
import 'jest-styled-components';

describe('<Slider />', () => {
  describe('Snapshots', () => {
    it('should match the snapshot when have just one handle', () => {
      const range = mount(<Slider value={10} />);
      expect(toJson(range)).toMatchSnapshot();
    });

    it('should match the snapshot when have two handles', () => {
      const range = mount(<Slider value={{ from: 10, to: 30 }} />);
      expect(toJson(range)).toMatchSnapshot();
    });

    it('should match the snapshot when <Slider /> is disabled', () => {
      const range = mount(<Slider disabled />);
      expect(toJson(range)).toMatchSnapshot();
    });
  });

  describe('tipFormatter prop', () => {
    it('should format Tooltip text and display it correctly when have just one handle', () => {
      const range = mount(
        <Slider value={10} tipFormatter={value => `R$ ${value}`} />,
      );
      const tooltip = range.find('Tip');

      expect(tooltip.text()).toBe('R$ 10');
    });

    it('should format Tooltip text and display it correctly when have two handles', () => {
      const range = mount(
        <Slider
          value={{ from: 10, to: 40 }}
          tipFormatter={({ from, to }) => `${from}km to ${to}km`}
        />,
      );
      const tooltip = range.find('Tip');

      expect(tooltip.text()).toBe('10km to 40km');
    });
  });

  describe('onChange prop', () => {
    it('should call it with currently slider value', () => {
      const onChangeMock = jest.fn();
      const range = shallow(<Slider value={10} onChange={onChangeMock} />);
      const slider = range.find('rcSlider');

      slider.simulate('change', 20);

      expect(onChangeMock).toBeCalledWith(20);
    });

    it('should call it with currently range value', () => {
      const onChangeMock = jest.fn();
      const range = shallow(
        <Slider value={{ from: 0, to: 100 }} onChange={onChangeMock} />,
      );
      const slider = range.find('rcRange');

      slider.simulate('change', [20, 80]);

      expect(onChangeMock).toBeCalledWith({ from: 20, to: 80 });
    });
  });

  describe('min and max props', () => {
    it('should pass min prop to inner rc-slider component', () => {
      const min = 10;

      const range = mount(<Slider min={min} value={{ from: 10, to: 100 }} />);
      const slider = mount(<Slider min={min} />);

      const rcSlider = slider.find('rcSlider');
      const rcRange = range.find('rcRange');

      expect(rcSlider.props().min).toBe(min);
      expect(rcRange.props().min).toBe(min);
    });

    it('should pass max prop to inner rc-slider component', () => {
      const max = 100;

      const range = mount(<Slider max={max} value={{ from: 0, to: 100 }} />);
      const slider = mount(<Slider max={max} />);

      const rcSlider = slider.find('rcSlider');
      const rcRange = range.find('rcRange');

      expect(rcSlider.props().max).toBe(max);
      expect(rcRange.props().max).toBe(max);
    });
  });

  describe('value prop', () => {
    it('should convert value object to array and pass to inner rc-slider component', () => {
      const range = mount(<Slider value={{ from: 0, to: 50 }} />);
      const slider = range.find('rcRange');

      expect(slider.props().value).toEqual([0, 50]);
    });
  });
});
