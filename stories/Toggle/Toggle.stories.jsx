import Toggle from '../../components/Toggle';

export default {
  title: 'Forms/Toggle',
  component: Toggle,
};

const Template = args => {
  const { label, labelPosition, id, ...rest } = args;
  return (
    <div style={{ display: 'flex', alignContent: 'center' }}>
      {labelPosition === 'left' && (
        <label htmlFor={id} style={{ marginRight: 10 }}>
          {label}
        </label>
      )}
      <Toggle id={id} {...rest} />
      {labelPosition === 'right' && (
        <label htmlFor={id} style={{ marginLeft: 10 }}>
          {label}
        </label>
      )}
    </div>
  );
};

export const Default = Template.bind({});

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const WithLeftLabel = Template.bind({});
WithLeftLabel.args = {
  id: 'left-toggle',
  label: 'Left label',
  labelPosition: 'left',
};

export const WithRightLabel = Template.bind({});
WithRightLabel.args = {
  id: 'right-toggle',
  label: 'Right label',
  labelPosition: 'right',
};
