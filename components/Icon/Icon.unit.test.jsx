import { render } from '@testing-library/react';
import Icon from './Icon';

describe('<Icon />', () => {
  it('Should match the snapshot', () => {
    const { container: tree3D } = render(<Icon name="accessible_forward" />);
    const { container: treeFilter } = render(<Icon name="check_circle" />);
    const { container: treeArrow } = render(<Icon name="search" />);
    const { container: customIcon } = render(<Icon name="box_seam_fill" />);
    const { container: withColor } = render(<Icon name="star" skin="tomato" />);
    const { container: withSmallSize } = render(
      <Icon name="search" size="small" />,
    );
    const { container: withMediumSize } = render(
      <Icon name="search" size="medium" />,
    );
    const { container: withLargeSize } = render(
      <Icon name="search" size="large" />,
    );
    const { container: withXSmallSize } = render(
      <Icon name="search" size="xsmall" />,
    );
    const { container: withXLargeSize } = render(
      <Icon name="search" size="xlarge" />,
    );

    expect(tree3D).toMatchSnapshot();
    expect(treeFilter).toMatchSnapshot();
    expect(treeArrow).toMatchSnapshot();
    expect(customIcon).toMatchSnapshot();
    expect(withColor).toMatchSnapshot();
    expect(withSmallSize).toMatchSnapshot();
    expect(withMediumSize).toMatchSnapshot();
    expect(withLargeSize).toMatchSnapshot();
    expect(withXSmallSize).toMatchSnapshot();
    expect(withXLargeSize).toMatchSnapshot();
  });

  it('should not render a icon when name is wrong', () => {
    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();
    const { container } = render(<Icon name="fooo" />);

    expect(container.querySelector('svg')).not.toBeInTheDocument();
    expect(consoleErrorMock).toBeCalled();
    consoleErrorMock.mockRestore();
  });

  it('must have size and color props when it is a custom icon', () => {
    const smallSizeInPX = '16';
    const color = '#ffffff';

    const { container } = render(
      <Icon name="box_seam_fill" size="small" skin={color} />,
    );
    const icon = container.querySelector('svg');

    expect(icon).toHaveAttribute('width', smallSizeInPX);
    expect(icon).toHaveAttribute('height', smallSizeInPX);
    expect(icon).toHaveAttribute('fill', color);
    expect(icon).not.toHaveAttribute('style');
  });

  it('must have style prop when it is a MUI icon', () => {
    const { container } = render(<Icon name="access_time" />);
    const icon = container.querySelector('svg');

    expect(icon).not.toHaveAttribute('width');
    expect(icon).not.toHaveAttribute('height');
    expect(icon).not.toHaveAttribute('fill');
    expect(icon).toHaveAttribute('style');
  });
});
