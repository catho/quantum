/**
 * @jest-environment node
 */

import React from 'react';
import renderer from 'react-test-renderer';
import IconFont from './IconFont';

describe('IconFont component', () => {
  it('Should add icon typeface on SSR via tag link', () => {
    expect(renderer.create(<IconFont />).toJSON()).toMatchSnapshot();
  });
});
