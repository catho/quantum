import { render } from '@testing-library/react';

import Blockquote from './Blockquote';

describe('<Blockquote />', () => {
  it('Should match the snapshot', () => {
    expect(render(<Blockquote />).asFragment()).toMatchSnapshot();
  });
});
