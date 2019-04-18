import React from 'react';
import { mount } from 'enzyme';
import Popover from './Popover';

const POPOVER_TEXT = 'This is a hint';

describe('Popover component ', () => {
  describe('All positions', () => {
    it('Should match the snapshot when place is top', () => {
      const popover = mount(
        <Popover trigger={<span>popover here</span>}>{POPOVER_TEXT}</Popover>,
      );
      expect(popover.html()).toMatchSnapshot();
    });
  });
});
