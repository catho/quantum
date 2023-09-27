import { render } from '@testing-library/react';
import ActionButton from './ActionButton';

describe.skip('<ActionButton />', () => {
  describe.skip('Snapshot', () => {
    it('should match snapshot', () => {
      expect(
        render(<ActionButton>Back</ActionButton>).asFragment(),
      ).toMatchSnapshot();
    });

    it('should match snapshot with aria-disabled prop', () => {
      expect(
        render(<ActionButton aria-disabled>Next</ActionButton>).asFragment(),
      ).toMatchSnapshot();
    });
  });
});
