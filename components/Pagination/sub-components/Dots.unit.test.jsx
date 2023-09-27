import { render } from '@testing-library/react';
import Dots from './Dots';

describe.skip('<Dots />', () => {
  describe.skip('Snapshot', () => {
    it('should match snapshot', () => {
      expect(render(<Dots />).asFragment()).toMatchSnapshot();
    });
  });
});
