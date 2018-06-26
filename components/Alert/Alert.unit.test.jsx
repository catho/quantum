import React from 'react';
import { mount } from 'enzyme';
import Alert from './Alert';

describe('Input component ', () => {
  it('should match the snapshot', () => {
    const examples = [
      (
        <Alert
          show
          type="info"
          message={{
            title: 'Simple',
            text: 'This is a dummy',
          }}
        />
      ),
      (
        <Alert
          show
          type="success"
          message={{
            title: 'Simple',
            text: 'This is a dummy',
          }}
        />
      ),
      (
        <Alert
          show
          type="warning"
          message={{
            title: 'Simple',
            text: 'This is a dummy',
          }}
        />
      ),
      (
        <Alert
          show
          type="error"
          message={{
            title: 'Simple',
            text: 'This is a dummy',
          }}
        />
      ),
    ];
    examples.forEach((component) => {
      expect(mount(component).html()).toMatchSnapshot();
    });
  });

  it('should close when click the close button', () => {
    const alert = mount((
      <Alert
        show
        type="info"
        message={{
          title: 'Simple',
          text: 'This is a dummy',
        }}
      />
    ));

    alert.find('AlertClose').simulate('click', {});

    expect(alert.state('show')).toBe(false);
  });

  it('should close when duration time ends', () => {
    jest.useFakeTimers();

    const alert = mount((
      <Alert
        show
        duration={5}
        type="info"
        message={{
          title: 'Simple',
          text: 'This is a dummy',
        }}
      />
    ));

    expect(alert.state('show')).toBe(true);
    jest.runAllTimers();
    expect(alert.state('show')).toBe(false);
  });

  it('should call onClose callback when click the close button', () => {
    const closeCallback = jest.fn();
    const alert = mount((
      <Alert
        show
        onClose={closeCallback}
        type="info"
        message={{
          title: 'Simple',
          text: 'This is a dummy',
        }}
      />
    ));

    alert.find('AlertClose').simulate('click', {});
    expect(closeCallback).toHaveBeenCalledTimes(1);
  });

  it('should call onClose callback when alert duration ends', () => {
    jest.useFakeTimers();
    const closeCallback = jest.fn();
    mount((
      <Alert
        show
        duration={5}
        onClose={closeCallback}
        type="info"
        message={{
          title: 'Simple',
          text: 'This is a dummy',
        }}
      />
    ));

    jest.runAllTimers();
    expect(closeCallback).toHaveBeenCalledTimes(1);
  });
});
