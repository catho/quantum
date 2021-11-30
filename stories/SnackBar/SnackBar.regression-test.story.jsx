import React from 'react';
import styled from 'styled-components';
import { SnackBar } from '../../components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default {
  title: 'SnackBar',
  component: SnackBar,
};

const Template = args => (
  <Wrapper>
    <SnackBar {...args} />
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {
  text: (
    <p>
      SnackBar <b>neutral</b> text content
    </p>
  ),
  onClose: () => {},
  skin: 'neutral',
};

export const DefaultWithCallback = Template.bind({});
DefaultWithCallback.args = {
  ...Default.args,
  actionTrigger: {
    title: 'Desfazer',
    callbackFn: () => {},
  },
};

export const Primary = Template.bind({});
Primary.args = {
  text: 'SnackBar primary text content',
  onClose: () => {},
  skin: 'primary',
};

export const PrimaryWithoutIcon = Template.bind({});
PrimaryWithoutIcon.args = {
  ...Primary.args,
  hideIcon: true,
};

export const PrimaryWithCallback = Template.bind({});
PrimaryWithCallback.args = {
  ...Primary.args,
  actionTrigger: {
    title: 'Desfazer',
    callbackFn: () => {},
  },
};

export const Success = Template.bind({});
Success.args = {
  text: 'SnackBar success text content',
  onClose: () => {},
  skin: 'success',
};

export const SuccessWithCallback = Template.bind({});
SuccessWithCallback.args = {
  ...Success.args,
  actionTrigger: {
    title: 'Desfazer',
    callbackFn: () => {},
  },
};

export const Error = Template.bind({});
Error.args = {
  text: 'SnackBar error text content',
  onClose: () => {},
  skin: 'error',
};

export const ErrorWithCallback = Template.bind({});
ErrorWithCallback.args = {
  ...Error.args,
  actionTrigger: {
    title: 'Desfazer',
    callbackFn: () => {},
  },
};

export const Warning = Template.bind({});
Warning.args = {
  text: 'SnackBar warning text content',
  onClose: () => {},
  skin: 'warning',
  actionTrigger: {
    title: 'Desfazer',
    callbackFn: () => {},
  },
};

export const WarningWithCallback = Template.bind({});
WarningWithCallback.args = {
  ...Warning.args,
  actionTrigger: {
    title: 'Desfazer',
    callbackFn: () => {},
  },
};
