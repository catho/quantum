import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Group = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 20px;
  }

  ${props => props.inline && `
    align-items: unset;
    flex-direction: unset;
  `}
`;

/**
 * Group for Radio components.
 */
const RadioGroup = props => <Group {...props} />;

RadioGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default RadioGroup;
