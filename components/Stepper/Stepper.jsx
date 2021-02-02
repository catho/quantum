import React from 'react';
import Proptypes from 'prop-types';
// import styled from 'styled-components';

const Stepper = ({ total, index, title, description }) => (
  <>
    <span>
      {total} {index} {title} {description}
    </span>
  </>
);

Stepper.defaultProps = {
  total: 6,
  index: 1,
};

Stepper.propTypes = {
  total: Proptypes.number,
  index: Proptypes.number,
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
};

export default Stepper;
