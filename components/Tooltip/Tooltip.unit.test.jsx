import React from 'react';
import { mount } from 'enzyme';
import Tooltip from './Tooltip';

describe('Tooltip component ', () => {
  describe('All positions', () => {
    it('Should match the snapshot when place is top', () => {
      const tooltip = mount(<Tooltip place="top">Hover Me</Tooltip>);
      expect(tooltip.html()).toMatchSnapshot();
    });

    it('Should match the snapshot when place is right', () => {
      const tooltip = mount(<Tooltip place="right">Hover Me</Tooltip>);
      expect(tooltip.html()).toMatchSnapshot();
    });

    it('Should match the snapshot when place is bottom', () => {
      const tooltip = mount(<Tooltip place="bottom">Hover Me</Tooltip>);
      expect(tooltip.html()).toMatchSnapshot();
    });

    it('Should match the snapshot when place is left', () => {
      const tooltip = mount(<Tooltip place="left">Hover Me</Tooltip>);
      expect(tooltip.html()).toMatchSnapshot();
    });
  });
});
