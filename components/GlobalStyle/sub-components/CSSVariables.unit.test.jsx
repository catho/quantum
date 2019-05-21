import React from 'react';
import renderer from 'react-test-renderer';
import CSSVariables from './CSSVariables';
import { breakpoints, gutter } from '../../shared/theme';

import { expectCSSMatches } from '../test.utils';

describe('CSSVariables component', () => {
  it('Should add default css variables', () => {
    renderer.create(<CSSVariables />);

    expectCSSMatches(
      `:root {
        --gutter: ${gutter * 2}px;
      }`,
    );
  });

  it('Should add small up css variables', () => {
    renderer.create(<CSSVariables />);

    expectCSSMatches(
      `@media (min-width: ${breakpoints.small.width}px) {
        :root {
          --gutter: ${gutter * 3}px;
        }
      }`,
    );
  });
});
