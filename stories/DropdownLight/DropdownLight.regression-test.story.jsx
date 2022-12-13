import DropdownLight from '../../components/DropdownLight';
import { itemsMock } from './mock';

export default {
  title: 'DropdownLight',
  component: DropdownLight,
};

const Template = args => <DropdownLight items={itemsMock} {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
