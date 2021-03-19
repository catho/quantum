import React from 'react';
import { storiesOf } from '@storybook/react';
import SegmentedControl from '../../components/SegmentedControl';
import {
  defaultContent,
  defaultContentWithoutCheckedItems,
  twoContents,
  FiveContentsWithIcon,
  fiveContentsWithFirstChecked,
  FiveContentsWithIconAndWithoutCheckedItems,
  thresContentsWithIcon,
} from '../../components/SegmentedControl/exampleContents';

storiesOf('Segmented control', module)
  .add('Segmented control[text]: with 3 items ', () => (
    <SegmentedControl items={defaultContent} />
  ))
  .add('Segmented control[text]: with 2 items ', () => (
    <SegmentedControl items={twoContents} />
  ))
  .add('Segmented control[icon]: with 5 items ', () => (
    <SegmentedControl items={FiveContentsWithIcon} />
  ))
  .add('Segmented control[icon]: with 5 items and first one checked ', () => (
    <SegmentedControl items={fiveContentsWithFirstChecked} />
  ))
  .add('Segmented control[icon]: with 3 items ', () => (
    <SegmentedControl items={thresContentsWithIcon} />
  ))
  .add('Segmented control[text]: with 3 items and no item checked ', () => (
    <SegmentedControl items={defaultContentWithoutCheckedItems} />
  ))
  .add('Segmented control[icon]: with 5 items and no item checked ', () => (
    <SegmentedControl items={FiveContentsWithIconAndWithoutCheckedItems} />
  ))
  .add('Segmented control[Dark theme]: with 3 items', () => (
    <SegmentedControl items={defaultContent} darkMode />
  ))
  .add('Segmented control[Dark theme]: with 5 items ', () => (
    <SegmentedControl items={FiveContentsWithIcon} darkMode />
  ))
  .add(
    'Segmented control[Dark theme]: with 5 items and first one checked ',
    () => <SegmentedControl items={fiveContentsWithFirstChecked} darkMode />,
  )
  .add(
    'Segmented control[Dark theme]: with 3 items and no item checked ',
    () => (
      <SegmentedControl items={defaultContentWithoutCheckedItems} darkMode />
    ),
  )
  .add(
    'Segmented control[Dark theme]: with 5 items and no item checked ',
    () => (
      <SegmentedControl
        items={FiveContentsWithIconAndWithoutCheckedItems}
        darkMode
      />
    ),
  );
