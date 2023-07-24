import Link from '../../components/Link';
import { DarkDiv } from './style';

export default {
  title: 'Link',
  component: Link,
};

const Template = (args) => <Link {...args}>Example Link</Link>;

const DarkSkinTemplate = (args) => (
  <DarkDiv>
    <Link {...args}>Example Link</Link>
  </DarkDiv>
);

export const Default = Template.bind({});
Default.args = {
  href: '//www.catho.com.br',
  rel: 'noreferrer',
};

export const DefaultWithoutUnderline = Template.bind({});
DefaultWithoutUnderline.args = {
  ...Default,
  underline: false,
};

export const Dark = DarkSkinTemplate.bind({});
Dark.args = {
  ...Default,
  skin: 'dark',
};

export const DarkWithoutUnderline = DarkSkinTemplate.bind({});
DarkWithoutUnderline.args = {
  ...Default,
  skin: 'dark',
  underline: false,
};
