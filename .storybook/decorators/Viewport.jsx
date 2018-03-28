import React from 'react';
import { configure } from '@storybook/addon-viewport';
import { BREAKPOINTS } from '../../components/Grid';

const Viewport = (storyFn) => (
  <React.Fragment>
    {
      configure({
        viewports: Object
        .entries(BREAKPOINTS)
        .map(([key, value]) => ({
          key: {
            name: key,
            styles: {
              width: `${value}px`,
            }
          }
        }))
      })
    }
    { storyFn() }
  </React.Fragment>
);

export default Viewport;
