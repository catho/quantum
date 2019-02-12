import React from 'react';
import renderer from 'react-test-renderer';
import CSSVariables from './CSSVariables';
import { BREAKPOINTS } from '../../shared';

import { expectCSSMatches } from '../test.utils';

describe('CSSVariables component', () => {
  it('Should add default css variables', () => {
    renderer.create(<CSSVariables />);

    expectCSSMatches(
      `:root {
        --gutter: 16px;
      }`,
    );
  });

  it('Should add small up css variables', () => {
    renderer.create(<CSSVariables />);

    expectCSSMatches(
      `@media (min-width: ${BREAKPOINTS.small.width}px) {
        :root {
          --gutter: 24px;
        }
      }`,
    );
  });
});
