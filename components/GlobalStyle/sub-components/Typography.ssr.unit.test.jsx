/**
 * @jest-environment node
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Typography from './Typography';

describe('Typography component', () => {
  it('Should add standart typeface on SSR via tag link', () => {
    expect(renderer.create(<Typography />).toJSON()).toMatchSnapshot();
  });
});
