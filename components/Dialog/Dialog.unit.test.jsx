import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Dialog from './Dialog';
import Example from '../../stories/Dialog/ExampleStyle';

describe('Dialog', () => {
  let component;

  it('should render the dialog with content', () => {
    expect(renderer.create(<Dialog shouldOpen />).toJSON()).toMatchSnapshot();
  });

  it('should render the Dialog with children', () => {
    component = shallow(
      <Dialog shouldOpen>
        <Example>
          <h3>Some text</h3>
        </Example>
      </Dialog>,
    );

    expect(component.find('h3').exists()).toBe(true);
  });

  it('should call onClose when clicked outside content', () => {
    const onCloseFunc = jest.fn();
    component = mount(<Dialog shouldOpen onClose={onCloseFunc} />);

    component.find('div').simulate('click');

    expect(onCloseFunc).toHaveBeenCalled();

    component.unmount();
  });

  it('should call onClose when "Escape" key is pressed', () => {
    const eventMap = {
      keydown: null,
    };
    window.addEventListener = jest.fn((event, cb) => {
      eventMap[event] = cb;
    });

    const onCloseMock = jest.fn();
    mount(<Dialog shouldOpen onClose={onCloseMock} />);

    eventMap.keydown({ key: 'Escape' });

    expect(onCloseMock).toHaveBeenCalled();
  });

  it('should call onClose after 1 second', async () => {
    const onCloseTimeout = jest.fn();
    mount(<Dialog shouldOpen onClose={onCloseTimeout} closeOnTime={1} />);

    await new Promise(r => setTimeout(r, 1000));

    expect(onCloseTimeout).toHaveBeenCalled();
  });
});
