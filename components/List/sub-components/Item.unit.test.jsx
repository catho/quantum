import { render, screen } from '@testing-library/react';
import Item from './Item';

const content = 'content';
const icon = 'info';
const header = 'header';
const subheader = 'subheader';

describe('<Item />', () => {
  it('Should match the snapshot', () => {
    const { container } = render(<Item />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('render an Item with icon', () => {
    const { container } = render(<Item icon={icon} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('render Content component', () => {
    render(<Item content={content} />);
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('accept any children as a content', () => {
    render(<Item>{content}</Item>);
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('render Content, Header and SubHeader components', () => {
    render(<Item content={{ header, subheader }} />);

    expect(screen.getByText(header)).toBeInTheDocument();
    expect(screen.getByText(subheader)).toBeInTheDocument();
  });
});
