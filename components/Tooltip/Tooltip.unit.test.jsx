import { fireEvent, render, screen } from '@testing-library/react';

import Tooltip from './Tooltip';

const TOOLTIP_TRIGGER = 'Hover me';
const TOOLTIP_TEXT = 'This is a hint';
const MULTILINE_TOOLTIP_TEXT = `Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. 
Aenean bibendum facilisis sem viverra fringilla. 
Suspendisse finibus libero nec justo semper.`;

describe('Tooltip component ', () => {
  it('Should match the snapshot when place is top', () => {
    expect(
      render(
        <Tooltip visible place="top" text={TOOLTIP_TEXT}>
          {TOOLTIP_TRIGGER}
        </Tooltip>,
      ).asFragment(),
    ).toMatchSnapshot();
  });

  it('Should match the snapshot when place is right', () => {
    expect(
      render(
        <Tooltip visible place="right" text={TOOLTIP_TEXT}>
          {TOOLTIP_TRIGGER}
        </Tooltip>,
      ).asFragment(),
    ).toMatchSnapshot();
  });

  it('Should match the snapshot when place is bottom', () => {
    expect(
      render(
        <Tooltip visible place="bottom" text={TOOLTIP_TEXT}>
          {TOOLTIP_TRIGGER}
        </Tooltip>,
      ).asFragment(),
    ).toMatchSnapshot();
  });

  it('Should match the snapshot when place is left', () => {
    expect(
      render(
        <Tooltip visible place="left" text={TOOLTIP_TEXT}>
          {TOOLTIP_TRIGGER}
        </Tooltip>,
      ).asFragment(),
    ).toMatchSnapshot();
  });

  it('Should match the snapshot when is multiline', () => {
    expect(
      render(
        <Tooltip visible text={MULTILINE_TOOLTIP_TEXT} multiline>
          {TOOLTIP_TRIGGER}
        </Tooltip>,
      ).asFragment(),
    ).toMatchSnapshot();
  });
  it('Should match the snapshot when is not multiline', () => {
    expect(
      render(
        <Tooltip visible text={MULTILINE_TOOLTIP_TEXT}>
          {TOOLTIP_TRIGGER}
        </Tooltip>,
      ).asFragment(),
    ).toMatchSnapshot();
  });

  it('should toggle visibility when mouse enter and mouse leave', () => {
    render(<Tooltip text={TOOLTIP_TEXT}>{TOOLTIP_TRIGGER}</Tooltip>);

    const tooltipTrigger = screen.getByText(TOOLTIP_TRIGGER);
    fireEvent.mouseEnter(tooltipTrigger);

    const tip = screen.getByText(TOOLTIP_TEXT);

    expect(tip.parentNode).toHaveStyleRule('visibility', 'visible');

    fireEvent.mouseLeave(tooltipTrigger);

    expect(tip.parentNode).toHaveStyleRule('visibility', 'hidden');
  });
});
