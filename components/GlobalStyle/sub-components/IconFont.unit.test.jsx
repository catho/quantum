import React from 'react';
import renderer from 'react-test-renderer';
import IconFont from './IconFont';

import { expectCSSMatches } from '../test.utils';

describe('IconFont component', () => {
  it('Should add icon typeface', () => {
    renderer.create(<IconFont />);

    expectCSSMatches(
      `@import url('https://fonts.googleapis.com/icon?family=Material+Icons');`,
    );
  });
});
