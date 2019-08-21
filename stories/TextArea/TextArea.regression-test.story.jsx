import React from 'react';
import { storiesOf } from '@storybook/react';

import TextArea from '../../components/TextArea';

storiesOf('TextArea', module)
  .add('default', () => <TextArea />)
  .add('disabled', () => <TextArea disabled />)
  .add('label', () => <TextArea label={'label'} />)
  .add('required', () => <TextArea label={'label'} required />)
  .add('helperText', () => <TextArea helperText={'helperText'} />)
  .add('placeholder', () => <TextArea placeholder={'placeholder'} />);
