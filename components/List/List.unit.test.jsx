import { render, screen } from '@testing-library/react';
import List from './List';

const items = [
  'Tomato sauce',
  'Mustard',
  'Barbecue sauce',
  'Red-wine vinegar',
  'Salsa',
  'Hot pepper sauce',
];

const exampleItemsWithIcon = [
  { icon: 'close' },
  { icon: 'accessible' },
  { icon: 'block' },
];

describe('<List />', () => {
  it('Should match the default snapshot', () => {
    const { container } = render(<List />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should match the divided list snapshot', () => {
    const { container } = render(<List bullet="•" inline items={items} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should match bullet list snapshot', () => {
    const { container } = render(<List divided items={items} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should match the bullet list snapshot', () => {
    const { container } = render(<List ordered items={items} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('render six Item components', () => {
    render(<List items={items} />);
    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('render unordered list as a default one', () => {
    const { container } = render(<List />);
    const list = container.querySelector('ul');
    expect(list).toBeInTheDocument();
  });

  it('render ordered list', () => {
    const { container } = render(<List ordered />);
    const list = container.querySelector('ol');
    expect(list).toBeInTheDocument();
  });

  it('render icon list', () => {
    const { container } = render(<List items={exampleItemsWithIcon} />);
    const icons = container.querySelectorAll('svg');
    expect(icons).toHaveLength(3);
  });
});
