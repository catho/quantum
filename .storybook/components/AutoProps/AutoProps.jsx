import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input, Checkbox, Select } from 'semantic-ui-react';

import ColorPalette from '../../../components/Colors';

const removeQuotes = str => str.replace(/'/g, '');

class AutoProps extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.component.type.defaultProps;
  }

  handleChange = (e, props) => {
    const { type } = props;

    let value = props.value || props.checked;

    switch (type) {
      case 'number':
        value = Number.isNaN(value) ? 0 : Number(value);
        break;
      case 'text':
        value = value ? String(value) : '';
        break;
      case 'checkbox':
        value = Boolean(value);
        break;
      default:
        break;
    }

    this.setState({ [props.name]: value }, () => {
      this.props.changeState(this.state);
    });
  }

  renderComponentByType = (propName, { name, value }) => {
    let component;

    switch (name) {
      case 'enum': {
        const options = [];
        value.map((v, i) => {
          const str = removeQuotes(v.value);
          options.push({ key: i, value: str, text: str });
          return options;
        });
        component = (
          <Select
            options={options}
            onChange={this.handleChange}
            name={propName}
          />
        );
        break;
      }
      case 'bool': {
        component = (
          <Checkbox
            toggle
            checked={this.state[propName]}
            onChange={this.handleChange}
            name={propName}
          />
        );
        break;
      }
      case 'number': {
        component = (
          <Input
            type="number"
            onChange={this.handleChange}
            name={propName}
          />
        );
        break;
      }
      case 'string': {
        component = (
          <Input
            onChange={this.handleChange}
            name={propName}
          />
        );
        break;
      }
      default: {
        component = 'Not implemented';
        break;
      }
    }

    return component;
  };

  render() {
    const { component: { type: Component } } = this.props;

    return (
      <React.Fragment>
        <h2>Props</h2>
        <PropsTable>
          <PropsTbody>
            {
              Component.__docgenInfo &&
                Object
                  .entries(Component.__docgenInfo.props)
                  .map(([name, value]) => (
                    <PropsTableRow key={`${name}=${value}`}>
                      <PropsTableData>
                        <CodeBlock>
                          {name}
                        </CodeBlock>
                      </PropsTableData>
                      <PropsTableData>
                        {this.renderComponentByType(name, value.type)}
                      </PropsTableData>
                    </PropsTableRow>
                  ))
            }
          </PropsTbody>
        </PropsTable>
      </React.Fragment>
    );
  }
}

const CodeBlock = styled.pre`
  background-color: ${ColorPalette.NEUTRAL.GRAY.WHITE};
  border-radius: 3px;
  display: inline-block;
  font-size: 85%;
  margin-top: 0;
  padding:2px 5px;
`;

const PropsTable = styled.table`
`;

const PropsTbody = styled.tbody`
`;

const PropsTableRow = styled.tr`
  padding: 15px;
  &:nth-child(even) {
    background: #f6f8fa
  }
  &:nth-child(odd) {
    background: #FFF
  }
`;

const PropsTableData = styled.td`
  padding: 15px;
  border: 0;
`;

AutoProps.propTypes = {
  component: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
};

export default AutoProps;
