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
  text: 'SnackBar primary text content',
  onClose: () => {},
  skin: 'primary',
};

export const Success = Template.bind({});
Success.args = {
  text: 'SnackBar success text content',
  onClose: () => {},
  skin: 'success',
};

export const Error = Template.bind({});
Error.args = {
  text: 'SnackBar error text content',
  onClose: () => {},
  skin: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  text: 'SnackBar warning text content',
  onClose: () => {},
  skin: 'warning',
};

export const Callback = Template.bind({});
Callback.args = {
  text: 'SnackBar calback text content',
  onClose: () => {},
  actionTrigger: { title: 'CALLBACK ACTION' },
};
