import { Component } from 'react';
import { CheckboxGroup } from '../../../components/Checkbox';

class ControledGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        { name: 'with-icon', label: 'With an Icon', icon: 'info' },
        { name: 'default', label: 'Default' },
        { name: 'checked', label: 'Checked', checked: true },
      ],
    };
  }

  render() {
    const { options } = this.state;
    return (
      <>
        <CheckboxGroup
          options={options}
          onChange={_options => this.setState({ options: _options })}
          type="button"
        />
        <p>State:</p>
        <pre>{JSON.stringify(options, null, 2)}</pre>
      </>
    );
  }
}

export default {
  code: `class ControledGroup extends Component {
    constructor(props) {
      super(props);

      this.state = {
        options: [
          { name: 'with-icon', label: 'With an Icon', icon: 'info' },
          { name: 'default', label: 'Default' },
          { name: 'checked', label: 'Checked', checked: true },
        ]
      }
    }

    render() {
      const { options } = this.state;
      return (
        <>
          <CheckboxGroup
            options={options}
            onChange={_options => this.setState({ options: _options })}
            type="button"
          />
          <p>State:</p>
          <pre>{JSON.stringify(options, null, 2)}</pre>
        </>
      );
    }
}`,
  component: <ControledGroup />,
};
