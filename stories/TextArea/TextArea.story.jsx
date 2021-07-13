import React from 'react';
import { AutoExample } from '@catho/quantum-storybook-ui';

import TextArea from '../../components/TextArea';

export default {
  title: 'Forms',
};

export const _TextArea = () => <AutoExample component={TextArea} />;

_TextArea.story = {
  name: 'Text area',
};
