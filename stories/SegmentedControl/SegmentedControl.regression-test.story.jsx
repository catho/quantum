import React from 'react';
import SegmentedControl from '../../components/SegmentedControl';
import {
  defaultContent,
  defaultContentWithoutCheckedItems,
  twoContents,
  fiveContentsWithIcon,
  fiveContentsWithFirstChecked,
  fiveContentsWithIconAndWithoutCheckedItems,
  threeContentsWithIcon,
} from '../../components/SegmentedControl/exampleContents';

export default {
  title: 'Segmented control',
};

export const SegmentedControlTextWith3Items = () => (
  <SegmentedControl items={defaultContent} />
);

SegmentedControlTextWith3Items.story = {
  name: 'Segmented control[text]: with 3 items ',
};

export const SegmentedControlTextWith2Items = () => (
  <SegmentedControl items={twoContents} />
);

SegmentedControlTextWith2Items.story = {
  name: 'Segmented control[text]: with 2 items ',
};

export const SegmentedControlIconWith5Items = () => (
  <SegmentedControl items={fiveContentsWithIcon} />
);

SegmentedControlIconWith5Items.story = {
  name: 'Segmented control[icon]: with 5 items ',
};

export const SegmentedControlIconWith5ItemsAndFirstOneChecked = () => (
  <SegmentedControl items={fiveContentsWithFirstChecked} />
);

SegmentedControlIconWith5ItemsAndFirstOneChecked.story = {
  name: 'Segmented control[icon]: with 5 items and first one checked ',
};

export const SegmentedControlIconWith3Items = () => (
  <SegmentedControl items={threeContentsWithIcon} />
);

SegmentedControlIconWith3Items.story = {
  name: 'Segmented control[icon]: with 3 items ',
};

export const SegmentedControlTextWith3ItemsAndNoItemChecked = () => (
  <SegmentedControl items={defaultContentWithoutCheckedItems} />
);

SegmentedControlTextWith3ItemsAndNoItemChecked.story = {
  name: 'Segmented control[text]: with 3 items and no item checked ',
};

export const SegmentedControlIconWith5ItemsAndNoItemChecked = () => (
  <SegmentedControl items={fiveContentsWithIconAndWithoutCheckedItems} />
);

SegmentedControlIconWith5ItemsAndNoItemChecked.story = {
  name: 'Segmented control[icon]: with 5 items and no item checked ',
};

export const SegmentedControlDarkThemeWith3Items = () => (
  <SegmentedControl items={defaultContent} darkMode />
);

SegmentedControlDarkThemeWith3Items.story = {
  name: 'Segmented control[Dark theme]: with 3 items',
};

export const SegmentedControlDarkThemeWith5Items = () => (
  <SegmentedControl items={fiveContentsWithIcon} darkMode />
);

SegmentedControlDarkThemeWith5Items.story = {
  name: 'Segmented control[Dark theme]: with 5 items ',
};

export const SegmentedControlDarkThemeWith5ItemsAndFirstOneChecked = () => (
  <SegmentedControl items={fiveContentsWithFirstChecked} darkMode />
);

SegmentedControlDarkThemeWith5ItemsAndFirstOneChecked.story = {
  name: 'Segmented control[Dark theme]: with 5 items and first one checked ',
};

export const SegmentedControlDarkThemeWith3ItemsAndNoItemChecked = () => (
  <SegmentedControl items={defaultContentWithoutCheckedItems} darkMode />
);

SegmentedControlDarkThemeWith3ItemsAndNoItemChecked.story = {
  name: 'Segmented control[Dark theme]: with 3 items and no item checked ',
};

export const SegmentedControlDarkThemeWith5ItemsAndNoItemChecked = () => (
  <SegmentedControl
    items={fiveContentsWithIconAndWithoutCheckedItems}
    darkMode
  />
);

SegmentedControlDarkThemeWith5ItemsAndNoItemChecked.story = {
  name: 'Segmented control[Dark theme]: with 5 items and no item checked ',
};
