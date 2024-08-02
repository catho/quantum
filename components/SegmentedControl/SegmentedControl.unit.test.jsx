import { render, screen, fireEvent } from '@testing-library/react';
import SegmentedControl from './SegmentedControl';
import {
  defaultContent,
  defaultContentWithoutCheckedItems,
  fiveContentsWithIcon,
  threeContentsWithIcon,
  nContents,
} from '../../test-utils/mocks/SegmentedControl/exampleContents';

describe('<SegmentedControl />', () => {
  it('should match the snapshots', () => {
    const SegmentedControls = [
      <SegmentedControl items={defaultContent} />,
      <SegmentedControl items={fiveContentsWithIcon} />,
      <SegmentedControl items={threeContentsWithIcon} />,
      <SegmentedControl items={threeContentsWithIcon} darkMode />,
    ];

    SegmentedControls.forEach((segmentedControl) => {
      const { container } = render(segmentedControl);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('should render icon instead text label if icon is setted', () => {
    const { container } = render(
      <SegmentedControl items={threeContentsWithIcon} name="unit-test" />,
    );
    expect(container.querySelectorAll('svg')).toHaveLength(3);
  });

  it('should render a maximum of 5 buttons', () => {
    const { container } = render(
      <SegmentedControl items={nContents} name="unit-test" />,
    );

    container.querySelectorAll('label').forEach((label, index) => {
      expect(label.getAttribute('aria-label')).toEqual(nContents[index].label);
    });
  });

  it('should input radio be checked when props contains item checked', () => {
    render(<SegmentedControl items={defaultContent} name="unit-test" />);
    const firstItemValue = defaultContent[0].value;
    const itemValueChecked = defaultContent[1].value;

    const checkedInput = screen.getByRole('radio', { name: /Operacional/i });
    const firstInput = screen.getByRole('radio', { name: /Profissional/i });

    expect(checkedInput).toHaveAttribute('checked');
    expect(checkedInput.getAttribute('value')).toEqual(itemValueChecked);
    expect(firstInput.getAttribute('value')).toEqual(firstItemValue);
  });

  it('should change the button when its clicked', () => {
    const onChangeMock = jest.fn();

    render(
      <SegmentedControl
        items={defaultContent}
        name="unit-test"
        onChange={onChangeMock}
      />,
    );

    const firstInput = screen.getByRole('radio', { name: /Profissional/i });
    const labelFirstInput = firstInput.parentElement;

    expect(onChangeMock).not.toHaveBeenCalled();

    expect(labelFirstInput).toHaveProperty('tabIndex', 0);
    expect(firstInput).toHaveProperty('checked', false);
    fireEvent.click(firstInput);

    expect(firstInput).toHaveProperty('checked', true);
    expect(labelFirstInput).toHaveProperty('tabIndex', -1);
    expect(onChangeMock).toHaveBeenCalled();
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it('should not have checked prop', () => {
    render(<SegmentedControl items={defaultContentWithoutCheckedItems} />);
    const inputs = screen.getAllByRole('radio');

    inputs.forEach((input) => {
      expect(input).not.toHaveAttribute('checked');
    });
  });

  it('(a11y) should contains aria-label corresponding the label of items', () => {
    const { container } = render(
      <SegmentedControl items={defaultContent} name="unit-test" />,
    );

    const firstLabel = container.querySelectorAll('label')[0];
    const firstItemLabel = defaultContent[0].label;
    expect(firstLabel.getAttribute('aria-label')).toMatch(firstItemLabel);
  });

  it('(a11y) should render the correct tabindex in each item', () => {
    const { container } = render(
      <SegmentedControl items={defaultContent} name="unit-test" />,
    );

    const firstLabel = container.querySelectorAll('label')[0];
    const secondLabel = container.querySelectorAll('label')[1];

    expect(firstLabel.getAttribute('tabindex')).toEqual('0');
    expect(secondLabel.getAttribute('tabindex')).toEqual('-1');
  });
});
