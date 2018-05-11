import React from 'react';
import { storiesOf } from '@storybook/react';
import Image from '../../components/Image';

import Loader from '../../components/Loading';

storiesOf('7. Image', module)
  .add('Image', () => (
    <React.Fragment>
      <Image src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Big_%26_Small_Pumkins.JPG" alt="Example" loader={<Loader visible size={60} />} />
    </React.Fragment>
  ));
