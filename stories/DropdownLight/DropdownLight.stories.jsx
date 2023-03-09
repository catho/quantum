import { useState } from 'react';
import DropdownLight from '../../components/DropdownLight/DropdownLight';
import { itemsObjectMock, itemsStringMock, itemsWithImageMock } from './mock';

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

export const WithImages = Template.bind({});
WithImages.args = {
  items: itemsWithImageMock,
};

export const SelectedItemControlled = () => {
  const [selectedFruit, setSelectedFruit] = useState({
    value: 'Banana',
    label: 'Banana',
  });

  return (
    <DropdownLight
      label="Fruits"
      placeholder="Select a fruit"
      items={itemsObjectMock}
      selectedItem={selectedFruit}
      onChange={item => setSelectedFruit(item)}
    />
  );
};
