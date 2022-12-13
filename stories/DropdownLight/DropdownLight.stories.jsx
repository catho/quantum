import DropdownLight from '../../components/DropdownLight/DropdownLight';
import { itemsMock } from './mock';

const Template = args => {
  const { items = itemsMock, ...rest } = args;
  return <DropdownLight items={items} {...rest} />;
};

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
