import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Content = styled.div`
  font-size: ${props => (props.small ? '12px' : '14px')};
  margin: 8px 0 0 0;
`;

const Description = ({ ...props }) => <Content {...props} />;

Description.displayName = 'Card.Description';

Description.propTypes = {
  /** default `font-size` is `14px`, with `small` prop defined the `font-size` is changed to `12px`. */
  small: PropTypes.bool,
};

Description.defaultProps = {
  small: false,
};

export default Description;
