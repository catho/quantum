import React from 'react';
import RadioGroup from '../../../components/RadioGroup';

const options = [
  { value: 'with-icon', label: 'With an Icon', icon: 'info' },
  { value: 'default', label: 'Default' },
];

class Group extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: undefined };
  }

  render() {
    const { value } = this.state;

    return (
      <RadioGroup
        name="default-example"
        value={value}
        onChange={({ value: opValue }) => this.setState({ value: opValue })}
        options={options}
        type="button"
      />
    );
  }
}

const buttonGroup = {
  code: `const options = ${JSON.stringify(options, null, 2)};

<RadioGroup
  name="groceries"
  type="button"
  options={options}
/>

/* or */

<RadioGroup name="groceries">
  <RadioGroup.Button value="with-icon" icon="info">
    With an Icon
  </RadioGroup.Button>
  <RadioGroup.Button value="default">
    Default
  </RadioGroup.Button>
</RadioGroup>`,
  component: <Group />,
};

export default buttonGroup;
