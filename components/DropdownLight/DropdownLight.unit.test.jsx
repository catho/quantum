// Generated with scripts/create-component.js
import { render } from '@testing-library/react';

import DropdownLight from './DropdownLight';

describe('<DropdownLight />', () => {
  it('should match the snapshots', () => {
    expect(render(<DropdownLight />).asFragment()).toMatchSnapshot();
  });
});
