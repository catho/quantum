import { fireEvent, render, screen } from '@testing-library/react';
import RangeSlider from './RangeSlider';

describe('<RangeSlider />', () => {
  describe('Snapshots', () => {
    it('should match the snapshot when have just one handle', () => {
      const { container } = render(<RangeSlider value={10} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should match the snapshot when have two handles', () => {
      const { container } = render(
        <RangeSlider value={{ from: 10, to: 30 }} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should match the snapshot when <RangeSlider /> is disabled', () => {
      const { container } = render(<RangeSlider disabled />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should match the snapshot when <RangeSlider /> label is on', () => {
      const { container } = render(<RangeSlider valueLabelDisplay="on" />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('tipFormatter prop', () => {
    it('should format Tooltip text and display it correctly when have just one handle', () => {
      render(
        <RangeSlider value={10} tipFormatter={(value) => `R$ ${value}`} />,
      );

      expect(screen.getByText('R$ 10')).toBeInTheDocument();
    });

    it('should format Tooltip text and display it correctly when have two handles', () => {
      render(
        <RangeSlider
          value={{ from: 10, to: 40 }}
          tipFormatter={(value) => `${value}km`}
        />,
      );

      expect(screen.getByText('10km')).toBeInTheDocument();
      expect(screen.getByText('40km')).toBeInTheDocument();
    });
  });

  describe('onChange prop', () => {
    it('should call it with currently slider value', async () => {
      const onChangeMock = jest.fn();
      const { container } = render(
        <RangeSlider defaultValue={10} onChange={onChangeMock} />,
      );

      const slider = container.querySelector('input');

      await fireEvent.mouseDown(slider, { clientX: 1 });

      expect(onChangeMock).toBeCalledTimes(1);
    });

    it('should call it with currently range value', async () => {
      const onChangeMock = jest.fn();
      const { container } = render(
        <RangeSlider
          defaultValue={{ from: 20, to: 80 }}
          onChange={onChangeMock}
        />,
      );
      const slider = container.querySelector('input');

      await fireEvent.mouseDown(slider, { clientX: 1 });

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
        render(<RangeSlider value={0} />);
        expect(global.console.error).not.toHaveBeenCalled();
      });

      it('should call console.error when it is not a number', () => {
        render(<RangeSlider value="1" />);
        expect(global.console.error).toHaveBeenCalled();
      });

      it('should call console.error when it is greater then max prop', () => {
        render(<RangeSlider max={40} value={50} />);
        expect(global.console.error).toHaveBeenCalled();
      });

      it('should call console.error when it is less then min prop', () => {
        render(<RangeSlider min={40} value={30} />);
        expect(global.console.error).toHaveBeenCalled();
      });
    });

    describe('with a range value', () => {
      it('should not call console.error when both is valid', () => {
        render(<RangeSlider value={{ from: 0, to: 100 }} />);
        expect(global.console.error).not.toHaveBeenCalled();
      });

      it('should call console.error when one of them are not a number', () => {
        render(<RangeSlider value={{ from: '0', to: 100 }} />);
        expect(global.console.error).toHaveBeenCalled();

        render(<RangeSlider value={{ from: 0, to: '100' }} />);
        expect(global.console.error).toHaveBeenCalled();
      });

      it('should call console.error when "to" value is greater then max prop', () => {
        render(<RangeSlider value={{ from: 0, to: 100 }} max={90} />);
        expect(global.console.error).toHaveBeenCalled();
      });

      it('should call console.error when "from" value is less then min prop', () => {
        render(<RangeSlider value={{ from: 0, to: 100 }} min={10} />);
        expect(global.console.error).toHaveBeenCalled();
      });
    });
  });
});
