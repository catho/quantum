import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Slider from './Slider';

describe('<Slider />', () => {
  describe('Snapshots', () => {
    const tipMock = {
      clientWidth: 1920,
      clientHeight: 1080,
    };

    it('should match the snapshot when have just one handle', () => {
      expect(
        renderer
          .create(<Slider value={10} />, {
            createNodeMock: element => tipMock,
          })
          .toJSON(),
      ).toMatchSnapshot();
    });

    it('should match the snapshot when have two handles', () => {
      expect(
        renderer
          .create(<Slider value={{ from: 10, to: 30 }} />, {
            createNodeMock: element => tipMock,
          })
          .toJSON(),
      ).toMatchSnapshot();
    });

    it('should match the snapshot when <Slider /> is disabled', () => {
      expect(
        renderer
          .create(<Slider disabled />, {
            createNodeMock: element => tipMock,
          })
          .toJSON(),
      ).toMatchSnapshot();
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

  describe('minMaxFormatter prop', () => {
    it('should format min and max dots text', () => {
      const range = mount(<Slider minMaxFormatter={value => `${value}km`} />);
      const dots = range.find('.rc-slider-mark-text');

      expect(dots.at(0).text()).toBe('0km');
      expect(dots.at(1).text()).toBe('100km');
    });
  });

  describe('onChange prop', () => {
    it('should call it with currently slider value', () => {
      const onChangeMock = jest.fn();
      const range = shallow(<Slider value={10} onChange={onChangeMock} />);
      const slider = range.find('RcSlider');

      slider.simulate('change', 20);

      expect(onChangeMock).toBeCalledWith(20);
    });

    it('should call it with currently range value', () => {
      const onChangeMock = jest.fn();
      const range = shallow(
        <Slider value={{ from: 0, to: 100 }} onChange={onChangeMock} />,
      );
      const slider = range.find('RcRange');

      slider.simulate('change', [20, 80]);

      expect(onChangeMock).toBeCalledWith({ from: 20, to: 80 });
    });
  });

  describe('min and max props', () => {
    it('should pass min prop to inner rc-slider component', () => {
      const min = 10;

      const range = mount(<Slider min={min} value={{ from: 10, to: 100 }} />);
      const slider = mount(<Slider min={min} />);

      const rcSlider = slider.find('RcSlider');
      const rcRange = range.find('RcRange');

      expect(rcSlider.prop('min')).toBe(min);
      expect(rcRange.prop('min')).toBe(min);
    });

    it('should pass max prop to inner rc-slider component', () => {
      const max = 100;

      const range = mount(<Slider max={max} value={{ from: 0, to: 100 }} />);
      const slider = mount(<Slider max={max} />);

      const rcSlider = slider.find('RcSlider');
      const rcRange = range.find('RcRange');

      expect(rcSlider.prop('max')).toBe(max);
      expect(rcRange.prop('max')).toBe(max);
    });
  });

  describe('value prop', () => {
    it('should convert value object to array and pass to inner rc-slider component', () => {
      const range = mount(<Slider value={{ from: 0, to: 50 }} />);
      const slider = range.find('RcRange');

      expect(slider.prop('value')).toEqual([0, 50]);
    });
  });

  describe('Value prop validator', () => {
    global.console = {
      error: jest.fn(),
    };

    beforeEach(global.console.error.mockReset);

    describe('with a single value', () => {
      it('should not call console.error when it is valid', () => {
        <Slider value={0} />;
        expect(global.console.error).not.toHaveBeenCalled();
      });

      it('should call console.error when it is not a number', () => {
        <Slider value="1" />;
        expect(global.console.error).toHaveBeenCalled();
      });

      it('should call console.error when it is greater then max prop', () => {
        <Slider max={40} value={50} />;
        expect(global.console.error).toHaveBeenCalled();
      });

      it('should call console.error when it is less then min prop', () => {
        <Slider min={40} value={30} />;
        expect(global.console.error).toHaveBeenCalled();
      });
    });

    describe('with a range value', () => {
      it('should not call console.error when both is valid', () => {
        <Slider value={{ from: 0, to: 100 }} />;
        expect(global.console.error).not.toHaveBeenCalled();
      });

      it('should call console.error when one of them are not a number', () => {
        <Slider value={{ from: '0', to: 100 }} />;
        expect(global.console.error).toHaveBeenCalled();

        <Slider value={{ from: 0, to: '100' }} />;
        expect(global.console.error).toHaveBeenCalled();
      });

      it('should call console.error when "to" value is greater then max prop', () => {
        <Slider value={{ from: 0, to: 100 }} max={90} />;
        expect(global.console.error).toHaveBeenCalled();
      });

      it('should call console.error when "from" value is less then min prop', () => {
        <Slider value={{ from: 0, to: 100 }} min={10} />;
        expect(global.console.error).toHaveBeenCalled();
      });
    });
  });
});
