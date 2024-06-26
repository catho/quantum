import { render } from '@testing-library/react';

import Subtitle from './Subtitle';

describe('<Subtitle />', () => {
  it('Should match the snapshot', () => {
    expect(render(<Subtitle />).asFragment()).toMatchSnapshot();
  });
});
