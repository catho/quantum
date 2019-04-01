import React from 'react';
import RadioGroup from '../../../components/RadioGroup';

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
        error={value ? '' : 'Select one'}
        value={value}
        onChange={({ value: opValue }) => this.setState({ value: opValue })}
      >
        <RadioGroup.Button value="Tomato sauce">Tomato sauce</RadioGroup.Button>
        <RadioGroup.Button value="Mustard">Mustard</RadioGroup.Button>
        <RadioGroup.Button value="Barbecue sauce Barbecue sauce Barbecue sauce">
          Barbecue sauce Barbecue sauce Barbecue sauce
        </RadioGroup.Button>
      </RadioGroup>
    );
  }
}

const buttonGroup = {
  code: `;`,
  component: <Group />,
};

export default buttonGroup;
