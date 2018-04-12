/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input, Checkbox, Select } from 'semantic-ui-react';
import ColorPalette from '../../../components/Colors';

const removeQuotes = str => str.replace(/'/g, '');

function changePropValue(obj, path, value) {
  let prop;

  if (!path.length) {
    return obj;
  }

  for (var i = 0, iLen = path.length - 1; i < iLen; i+=1) {
    prop = path[i];

    const candidate = obj[prop];
    if (candidate !== undefined) {
      obj = candidate;
    } else {
      break;
    }
  }

  return obj[path[i]] = value;
}

class AutoProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.component.type.defaultProps;
  }

  shouldComponentUpdate = () => false;

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

    if (props.path && props.path.length > 0) {
      let message = Object.assign({}, this.state[props.path[0]]);
      let paths = props.path.slice(1);
      paths.push(props.name);

      changePropValue(message, paths, value);
      this.setState({ message }, () => {
        this.props.changeState(this.state);
      });
    }else {
      this.setState({ [props.name]: value }, () => {
        this.props.changeState(this.state);
      });
    }
  }

  renderComponentByType = (propPath, propName, { name, value }) => {
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
            path={propPath}
          />
        );
        break;
      }
      case 'shape': {
        component = `{ `;
        Object.entries(value).map( ([name, value]) => {
          component += `${name}: ${value.name}, \n`;
        });
        component = component.substring(0, component.length-2) + ` }`;
        break;
      }
      default: {
        component = `Type not yet implemented (${name})`;
        break;
      }
    }

    return component;
  };

  getPropRowTemplate = (propPath, propName, propObject, level) => {
    const indentation = new Array(3 * propPath.length).join(' ');

    return (
      <PropsRow key={`${propName}=${propObject}`}>
        <PropsData>
          <IndentSpan>
            {indentation}
            { propPath.length > 0 ? `└` : `` }
          </IndentSpan>

          <CodeBlock>{propName}</CodeBlock>
        </PropsData>

        <PropsData>
          {this.renderComponentByType(propPath, propName, propObject)}
        </PropsData>
      </PropsRow>
    )
  }

  parseShapes = (propPath, propName, { name: propType, value = null }) => {
    let propRows = [];

    if(propType == 'shape') {
      const path = Array.from(propPath);
      path.push(propName);

      Object.entries(value)
      .map(([name, value]) => {
        propRows.push(this.getPropRowTemplate(path, name, value));
        propRows.push(this.parseShapes(path, name, value));
      })
    }
    else {
      return;
    }

    return propRows;
  }

  generateRows = (props) => {
    const propRows = [];

    Object.entries(props)
    .map(([name, value]) => {
      propRows.push(this.getPropRowTemplate([], name, value.type));
      propRows.push(this.parseShapes([], name, value.type));
    });

    return propRows;
  }

  render() {
    const { component: { type: Component } } = this.props;
    const propRows = this.generateRows(Component.__docgenInfo.props);

    return (
      <React.Fragment>
        <h2>Props</h2>

        <table>
          <tbody>
            { propRows.map( row => { return row }) }
          </tbody>
        </table>
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

const IndentSpan = styled.span`
  white-space:pre;
`

const PropsRow = styled.tr`
  padding: 15px;
  &:nth-child(even) {
    background: #f6f8fa
  }
  &:nth-child(odd) {
    background: #FFF
  }
`;

const PropsData = styled.td`
  padding: 15px;
  border: 0;
`;

AutoProps.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  changeState: PropTypes.func.isRequired,
};

export default AutoProps;
