import React from 'react';
import { mount } from 'enzyme';
import Tooltip from './Tooltip';

const TOOLTIP_TEXT = 'This is a hint';

describe('Tooltip component ', () => {
  describe('All positions', () => {
    it('Should match the snapshot when place is top', () => {
      const tooltip = mount(
        <Tooltip place="top" text={TOOLTIP_TEXT}>
          Hover Me
        </Tooltip>,
      );
      expect(tooltip.html()).toMatchSnapshot();
    });

    it('Should match the snapshot when place is right', () => {
      const tooltip = mount(
        <Tooltip place="right" text={TOOLTIP_TEXT}>
          Hover Me
        </Tooltip>,
      );
      expect(tooltip.html()).toMatchSnapshot();
    });

    it('Should match the snapshot when place is bottom', () => {
      const tooltip = mount(
        <Tooltip place="bottom" text={TOOLTIP_TEXT}>
          Hover Me
        </Tooltip>,
      );
      expect(tooltip.html()).toMatchSnapshot();
    });

    it('Should match the snapshot when place is left', () => {
      const tooltip = mount(
        <Tooltip place="left" text={TOOLTIP_TEXT}>
          Hover Me
        </Tooltip>,
      );
      expect(tooltip.html()).toMatchSnapshot();
    });
  });
});
