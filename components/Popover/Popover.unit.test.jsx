import React from 'react';
import { mount } from 'enzyme';
import Popover from './Popover';
import Button from './../Button';

describe('Popover', () => {
  it('should match the snapshot', () => {
    const examples = {
      default: <Popover>Interact</Popover>,
      withTitle: (
        <Popover title="Title" closeTitle="Close">
          Interact
        </Popover>
      ),
      withRichContent: (
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
      ),
      topRight: (
        <Popover place="top-right">
          Interact
        </Popover>
      ),
      topLeft: (
        <Popover place="top-left">
          Interact
        </Popover>
      ),
      left: (
        <Popover place="left">
          Interact
        </Popover>
      ),
      p2pSkin: (
        <Popover skin="p2p">
          Interact
        </Popover>
      ),
      withStamp: (
        <Popover stamp="Limited edition">
          Interact
        </Popover>
      ),
    };

    Object.values(examples).forEach((component) => {
      expect(mount(component).html()).toMatchSnapshot();
    });
  });

  it('should appear according matched trigger', () => {
    const wrapper = mount((
      <Popover>
        <Button>Interact</Button>
      </Popover>
    ));

    expect(wrapper.state('show')).toBe(false);

    wrapper.find(Button).simulate('click', {});

    expect(wrapper.state('show')).toBe(true);
  });
});
