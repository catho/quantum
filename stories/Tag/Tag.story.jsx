import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample } from '@catho-private/quantum-storybook-ui';
import { Tag, Colors } from '../../components';

storiesOf('16. Tag', module).add('Tag', () => <AutoExample component={Tag} />);
