import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import jsxToString from 'jsx-to-string';
import { Container, Col, Row } from '../../components/Grid';
import Colors from '../../components/Colors';

const wrap = name => children =>
  <span>{name} [{children}]</span>;

const failSafe = type => () =>
  <span>
    Sorry, unable to parse this propType:
    <pre>{JSON.stringify(type, null, 2)}</pre>
  </span>;

const removeQuotes = str => str.replace(/\'/g, '');

const renderPropType = (type = {}) => {
  const typeHandlers = {
    custom: () => wrap('custom')(),

    enum: value => wrap('oneOf')(value.map((v, i, allValues) =>
      <span key={i}><code>{removeQuotes(v.value)}</code>{allValues[i + 1] && ', '}</span>)),

    union: value => wrap('oneOfType')(value.map((v, i, allValues) =>
      <span key={i}>
        {renderPropType(v)}
        {allValues[i + 1] && ', '}
      </span>
    )),

    shape: value => wrap('shape')(
      <ul>
        { Object
          .keys(value)
          .map(key => ({...value[key], key}))
          .map((v, i) =>
            <li key={i}>
              {v.key}:&nbsp;
              {renderPropType(v)}
              {v.required && <small><strong>&nbsp;required</strong></small>}
            </li>)
        }
      </ul>
    ),

    arrayOf: value => wrap('arrayOf')(renderPropType(value)),

    objectOf: value => wrap('objectOf')(renderPropType(value))
  };

  if (type.value) {
    return (typeHandlers[type.name] || failSafe(type))(type.value);
  }

  return <span>{type.name}</span>;
};

const Preview = styled.div`
  padding: 60px 20px;
  display: flex;
  justify-content: center;

  border: 1px solid #dee6ed;
  box-shadow: 0 0 10px 2px #e5ebf1 inset;
  background: linear-gradient(45deg, #eff2f6 25%, transparent 25%, transparent 75%, #eff2f6 75%, #eff2f6 0),
              linear-gradient(45deg, #eff2f6 25%, transparent 5%, transparent 75%, #eff2f6 75%, #eff2f6 0), #fff;
  background-position: 0 0, 10px 10px;
  background-size: 20px 20px;
  background-clip: border-box;
  background-origin: padding-box;
`;

class Props extends React.Component {
  constructor(props){
    super();

    this.state = props.component.defaultProps;
  }

  handleChange = (name, e) => {
    const { target } = e;
    const { value, type } = target;

    let newValue;

    switch(type){
      case 'checkbox':
        newValue = Boolean(target.checked);
        break;
      case 'number':
        newValue = Number(value);
        break;

      case 'text':
        newValue = value;
        break;

      case 'select-one':
        newValue = isNaN(value) ? value : Number(value);
        break;

      default:
        newValue = undefined;
    }

    this.setState({ [name]: newValue });
  }

  renderComponentByType = (propName, { name, value }) => {

    switch(name){
      case 'enum':
      console.log(name, value)
        return (<select value={this.state[propName]} onChange={(e) => this.handleChange(propName, e)}>
          { value.map(v => {
            const str = removeQuotes(v.value);
            return <option value={str}>{str}</option>
          })}
        </select>)
      case 'bool':
        return <input type="checkbox" checked={this.state[propName]} onChange={(e) => this.handleChange(propName, e)}/>
      case 'number':
        return <input type="number" value={this.state[propName]} onChange={(e) => this.handleChange(propName, e)}/>
      case 'string':
        return <input type="text" value={this.state[propName]} onChange={(e) => this.handleChange(propName, e)}/>

      default:
        return 'Not implemented'
    }
  };

  render() {
    const { component: Component } = this.props;

    if (!Component.__docgenInfo) {
      return null;
    }

    const { __docgenInfo: { props } } = Component;

    return(
      <React.Fragment>
      <Container fluid>
        {
          jsxToString(<Component {...this.state} />)
        }
        <Row>
          <Col desktop={8}>
          <h2>Props</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Required</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
            {
              Object.entries(props).map(([name, value], i) => (
                <tr key={i}>
                  <td>{ name }</td>
                  <td>{ renderPropType(value.type) }</td>
                  <td>{ value.defaultValue && removeQuotes(value.defaultValue.value) }</td>
                  <td>{ value.required && 'Required' }</td>
                  <td>{ value.description }</td>
                </tr>
              ))
            }
            </tbody>
          </table>
          </Col>
          <Col desktop={4}>
            <h2>Preview</h2>
            <Preview>
              <Component {...this.state}/>
            </Preview>
          </Col>

        </Row>
      </Container>
    </React.Fragment>
    )
  }
}

export default Props;
