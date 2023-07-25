import { useState } from 'react';
import Dropdown from '../../components/Dropdown';

export default {
  title: 'Forms/Dropdown',
  component: Dropdown,
};

const itemsMock = ['Lemon', 'Banana', 'Strawberry', 'Orange', 'Avocado'];
const itemsWithImageMock = [
  {
    label: 'Master Card',
    value: 'creditcard_0',
    img: 'https://dummyimage.com/24x24',
    alt: 'image description',
  },
  {
    label: 'American Express Card',
    value: 'creditcard_1',
    img: 'https://dummyimage.com/24x24',
    alt: 'image description',
  },
  {
    label: 'Visa',
    value: 'creditcard_2',
    img: 'https://dummyimage.com/24x24',
    alt: 'image description',
  },
];

const Template = args => {
  const { items = itemsMock, ...rest } = args;
  return <Dropdown {...rest} items={items} />;
};

export const Default = Template.bind({});

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  label: 'With a custom label',
};

export const RequiredMark = Template.bind({});
RequiredMark.args = {
  required: true,
  label: 'With a required mark',
};

export const WithError = Template.bind({});
WithError.args = {
  error: "Don't worry! This is just an example error message ;)",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'What fruit do you prefer?',
};

export const WithImages = Template.bind({});
WithImages.args = {
  items: itemsWithImageMock,
};

export const WithSkin = Template.bind({});
WithSkin.args = {
  skin: 'dark',
};

export const Controlled = () => {
  const [fruits] = useState([
    'Lemon',
    'Banana',
    'Strawberry',
    'Orange',
    'Avocado',
  ]);
  const [selectedFruit, setSelectedFruit] = useState('');

  return (
    <Dropdown
      label="Fruits"
      placeholder="Select a fruit"
      items={fruits}
      selectedItem={selectedFruit}
      onChange={item => setSelectedFruit(item)}
    />
  );
};
