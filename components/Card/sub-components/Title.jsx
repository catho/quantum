import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Heading = styled.h2`
  font-size: ${props => (props.small ? '20px' : '24px')};
  font-weight: 600;
  margin: 0;
`;

const Title = ({ ...props }) => <Heading {...props} />;

Title.displayName = 'Card.Title';

Title.propTypes = {
  /** default `font-size` is `24px`, with `small` prop defined the `font-size` is changed to `20px`. */
  small: PropTypes.bool,
};

Title.defaultProps = {
  small: false,
};

export default Title;
