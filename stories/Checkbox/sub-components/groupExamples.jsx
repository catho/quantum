import { Component } from 'react';
import CheckboxGroup from '../../../components/Checkbox/CheckboxGroup';

const options = [
  { label: 'Banana', name: 'banana' },
  { label: 'Orange', name: 'orange', checked: true },
  { label: 'Lemon', name: 'lemon', checked: true, disabled: true },
  { label: 'Strawberry', name: 'strawberry', disabled: true },
  { label: 'Blueberry', name: 'blueberry' },
];

class ControlledGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { checked: false, label: 'Banana', name: 'banana' },
        { checked: true, label: 'Orange', name: 'orange' },
        { checked: false, label: 'Lemon', name: 'lemon' },
      ],
    };
  }

  render() {
    const { items } = this.state;

    return (
      <>
        <CheckboxGroup
          options={items}
          onChange={newItems => this.setState({ items: newItems })}
        />
        <p>State:</p>
        <pre>{JSON.stringify(items, null, 2)}</pre>
      </>
    );
  }
}

ControlledGroup.code = `class ControlledGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { checked: false, label: 'Banana', name: 'banana' },
        { checked: true, label: 'Orange', name: 'orange' },
        { checked: false, label: 'Lemon', name: 'lemon' },
      ],
    };
  }

  render() {
    const { items } = this.state;

    return (
      <>
        <CheckboxGroup
          options={items}
          onChange={newItems => this.setState({ items: newItems })}
        />
        <p>State:</p>
        <pre>{JSON.stringify(items, null, 2)}</pre>
      </>
    );
  }
}`;

export default {
  simple: {
    component: <CheckboxGroup options={options} />,
    code: `const options = ${JSON.stringify(options, null, 2)};

<CheckboxGroup options={options} />

/* or */

<CheckboxGroup>
  <CheckboxGroup.Checkbox label="Banana" name="banana" />
  <CheckboxGroup.Checkbox label="Orange" name="orange" checked />
  <CheckboxGroup.Checkbox label="Lemon" name="lemon" checked disabled />
  <CheckboxGroup.Checkbox label="Strawberry" name="strawberry" disabled />
  <CheckboxGroup.Checkbox label="Blueberry" name="blueberry" />
</CheckboxGroup>`,
  },
  withError: {
    component: <CheckboxGroup options={options} error="Error message" />,
    code: `<CheckboxGroup error="Error message" options={options} />`,
  },
  controlled: {
    component: <ControlledGroup />,
    code: ControlledGroup.code,
  },
};
