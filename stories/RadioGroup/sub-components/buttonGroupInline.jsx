import React from 'react';
import RadioGroup from '../../../components/RadioGroup';

const options = [
  { value: 'tomato-sauce', label: 'Tomato sauce', icon: 'print' },
  { value: 'mustard', label: 'Mustard', disabled: true },
  { value: 'barbecue-sauce', label: 'Barbecue sauce' },
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
        name="groceries"
        value={value}
        onChange={({ value: opValue }) => this.setState({ value: opValue })}
        options={options}
        type="button"
        inline
      />
    );
  }
}

const buttonGroup = {
  code: `<RadioGroup
  name="groceries"
  type="button"
  options={options}
  inline
>
...
</RadioGroup>`,
  component: <Group />,
};

export default buttonGroup;
