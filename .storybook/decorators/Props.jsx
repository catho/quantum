import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Col, Row } from '../../components/Grid';

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
  border: 1px solid #ccc;

  background-color: #eee;
  background-image: url("https://www.transparenttextures.com/patterns/az-subtle.png");
`;

const Props = ({ component: Component }) => {

  if (!Component.__docgenInfo) {
    return null;
  }

  const { __docgenInfo: { props } } = Component;

  return (
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
              <Component />
            </Preview>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
    )
}

export default Props;
