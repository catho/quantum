import DropdownLight from '../../components/DropdownLight/DropdownLight';
import { itemsObjectMock, itemsStringMock } from './mock';

const Template = args => {
  const { items = itemsObjectMock, ...rest } = args;
  return <DropdownLight items={items} {...rest} />;
};

const TemplateString = args => {
  const { items = itemsStringMock, ...rest } = args;
  return <DropdownLight items={items} {...rest} />;
};

export const Default = Template.bind({});

export const WithString = TemplateString.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
