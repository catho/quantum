// Generated with scripts/create-component.js
import React from 'react';
import { create } from 'react-test-renderer';

import Breadcrumbs from './Breadcrumbs';

describe('<Breadcrumbs />', () => {
  it('should match the snapshots', () => {
    expect(create(<Breadcrumbs />).toJSON()).toMatchSnapshot();
  });
});
