import DropdownLight from '../../components/DropdownLight';
import { itemsObjectMock, itemsStringMock } from './mock';

export default {
  title: 'DropdownLight',
  component: DropdownLight,
};

const Template = args => <DropdownLight items={itemsObjectMock} {...args} />;

const TemplateString = args => (
  <DropdownLight items={itemsStringMock} {...args} />
);

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithString = TemplateString.bind({});
