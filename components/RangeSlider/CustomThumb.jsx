import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip';

const CustomThumb = props => {
  console.log(props);
  return (
    <div>
      <Tooltip text={props['aria-valuenow']}>{props.children}</Tooltip>
    </div>
  );
};

CustomThumb.propTypes = {
  ['aria-valuenow']: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomThumb;
