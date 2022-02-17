import List from '../../components/List';
import {
  exampleItemsDefault,
  exampleItemsWithHeaderAndSubHeader,
  exampleItemsWithIcon,
} from './objectReference';

export default {
  title: 'List',
  component: List,
};

const Template = args => <List items={exampleItemsDefault} {...args} />;
const TemplateWithIcon = args => (
  <List items={exampleItemsWithIcon} {...args} />
);
const TemplateWithHeaderAndSubHeader = args => (
  <List items={exampleItemsWithHeaderAndSubHeader} {...args} />
);

export const Unordered = Template.bind({});

export const UnorderedInline = Template.bind({});
UnorderedInline.args = {
  inline: true,
};

export const UnorderedWithBullets = Template.bind({});
UnorderedWithBullets.args = {
  bullet: '•',
};

export const UnorderedWithBulletsInline = Template.bind({});
UnorderedWithBulletsInline.args = {
  ...UnorderedWithBullets.args,
  ...UnorderedInline.args,
};

export const UnorderedWithBulletsDivided = Template.bind({});
UnorderedWithBulletsDivided.args = {
  ...UnorderedWithBullets.args,
  divided: true,
};

export const UnorderedWithBulletsAndIcons = TemplateWithIcon.bind({});
UnorderedWithBulletsAndIcons.args = {
  ...UnorderedWithBullets.args,
};

export const UnorderedWithHeaderAndSubheader = TemplateWithHeaderAndSubHeader.bind(
  {},
);
UnorderedWithHeaderAndSubheader.args = {
  ...UnorderedWithBullets.args,
};

export const Ordered = Template.bind({});
Ordered.args = {
  ordered: true,
};

export const OrderedInline = Template.bind({});
OrderedInline.args = {
  ...Ordered.args,
  inline: true,
};

export const OrderedWithIcons = TemplateWithIcon.bind({});
OrderedWithIcons.args = {
  ...Ordered.args,
};

export const OrderedWithHeaderAndSubheader = TemplateWithHeaderAndSubHeader.bind(
  {},
);
OrderedWithHeaderAndSubheader.args = {
  ...Ordered.args,
};
