import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample } from '@catho/quantum-storybook-ui';

import { IconFont } from '../../components/GlobalStyle';
import TextArea from '../../components/TextArea';

storiesOf('Forms', module).add('Text area', () => (
  <>
    <IconFont />
    <AutoExample component={TextArea} />
  </>
));
