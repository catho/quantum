import styled from 'styled-components';

import Hamburger from '../../components/Hamburger';

const InvertedBackground = styled.span`
  background-color: #000;
  display: inline-block;
`;

export default {
  title: 'Hamburger',
  component: Hamburger,
};

const Template = args => <Hamburger {...args} />;
const TemplateInverted = args => (
  <InvertedBackground>
    <Hamburger {...args} />
  </InvertedBackground>
);

export const Default = TemplateInverted.bind({});

export const ShowNotification = TemplateInverted.bind({});
ShowNotification.args = {
  showNotification: true,
};

export const IsOpened = TemplateInverted.bind({});
IsOpened.args = {
  isOpened: true,
};

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};

export const InvertedShowNotification = Template.bind({});
InvertedShowNotification.args = {
  ...Inverted.args,
  ...ShowNotification.args,
};

export const InvertedIsOpened = Template.bind({});
InvertedIsOpened.args = {
  ...Inverted.args,
  ...IsOpened.args,
};
