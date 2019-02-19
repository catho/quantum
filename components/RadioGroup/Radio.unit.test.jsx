import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Radio from './Radio';

describe('<RadioGroup.Radio />', () => {
  const checkMock = jest.fn();
  const checkPreviousMock = jest.fn();
  const checkNextMock = jest.fn();

  const KEYS = Object.freeze({
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  });

  const radioExample = (
    <Radio
      value="Hello"
      label="Hello"
      check={checkMock}
      checkNext={checkNextMock}
      checkPrevious={checkPreviousMock}
    />
  );

  const wrapper = mount(radioExample);
  const shalloWrapper = shallow(radioExample);

  it('Should match the snapshot', () => {
    const tree = renderer.create(radioExample).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('properties', () => {
    it('Should have defaults', () => {
      const {
        type: {
          attrs: [attributes],
        },
      } = shalloWrapper.get(0);
      expect(attributes).toHaveProperty('role', 'radio');
      expect(attributes).toHaveProperty('aria-checked', 'false');
      expect(attributes).toHaveProperty('tabIndex', -1);
    });
  });

  describe('events', () => {
    const eventDefault = {
      stopPropagation() {},
      preventDefault() {},
    };

    it('Should check when clicked and when pressing space bar', () => {
      const space = {
        ...eventDefault,
        keyCode: KEYS.SPACE,
      };

      wrapper.simulate('click');
      expect(checkMock).toBeCalledWith(wrapper.props());

      wrapper.simulate('keydown', space);
      expect(checkMock).toBeCalledWith(wrapper.props());
    });

    it('Should check next radio when arrow right or down is triggered', () => {
      const right = {
        ...eventDefault,
        keyCode: KEYS.RIGHT,
      };

      const down = {
        ...eventDefault,
        keyCode: KEYS.DOWN,
      };

      wrapper.simulate('keydown', right);
      expect(checkNextMock).toBeCalledWith(wrapper.props());

      wrapper.simulate('keydown', down);
      expect(checkNextMock).toBeCalledWith(wrapper.props());
    });

    it('Should check previous radio when arrow left or up is triggered', () => {
      const up = {
        ...eventDefault,
        keyCode: KEYS.UP,
      };

      const left = {
        ...eventDefault,
        keyCode: KEYS.LEFT,
      };

      wrapper.simulate('keydown', up);
      expect(checkPreviousMock).toBeCalledWith(wrapper.props());

      wrapper.simulate('keydown', left);
      expect(checkPreviousMock).toBeCalledWith(wrapper.props());
    });

    it('Should focus when aria-checked change', () => {
      const radio = wrapper.instance().radioRef;
      jest.spyOn(radio, 'focus');

      wrapper.setProps({ 'aria-checked': true });

      expect(radio.focus).toHaveBeenCalledTimes(1);
    });
  });
});
