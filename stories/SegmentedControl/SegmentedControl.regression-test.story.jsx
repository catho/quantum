import SegmentedControl from '../../components/SegmentedControl';
import {
  defaultContent,
  defaultContentWithoutCheckedItems,
  twoContents,
  fiveContentsWithIcon,
  fiveContentsWithFirstChecked,
  fiveContentsWithIconAndWithoutCheckedItems,
  threeContentsWithIcon,
} from '../../test-utils/mocks/SegmentedControl/exampleContents';

export default {
  title: 'Segmented control',
  component: SegmentedControl,
};

const Template = args => <SegmentedControl items={defaultContent} {...args} />;

export const TextWith3Items = Template.bind({});

export const TextWith2Items = Template.bind({});
TextWith2Items.args = {
  items: twoContents,
};

export const IconWith5Items = Template.bind({});
IconWith5Items.args = {
  items: fiveContentsWithIcon,
};

export const IconWith5ItemsAndFirstOneChecked = Template.bind({});
IconWith5ItemsAndFirstOneChecked.args = {
  items: fiveContentsWithFirstChecked,
};

export const IconWith3Items = Template.bind({});
IconWith3Items.args = {
  items: threeContentsWithIcon,
};

export const TextWith3ItemsAndNoItemChecked = Template.bind({});
TextWith3ItemsAndNoItemChecked.args = {
  items: defaultContentWithoutCheckedItems,
};

export const IconWith5ItemsAndNoItemChecked = Template.bind({});
IconWith5ItemsAndNoItemChecked.args = {
  items: fiveContentsWithIconAndWithoutCheckedItems,
};

export const DarkThemeWith3Items = Template.bind({});
DarkThemeWith3Items.args = {
  darkMode: true,
};

export const DarkThemeWith5Items = Template.bind({});
DarkThemeWith5Items.args = {
  items: fiveContentsWithIcon,
  darkMode: true,
};

export const DarkThemeWith5ItemsAndFirstOneChecked = Template.bind({});
DarkThemeWith5ItemsAndFirstOneChecked.args = {
  items: fiveContentsWithFirstChecked,
  darkMode: true,
};

export const DarkThemeWith3ItemsAndNoItemChecked = Template.bind({});
DarkThemeWith3ItemsAndNoItemChecked.args = {
  items: defaultContentWithoutCheckedItems,
  darkMode: true,
};

export const DarkThemeWith5ItemsAndNoItemChecked = Template.bind({});
DarkThemeWith5ItemsAndNoItemChecked.args = {
  items: fiveContentsWithIconAndWithoutCheckedItems,
  darkMode: true,
};
