import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import Dialog from './Dialog';
import Example from '../../stories/Dialog/ExampleStyle';

describe('Dialog', () => {
  let component;

  it('should render the dialog with content', () => {
    expect(toJson(mount(<Dialog />))).toMatchSnapshot();
  });

  it('should render the Dialog with children', () => {
    component = mount(
      <Dialog>
        <Example>
          <h3>Some text</h3>
        </Example>
      </Dialog>,
    );

    expect(component.find('h3').exists()).toBe(true);
  });

  it('should call onClose when clicked outside content', () => {
    const onCloseFunc = jest.fn();
    component = mount(<Dialog onClose={onCloseFunc} />);

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
    mount(<Dialog onClose={onCloseMock} />);

    eventMap.keydown({ key: 'Escape' });

    expect(onCloseMock).toHaveBeenCalled();
  });

  it('should call onClose after 1 second', async () => {
    const onCloseTimeout = jest.fn();
    mount(<Dialog onClose={onCloseTimeout} closeOnTime={1} />);

    await new Promise(r => setTimeout(r, 1000));

    expect(onCloseTimeout).toHaveBeenCalled();
  });
});
