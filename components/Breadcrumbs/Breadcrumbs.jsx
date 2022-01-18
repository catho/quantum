// Generated with scripts/create-component.js
import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumbs = ({ someProp }) => (
  <>
    <h1>Hello, do domething here!</h1>
    <p>{someProp}</p>
  </>
);

Breadcrumbs.propTypes = {
  someProp: PropTypes.string,
};

Breadcrumbs.defaultProps = {
  someProp: 'some prop',
};

export default Breadcrumbs;
