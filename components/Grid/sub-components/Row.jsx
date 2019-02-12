import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSVariables, hide, noGutters, query } from './shared';
import { BREAKPOINTS } from '../../shared';

const queryStyle = () =>
  Object.entries(BREAKPOINTS).map(
    ([name, { columns }]) =>
      query[name]`
      grid-template-columns: repeat(${columns}, 1fr);
    `,
  );

const Row = styled.div`
  display: grid;
  grid-column-gap: var(--gutter);
  grid-row-gap: var(--gutter);
  margin-bottom: var(--gutter);
  grid-auto-columns: max-content;
  ${queryStyle}

  ${hide}
  ${noGutters}
`;

Row.propTypes = {
  'no-gutters': PropTypes.bool,
  hide: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(BREAKPOINTS)),
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

Row.defaultProps = {
  'no-gutters': false,
};

Row.displayName = 'Row';

export default Row;
