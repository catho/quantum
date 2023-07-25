import { List } from '../../components';
import {
  exampleItemsDefault,
  exampleItemsWithHeaderAndSubHeader,
  exampleItemsWithIcon,
} from './objectReference';

export default {
  title: 'Foundation/List',
  component: List,
};

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: exampleItemsDefault,
  bullet: '•',
};

export const Ordered = Template.bind({});
Ordered.args = {
  items: exampleItemsDefault,
  ordered: true,
};

export const Divided = Template.bind({});
Divided.args = {
  items: exampleItemsDefault,
  divided: true,
};

export const HeaderAndSubHeader = Template.bind({});
HeaderAndSubHeader.args = {
  ...Default.args,
  items: exampleItemsWithHeaderAndSubHeader,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  ...Default.args,
  items: exampleItemsWithIcon,
};
