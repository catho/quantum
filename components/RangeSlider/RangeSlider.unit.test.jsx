import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RangeSlider from './RangeSlider';

describe('<RangeSlider />', () => {
  describe('Snapshots', () => {
    it('should match the snapshot when have just one handle', () => {
      expect(toJson(shallow(<RangeSlider value={10} />))).toMatchSnapshot();
    });

    it('should match the snapshot when have two handles', () => {
      expect(
        toJson(shallow(<RangeSlider value={{ from: 10, to: 30 }} />)),
      ).toMatchSnapshot();
    });

    it('should match the snapshot when <RangeSlider /> is disabled', () => {
      expect(toJson(shallow(<RangeSlider disabled />))).toMatchSnapshot();
    });
  });

  describe('tipFormatter prop', () => {
    it('should format Tooltip text and display it correctly when have just one handle', () => {
      const range = mount(
        <RangeSlider value={10} tipFormatter={value => `R$ ${value}`} />,
      );
      const tooltip = range.find('ValueLabel');

      expect(tooltip.text()).toBe('R$ 10');
    });

    it('should format Tooltip text and display it correctly when have two handles', () => {
      const range = mount(
        <RangeSlider
          value={{ from: 10, to: 40 }}
          tipFormatter={value => `${value}km`}
        />,
      );
      const tooltip = range.find('ValueLabel');

      expect(tooltip.at(0).text()).toBe('10km');
      expect(tooltip.at(1).text()).toBe('40km');
    });
  });

  describe('onChange prop', () => {
    it('should call it with currently slider value', () => {
      const onChangeMock = jest.fn();
      const range = shallow(<RangeSlider value={10} onChange={onChangeMock} />);
      const slider = range.find('SliderComponent');

      slider.simulate('change', 20);

      expect(onChangeMock).toBeCalledWith(20);
    });

    it('should call it with currently range value', () => {
      const onChangeMock = jest.fn();
      const range = shallow(
        <RangeSlider value={{ from: 0, to: 100 }} onChange={onChangeMock} />,
      );
      const slider = range.find('SliderComponent');

      slider.simulate('change', { from: 20, to: 80 });

      expect(onChangeMock.mock.calls.length).toBe(1);
    });
  });

  describe('Value prop validator', () => {
    global.console = {
      error: jest.fn(),
    };

    beforeEach(global.console.error.mockReset);

    describe('with a single value', () => {
      it('should not call console.error when it is valid', () => {
        mount(<RangeSlider value={0} />);
        expect(global.console.error).not.toHaveBeenCalled();
      });

      it('should call console.error when it is not a number', () => {
        mount(<RangeSlider value="1" />);
        expect(global.console.error).toHaveBeenCalled();
      });

      it('should call console.error when it is greater then max prop', () => {
        mount(<RangeSlider max={40} value={50} />);
        expect(global.console.error).toHaveBeenCalled();
      });

      it('should call console.error when it is less then min prop', () => {
        mount(<RangeSlider min={40} value={30} />);
        expect(global.console.error).toHaveBeenCalled();
      });
    });

    describe('with a range value', () => {
      it('should not call console.error when both is valid', () => {
        mount(<RangeSlider value={{ from: 0, to: 100 }} />);
        expect(global.console.error).not.toHaveBeenCalled();
      });

      it('should call console.error when one of them are not a number', () => {
        mount(<RangeSlider value={{ from: '0', to: 100 }} />);
        expect(global.console.error).toHaveBeenCalled();

        mount(<RangeSlider value={{ from: 0, to: '100' }} />);
        expect(global.console.error).toHaveBeenCalled();
      });

      it('should call console.error when "to" value is greater then max prop', () => {
        mount(<RangeSlider value={{ from: 0, to: 100 }} max={90} />);
        expect(global.console.error).toHaveBeenCalled();
      });

      it('should call console.error when "from" value is less then min prop', () => {
        mount(<RangeSlider value={{ from: 0, to: 100 }} min={10} />);
        expect(global.console.error).toHaveBeenCalled();
      });
    });
  });
});
