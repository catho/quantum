import SegmentedControl from '../../components/SegmentedControl';
import {
  defaultContent,
  defaultContentWithoutCheckedItems,
  twoContents,
  fiveContentsWithIcon,
  fiveContentsWithIconAndWithoutCheckedItems,
} from '../../components/SegmentedControl/exampleContents';

const Template = args => <SegmentedControl items={defaultContent} {...args} />;

export const Default = Template.bind({});

export const TextWith2Items = Template.bind({});
TextWith2Items.args = {
  items: twoContents,
};

export const IconWith5Items = Template.bind({});
IconWith5Items.args = {
  items: fiveContentsWithIcon,
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
