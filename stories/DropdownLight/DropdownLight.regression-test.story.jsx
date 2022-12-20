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
