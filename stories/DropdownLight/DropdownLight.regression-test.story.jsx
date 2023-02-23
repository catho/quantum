import DropdownLight from '../../components/DropdownLight';
import { itemsObjectMock } from './mock';

export default {
  title: 'DropdownLight',
  component: DropdownLight,
};

const Template = args => <DropdownLight items={itemsObjectMock} {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Required = Template.bind({});
Required.args = {
  required: true,
  label: 'With a required mark',
};

export const WithError = Template.bind({});
WithError.args = {
  error: "Don't worry, this is just an example error message ;)",
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  helperText: 'Some text...',
};

export const WithHelperTextAndError = Template.bind({});
WithHelperTextAndError.args = {
  helperText: 'Some text...',
  error: "Don't worry, this is just an example error message ;)",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Some text label...',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'What fruit do you prefer?',
};

export const WithSkin = Template.bind({});
WithSkin.args = {
  skin: 'dark',
};
