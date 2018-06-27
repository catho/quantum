/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../Title';
import { Input, Checkbox, Select } from 'semantic-ui-react';
import Colors from '../../../components/Colors';

const removeQuotes = str => str.replace(/'/g, '');

function changePropValue(obj, path, value) {
  let prop;

  if (!path.length) {
    return obj;
  }

  for (var i = 0, iLen = path.length - 1; i < iLen; i += 1) {
    prop = path[i];

    const candidate = obj[prop];
    if (candidate !== undefined) {
      obj = candidate;
    } else {
      break;
    }
  }

  return value ? (obj[path[i]] = value) : obj[path[i]];
}

class AutoProps extends React.Component {
  constructor(props) {
    super(props);

    const { state } = props;

    this.state = state;
  }

  handleChange = (e, props) => {
    const { type = 'default' } = props;
    let value = props.value || props.checked;

    const parsedValue = {
      number: value => (Number.isNaN(value) ? 0 : Number(value)),
      text: value => (value ? String(value) : ''),
      checkbox: value => Boolean(value),
      default: value => value,
    };

    value = parsedValue[type](value);

    if (props.path && props.path.length > 0) {
      let message = Object.assign({}, this.state[props.path[0]]);
      let paths = props.path.slice(1);
      paths.push(props.name);

      changePropValue(message, paths, value);
      this.setState({ message }, () => {
        this.props.changeState(this.state);
      });
    } else {
      this.setState({ [props.name]: value }, () => {
        this.props.changeState({ [props.name]: value });
      });
    }
  };

  getPropController = (propPath, propName, propValue, propKey) => {
    const propControllers = [
      {
        type: ['enum'],
        controller: (propPath, propName, { name, value }) => {
          let options = [];

          value.map((v, i) => {
            const str = removeQuotes(v.value);
            options.push({ key: i, value: str, text: str });
            return options;
          });

          return (
            <Select
              search
              options={options}
              onChange={this.handleChange}
              name={propName}
              defaultValue={propValue}
              path={propPath}
            />
          );
        },
      },
      {
        type: ['bool'],
        controller: (propPath, propName, { name }) => {
          return (
            <Checkbox
              toggle
              checked={propValue}
              onChange={this.handleChange}
              name={propName}
              path={propPath}
            />
          );
        },
      },
      {
        type: ['string', 'number'],
        controller: (propPath, propName, { name }) => {
          return (
            <Input
              type={name == 'string' ? 'text' : name}
              onChange={this.handleChange}
              name={propName}
              path={propPath}
              value={propValue}
            />
          );
        },
      },
      {
        type: ['shape'],
        controller: (propPath, propName, { name, value }) => {
          let component = `{ `;
          Object.entries(value).map(([name, value]) => {
            component += `${name}: ${value.name}, \n`;
          });
          component = component.substring(0, component.length - 2) + ` }`;

          return component;
        },
      },
      {
        type: ['default'],
        controller: (propPath, propName, { name, value }) => {
          return `Type not yet implemented (${name})`;
        },
      },
    ];

    const componentType = propControllers
      .find(item => {
        return item.type.some(t => t === propKey.name)
          ? item.type
          : item.type == 'default';
      })
      .controller(propPath, propName, propKey);

    return componentType;
  };

  renderComponentByType = (propPath, propName, propKey) => {
    const { [propName]: propValue } = changePropValue(
      this.props.state,
      propPath,
    );

    return this.getPropController(propPath, propName, propValue, propKey);
  };

  getPropRowTemplate = (propPath, propName, propObject, level) => {
    const indentation = new Array(3 * propPath.length).join(' ');

    return (
      <PropsRow key={`${propName}=${propObject}`}>
        <PropsData>
          <IndentSpan>
            {indentation}
            {propPath.length > 0 ? `└` : ``}
          </IndentSpan>

          <CodeBlock>{propName}</CodeBlock>
        </PropsData>

        <PropsData>
          {this.renderComponentByType(propPath, propName, propObject)}
        </PropsData>
      </PropsRow>
    );
  };

  parseShapes = (propPath, propName, { name: propType, value = null }) => {
    let propRows = [];

    if (propType == 'shape') {
      const path = Array.from(propPath);
      path.push(propName);

      Object.entries(value).map(([name, value]) => {
        propRows.push(this.getPropRowTemplate(path, name, value));
        propRows.push(this.parseShapes(path, name, value));
      });
    } else {
      return;
    }

    return propRows;
  };

  generateRows = props => {
    const propRows = [];

    Object.entries(props).map(([name, value]) => {
      propRows.push(this.getPropRowTemplate([], name, value.type));
      propRows.push(this.parseShapes([], name, value.type));
    });

    return propRows;
  };

  render() {
    const {
      component: {
        type: {
          __docgenInfo: { props },
        },
      },
    } = this.props;
    const propRows = this.generateRows(props);

    return (
      <React.Fragment>
        <Title>Props</Title>

        <table>
          <tbody>
            {propRows.map(row => {
              return row;
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

const CodeBlock = styled.pre`
  background-color: ${Colors.SECONDARY['50']};
  border-radius: 3px;
  display: inline-block;
  font-size: 85%;
  margin-top: 0;
  padding: 2px 5px;
`;

const IndentSpan = styled.span`
  white-space: pre;
`;

const PropsRow = styled.tr`
  padding: 15px;
  &:nth-child(even) {
    background: ${Colors.SECONDARY['50']};
  }
  &:nth-child(odd) {
    background: ${Colors.WHITE};
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
