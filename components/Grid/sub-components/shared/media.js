import { css } from 'styled-components';

const query = (breakpoints) =>
  Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...style) => css`
      @media (min-width: ${breakpoints[label].width || 0}px) {
        ${css(...style)};
      }
    `;
    return acc;
  }, {});

export { query };
