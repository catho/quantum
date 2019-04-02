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
        value={value}
        onChange={({ value: opValue }) => this.setState({ value: opValue })}
      >
        <RadioGroup.Button icon="print" value="Tomato sauce">
          Tomato sauce
        </RadioGroup.Button>
        <RadioGroup.Button disabled value="Mustard">
          Mustard
        </RadioGroup.Button>
        <RadioGroup.Button value="Barbecue sauce Barbecue sauce Barbecue sauce">
          Barbecue sauce Barbecue sauce Barbecue sauce
        </RadioGroup.Button>
      </RadioGroup>
    );
  }
}

const buttonGroup = {
  code: `<RadioGroup
  name="groceries"
  type="button"
  options={options}
/>

/* or */

<RadioGroup name="groceries">
  <RadioGroup.Button icon="print" value="Tomato sauce">
    Tomato sauce
  </RadioGroup.Button>
  <RadioGroup.Button disabled value="Mustard">
    Mustard
  </RadioGroup.Button>
  <RadioGroup.Button value="Barbecue sauce Barbecue sauce Barbecue sauce">
    Barbecue sauce Barbecue sauce Barbecue sauce
  </RadioGroup.Button>
</RadioGroup>`,
  component: <Group />,
};

export default buttonGroup;
