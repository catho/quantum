import DropdownLight from '../../components/DropdownLight/DropdownLight';
import { itemsObjectMock, itemsStringMock } from './mock';

const Template = args => {
  const { items = itemsObjectMock, ...rest } = args;
  return <DropdownLight items={items} {...rest} />;
};

export const Default = Template.bind({});

export const WithArrayOfString = Template.bind({});
WithArrayOfString.args = {
  items: itemsStringMock,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const RequiredMark = Template.bind({});
RequiredMark.args = {
  required: true,
  label: 'With a required mark',
};

export const WithError = Template.bind({});
WithError.args = {
  error: "Don't worry, this is just an example error message ;)",
};
