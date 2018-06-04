import React from 'react';
import { mount } from 'enzyme';
import Popover from './Popover';
import Button from './../Button';
import Icon from './../Icon';

describe('Popover', () => {
  it('should match the snapshot', () => {
    const examples = [
      (
        <Popover>Interact</Popover>
      ), (
        <Popover title="Title" closeTitle="Close">
          Interact
        </Popover>
      ), (
        <Popover
          content={(
            <div>
              <h1>My title</h1>
              <ul>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
              </ul>

              <hr />

              <Button>Click me</Button>
            </div>
          )}
        >
          Interact
        </Popover>
      ), (
        <Popover place="top-right">
          Interact
        </Popover>
      ), (
        <Popover place="top-left">
          Interact
        </Popover>
      ), (
        <Popover place="left">
          Interact
        </Popover>
      ), (
        <Popover skin="p2p">
          Interact
        </Popover>
      ), (
        <Popover ribbon="Limited edition">
          Interact
        </Popover>
      ),
    ];

    examples.forEach((component) => {
      expect(mount(component).html()).toMatchSnapshot();
    });
  });

  it('should appear when children is clicked', () => {
    const wrapper = mount((
      <Popover>
        <Button>Interact</Button>
      </Popover>
    ));

    expect(wrapper.state('show')).toBe(false);

    wrapper.find(Button).simulate('click', {});

    expect(wrapper.state('show')).toBe(true);
  });

  describe('should disappear according matched trigger', () => {
    const wrapper = mount((
      <Popover>
        <Button>Interact</Button>
      </Popover>
    ));

    beforeEach(() => {
      wrapper.find(Button).simulate('click', {});
    });

    it('when children is clicked twice', () => {
      wrapper.find(Button).simulate('click', {});
      expect(wrapper.state('show')).toBe(false);
    });

    it('when close icon is clicked', () => {
      wrapper.find(Icon).simulate('click', {});
      expect(wrapper.state('show')).toBe(false);
    });

    it('when a click outside popover is made', () => {
      const eventMap = {};

      // Add a clickable node to document
      const buttonNode = document.createElement('button');
      buttonNode.id = 'new-button';
      buttonNode.innerText = 'New Button';
      document.body.appendChild(buttonNode);

      // Populate eventMap
      document.addEventListener = jest.fn((event, cb) => {
        eventMap[event] = cb;
      });

      const popoverWrapper = mount(<Popover show>Interact</Popover>);

      // Trigger outside click handler
      eventMap.mousedown({ target: buttonNode });

      expect(popoverWrapper.state('show')).toBe(false);
    });
  });
});
