import { render } from '@testing-library/react';
import Title from './Title';

describe('<Title />', () => {
  it('Should match the snapshot', () => {
    expect(render(<Title />).asFragment()).toMatchSnapshot();
  });
});
