import React from 'react';
import PropTypes from 'prop-types';

const Step = ({ title, active }) => {
  const isActive = active ? 'active' : '';

  return (
    <React.Fragment>
      <li className={isActive}>
        <p>{title}</p>
      </li>
    </React.Fragment>
  );
};

Step.propTypes = {
  title: PropTypes.string.isRequired,
  // icon: PropTypes.string,
  active: PropTypes.bool,
};

Step.defaultProps = {
  active: false,
};

export default Step;
