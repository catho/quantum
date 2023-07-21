import Skeleton from '../../components/Skeleton';

const Template = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});

export const WithType = Template.bind({});
WithType.args = {
  type: 'circle',
  width: '56px',
  height: '56px',
};

export const WithSize = Template.bind({});
WithSize.args = {
  type: 'button',
  size: 'large',
};
