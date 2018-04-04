import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const Props = ({ component }) => {

  if (!component.__docgenInfo) {
    return null;
  }

  const { __docgenInfo: { props } } = component;

  return (
    <React.Fragment>
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
    </React.Fragment>
    )
}

export default Props;
