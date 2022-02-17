import Dropdown from '../../components/Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

const parameters = {
  backgrounds: {
    default: 'dark',
    values: [{ name: 'dark', value: '#1250C4' }],
  },
};

const items = ['Lemon', 'Banana', 'Strawberry', 'Orange', 'Avocado'];

const Template = args => <Dropdown items={items} {...args} />;
const TemplateWithDarkSkin = args => (
  <Dropdown items={items} skin="dark" {...args} />
);

export const Default = Template.bind({});

export const Dark = TemplateWithDarkSkin.bind({});
Dark.parameters = parameters;

export const Autocomplete = Template.bind({});
Autocomplete.args = {
  autocomplete: true,
  label: 'Autocomplete',
  placeholder: 'Start typing...',
};

export const AutocompleteWithDarkSkin = TemplateWithDarkSkin.bind({});
AutocompleteWithDarkSkin.parameters = parameters;
AutocompleteWithDarkSkin.args = {
  ...Autocomplete.args,
};

export const Required = Template.bind({});
Required.args = {
  required: true,
  label: 'With a required mark',
};

export const RequiredWithDarkSkin = TemplateWithDarkSkin.bind({});
RequiredWithDarkSkin.parameters = parameters;
RequiredWithDarkSkin.args = {
  ...Required.args,
};

export const Error = Template.bind({});
Error.args = {
  helperText: 'this is a example of error',
  error: "Don't worry, this is just a message error example ;)",
  label: 'With an error',
};

export const ErrorWithDarkSkin = TemplateWithDarkSkin.bind({});
ErrorWithDarkSkin.parameters = parameters;
ErrorWithDarkSkin.args = {
  ...Error.args,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: 'What fruit do you prefer?',
  label: 'Disabled, with a custom placeholder',
};

export const DisabledWithDarkSkin = TemplateWithDarkSkin.bind({});
DisabledWithDarkSkin.parameters = parameters;
DisabledWithDarkSkin.args = {
  ...Disabled.args,
};

export const WithImages = Template.bind({});
WithImages.args = {
  helperText: 'this dropdown has images in the list',
  placeholder: 'What credit card do you prefer?',
  label: 'choose a credit card',
  items: [
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
  ],
};

export const WithImagesAndDarkSkin = TemplateWithDarkSkin.bind({});
WithImagesAndDarkSkin.parameters = parameters;
WithImagesAndDarkSkin.args = {
  ...WithImages.args,
};
