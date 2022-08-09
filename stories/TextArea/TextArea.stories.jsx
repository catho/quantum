import TextArea from '../../components/TextArea';

const Template = args => <TextArea {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Required = Template.bind({});
Required.args = {
  required: true,
  label: 'Some text label',
};

export const WithAutoSize = Template.bind({});
WithAutoSize.args = {
  isAutoResize: true,
};

export const WithCustomAutoSize = Template.bind({});
WithCustomAutoSize.args = {
  isAutoResize: true,
  autoResizeConfig: { minRows: 2, initialRows: 2, maxRows: 3 },
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  helperText: 'Some text...',
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'Some error text',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Some text label...',
};
