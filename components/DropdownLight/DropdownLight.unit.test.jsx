// Generated with scripts/create-component.js
import { render } from '@testing-library/react';

import DropdownLight from './DropdownLight';

import { itemsStringMock } from '../../stories/DropdownLight/mock';

describe('<DropdownLight />', () => {
  it('should match the snapshots', () => {
    expect(
      render(<DropdownLight items={itemsStringMock} />).asFragment(),
    ).toMatchSnapshot();
  });
});
