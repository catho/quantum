import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SegmentedControl from './SegmentedControl';
import {
  defaultContent,
  FiveContentsWithIcon,
  thresContentsWithIcon,
  nContents,
} from './exampleContents';

describe('<SegmentedControl />', () => {
  it('should match the snapshots', () => {
    const SegmentedControls = [
      <SegmentedControl items={defaultContent} />,
      <SegmentedControl items={FiveContentsWithIcon} />,
      <SegmentedControl items={thresContentsWithIcon} />,
    ];

    SegmentedControls.forEach(segmentedControl => {
      const segmentedComponent = mount(segmentedControl);
      expect(toJson(segmentedComponent)).toMatchSnapshot();
      segmentedComponent.unmount();
    });
  });

  it('should render icon instead text label if icon is setted', () => {
    const component = mount(
      <SegmentedControl items={thresContentsWithIcon} name="unit-test" />,
    );
    expect(component.find('Icon').exists()).toBeTruthy();
  });

  it('should render a maximum of 5 buttons', () => {
    const component = mount(
      <SegmentedControl items={nContents} name="unit-test" />,
    );
    expect(component.find('LabelButton').length).toEqual(5);
  });

  it('should input radio be checked when props contains item checked', () => {
    const component = mount(
      <SegmentedControl items={defaultContent} name="unit-test" />,
    );
    const firstItemValue = defaultContent[0].value;
    const itemValueChecked = defaultContent[1].value;
    expect(component.find('input[checked=true]').prop('value')).toEqual(
      itemValueChecked,
    );
    expect(
      component
        .find('input')
        .first()
        .prop('value'),
    ).toEqual(firstItemValue);
  });

  it('should change the button when its clicked', () => {
    const onChangeMock = jest.fn();
    const component = mount(
      <SegmentedControl
        items={defaultContent}
        name="unit-test"
        onChange={onChangeMock}
      />,
    );
    const firstRadio = component.find('LabelButton input').first();

    expect(onChangeMock).not.toHaveBeenCalled();
    expect(
      component
        .find('LabelButton')
        .first()
        .hasClass('input-checked'),
    ).toBeFalsy();
    firstRadio.simulate('change');
    expect(
      component
        .find('LabelButton')
        .first()
        .hasClass('input-checked'),
    ).toBeTruthy();
    expect(onChangeMock).toHaveBeenCalled();
  });

  it('(a11y) should contains aria-label corresponding the label of items', () => {
    const component = mount(
      <SegmentedControl items={defaultContent} name="unit-test" />,
    );
    const firstItemLabel = defaultContent[0].label;
    expect(
      component
        .find('LabelButton')
        .first()
        .prop('aria-label'),
    ).toEqual(firstItemLabel);
  });

  it('(a11y) should render the correct tabindex in each item', () => {
    const component = mount(
      <SegmentedControl items={defaultContent} name="unit-test" />,
    );
    expect(
      component
        .find('LabelButton')
        .first()
        .prop('tabIndex'),
    ).toEqual(0);
    expect(component.find('label.input-checked').prop('tabIndex')).toEqual(-1);
  });
});
