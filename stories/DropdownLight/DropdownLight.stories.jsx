import { useState } from 'react';
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

export const Controlled = () => {
  const fruits = [
    { value: 'Lemon', label: 'Lemon' },
    { value: 'Banana', label: 'Banana' },
    { value: 'Orange', label: 'Orange' },
    { value: 'Strawberry', label: 'Strawberry' },
    { value: 'Ovacado', label: 'Ovacado' },
  ];
  const [selectedFruit, setSelectedFruit] = useState({
    value: 'Banana',
    label: 'Banana',
  });

  return (
    <DropdownLight
      label="Fruits"
      placeholder="Select a fruit"
      items={fruits}
      selectedItem={selectedFruit}
      onChange={item => setSelectedFruit(item)}
    />
  );
};
