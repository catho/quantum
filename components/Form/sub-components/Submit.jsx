import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';

const Submit = ({ children, ...rest }) => <Button {...rest} type="submit"> {children} </Button>;

Submit.defaultProps = {
  children: 'Enviar',
};

Submit.propTypes = {
  children: PropTypes.node,
};

Submit.displayName = 'Form.Submit';

export default Submit;
