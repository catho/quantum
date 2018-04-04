import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Col, Row } from '../../components/Grid';
import Colors from '../../components/Colors';

const wrap = name => children =>
  <span>{name} [{children}]</span>;

const failSafe = type => () =>
  <span>
    Sorry, unable to parse this propType:
    <pre>{JSON.stringify(type, null, 2)}</pre>
  </span>;

const renderPropType = (type = {}) => {
  const typeHandlers = {
    custom: () => wrap('custom')(),

    enum: value => wrap('oneOf')(value.map((v, i, allValues) =>
      <span key={i}><code>{v.value}</code>{allValues[i + 1] && ', '}</span>)),

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
  margin: auto;

  border: 1px solid #dee6ed;
  box-shadow: 0 0 10px 2px #e5ebf1 inset;
  background: linear-gradient(45deg, #eff2f6 25%, transparent 25%, transparent 75%, #eff2f6 75%, #eff2f6 0), linear-gradient(45deg, #eff2f6 25%, transparent 5%, transparent 75%, #eff2f6 75%, #eff2f6 0), #fff;
  background-position: 0 0, 10px 10px;
  background-size: 20px 20px;
  background-clip: border-box;
  background-origin: padding-box;

`;

class Props extends React.Component {
  constructor(props){
    super();
    
    this.state = {};
    Object.entries(props.component.defaultProps).map(([name, value], i) => {
      this.state[name] = value;
    })
  }

  handleChange = (name, e) => {
    this.setState({ [name]: e.target.value });
  }

  renderComponentByType = (propName, typeName) => {
    switch(typeName){
      case 'array':
        return <select />
      case 'bool':
        return <input type="checkbox" value={this.state[propName]} onChange={(e) => this.handleChange(propName, e)}/>
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
        <Row>
          <Col desktop="6">
          <h2>Props</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Strumbo</th>
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
                  <td>{ this.renderComponentByType(name, value.type.name) }</td>
                  <td>{ value.defaultValue && value.defaultValue.value }</td>
                  <td>{ value.required && 'Required' }</td>
                  <td>{ value.description }</td>
                </tr>
              ))
            }
            </tbody>
          </table>
          </Col>
          <Col desktop="6">
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
