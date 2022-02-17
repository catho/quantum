import { AutoExample } from '@catho/quantum-storybook-ui';

import TextArea from '../../components/TextArea';

export default {
  title: 'Forms',
};

const description =
  'The TextArea component is used to make a text input field with multiple lines in a form. It is defined with the <textarea> tag and can hold an unlimited number of characters.';

export const TextAreaStory = () => (
  <AutoExample description={description} component={TextArea} />
);

TextAreaStory.story = {
  name: 'Text area',
};
