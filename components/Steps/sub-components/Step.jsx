import React from 'react';
import PropTypes from 'prop-types';

const Step = ({ title, active, done }) => {
  const classes = [];

  if (active) {
    classes.push(active);
  }

  return (
    <React.Fragment>
      <li className={classes.join(' ')}>
        <p>{title}</p>
      </li>
    </React.Fragment>
  );
};

Step.propTypes = {
  title: PropTypes.string.isRequired,
  // icon: PropTypes.string,
  active: PropTypes.bool,
  done: PropTypes.bool,
};

Step.defaultProps = {
  active: false,
  done: false,
};

export default Step;
