import ChargeBar from '../../components/ChargeBar';

const Template = (args) => <ChargeBar {...args} />;

export const Default = Template.bind({});

export const WithSkin = Template.bind({});
WithSkin.args = {
  skin: 'neutral',
};

export const WithProgressPercent = Template.bind({});
WithProgressPercent.args = {
  progressPercent: 99,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Custom Label...',
};
