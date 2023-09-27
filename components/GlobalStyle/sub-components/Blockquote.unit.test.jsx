import { render } from '@testing-library/react';

import Blockquote from './Blockquote';

describe.skip('<Blockquote />', () => {
  it('Should match the snapshot', () => {
    expect(render(<Blockquote />).asFragment()).toMatchSnapshot();
  });
});
