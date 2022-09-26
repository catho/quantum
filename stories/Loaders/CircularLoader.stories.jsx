import CircularLoader from '../../components/CircularLoader';

const Template = args => <CircularLoader {...args} />;

export const Default = Template.bind({});

export const WithSkin = Template.bind({});
WithSkin.args = {
  skin: 'secondary',
};

export const WithSize = Template.bind({});
WithSize.args = {
  size: 'large',
};
