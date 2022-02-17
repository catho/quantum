import { render } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  it('Should match the snapshot', () => {
    const { container } = render(<Header>Header</Header>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
