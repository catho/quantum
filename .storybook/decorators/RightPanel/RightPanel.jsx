import React from 'react';
import { setOptions } from '@storybook/addon-options';

const Frame = story => (
  <React.Fragment>
    {setOptions({ addonPanelInRight: true, showAddonPanel: true })}
    {story()}
  </React.Fragment>
);

export default Frame;
