import { render, screen } from '@testing-library/react';
import Content from './Content';

const content = 'content';
const header = 'header';
const subheader = 'subheader';

describe('<Content />', () => {
  it('Should match the snapshot', () => {
    const { container } = render(<Content />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('render Header component', () => {
    render(<Content content={content} />);
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('accept any children as a content', () => {
    render(<Content>{content}</Content>);
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('render Header and SubHeader components with content prop', () => {
    render(<Content content={{ header, subheader }} />);

    expect(screen.getByText(header)).toBeInTheDocument();
    expect(screen.getByText(subheader)).toBeInTheDocument();
  });

  it('render Header and SubHeader with own props', () => {
    render(<Content header={header} subheader={subheader} />);

    expect(screen.getByText(header)).toBeInTheDocument();
    expect(screen.getByText(subheader)).toBeInTheDocument();
  });
});
