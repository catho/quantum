import React from 'react';
import { AutoExample } from '@catho/quantum-storybook-ui';

import TextArea from '../../components/TextArea';

export default {
  title: 'Forms',
};

export const TextAreaStory = () => <AutoExample component={TextArea} />;

TextAreaStory.story = {
  name: 'Text area',
};
