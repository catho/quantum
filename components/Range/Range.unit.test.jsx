import React from 'react';
import { mount } from 'enzyme';
import Range from './Range';
import 'jest-styled-components';

describe('<Range />', () => {
  describe('Snapshots', () => {
    it('should match the snapshot when have just one handle', () => {
      const range = mount(<Range value={10} />);
      expect(range).toMatchSnapshot();
    });

    it('should match the snapshot when have two handles', () => {
      const range = mount(<Range value={{ from: 10, to: 30 }} />);
      expect(range).toMatchSnapshot();
    });

    it('should match the snapshot when <Range /> is disabled', () => {
      const range = mount(<Range disabled />);
      expect(range).toMatchSnapshot();
    });
  });

  describe('Tooltip position', () => {
    it('should align <Tooltip /> correctly when have just one handle', () => {
      const range = mount(<Range value={50} />);
      const tooltip = range.find('Tip');

      expect(tooltip).toHaveStyleRule('left', '50%');
    });

    it('shuold align <Tooltip /> correctly when have two handles', () => {
      const range = mount(<Range value={{ from: 0, to: 100 }} />);
      const tooltip = range.find('Tip');

      expect(tooltip).toHaveStyleRule('left', '50%');
    });
  });

  describe('tipFormatter', () => {
    it('should format Tooltip text and display it correctly when have just one handle', () => {
      const range = mount(
        <Range value={10} tipFormatter={value => `R$ ${value}`} />,
      );
      const tooltip = range.find('Tip');

      expect(tooltip.text()).toBe('R$ 10');
    });

    it('should format Tooltip text and display it correctly when have two handles', () => {
      const range = mount(
        <Range
          value={{ from: 10, to: 40 }}
          tipFormatter={value => `${value}km`}
        />,
      );
      const tooltip = range.find('Tip');

      expect(tooltip.text()).toBe('10km a 40km');
    });
  });

  describe('min and max props', () => {
    it('should pass min prop to inner rc-slider component', () => {
      const min = 10;

      const range = mount(<Range min={min} value={{ from: 10, to: 100 }} />);
      const slider = mount(<Range min={min} />);

      const rcSlider = slider.find('rcSlider');
      const rcRange = range.find('rcRange');

      expect(rcSlider.props().min).toBe(min);
      expect(rcRange.props().min).toBe(min);
    });

    it('should pass max prop to inner rc-slider component', () => {
      const max = 100;

      const range = mount(<Range max={max} value={{ from: 0, to: 100 }} />);
      const slider = mount(<Range max={max} />);

      const rcSlider = slider.find('rcSlider');
      const rcRange = range.find('rcRange');

      expect(rcSlider.props().max).toBe(max);
      expect(rcRange.props().max).toBe(max);
    });

    describe('PropType errors', () => {
      it(`should throw PropType error when 'value' prop is below accepted min value`, () => {
        global.console = { error: jest.fn() };
        mount(<Range min={10} value={0} />);

        expect(console.error).toBeCalled(); // eslint-disable-line

        global.console.error.mockReset();
      });

      it(`should throw PropType error when 'value' prop is higher than accepted max value`, () => {
        global.console = { error: jest.fn() };
        mount(<Range max={50} value={60} />);

        expect(console.error).toBeCalled(); // eslint-disable-line

        global.console.error.mockReset();
      });
    });
  });

  describe('value prop', () => {
    it('should convert value object to array and pass to inner rc-slider component', () => {
      const range = mount(<Range value={{ from: 0, to: 50 }} />);
      const slider = range.find('rcRange');

      expect(slider.props().value).toEqual([0, 50]);
    });
  });
});
