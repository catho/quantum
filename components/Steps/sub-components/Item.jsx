import React from 'react';
import PropTypes from 'prop-types';

const Item = ({title, active, icon}) => {
  console.log(active);

  const isActive = active ? 'active' : '';

  return (
    <React.Fragment>
      <li className={isActive}>
        <p>{title}</p>
      </li>
    </React.Fragment>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  active: PropTypes.bool
};

Item.defaultProps = {
  active: false
};

export default Item;
