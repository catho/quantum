// Generated with scripts/create-component.js
import { render, fireEvent } from '@testing-library/react';
import Menu from './Menu';

describe('<Menu />', () => {
  const mockItems = [
    { id: 'item-1', content: 'Item 1', onClick: jest.fn() },
    { id: 'item-2', content: 'Item 2', onClick: jest.fn() },
  ];

  const mockAnchorEl = document.createElement('div');
  const mockHandleClose = jest.fn();

  const renderMenu = (props) => render(<Menu {...props} />);

  it('should match the snapshots', () => {
    expect(render(<Menu />).asFragment()).toMatchSnapshot();
  });
  it('renders with correct items', () => {
    const { getByText } = renderMenu({
      open: true,
      items: mockItems,
      anchorEl: mockAnchorEl,
      onClose: mockHandleClose,
    });

    mockItems.forEach((item) => {
      const renderedItem = getByText(item.content);
      expect(renderedItem).toBeInTheDocument();
    });
  });

  it('calls onClose when an item is clicked', () => {
    const { getByText } = renderMenu({
      open: true,
      items: mockItems,
      anchorEl: mockAnchorEl,
      onClose: mockHandleClose,
    });

    mockItems.forEach((item) => {
      const renderedItem = getByText(item.content);
      fireEvent.click(renderedItem);
      expect(item.onClick).toHaveBeenCalledTimes(1);
    });
  });

  it('renders with anchorEl when open is true', () => {
    const { getByRole } = renderMenu({
      open: true,
      items: mockItems,
      anchorEl: mockAnchorEl,
      onClose: mockHandleClose,
    });
    const menu = getByRole('presentation');
    expect(menu).toBeInTheDocument();
  });

  it('does not render with anchorEl when open is false', () => {
    const { queryByRole } = renderMenu({
      open: false,
      items: mockItems,
      anchorEl: mockAnchorEl,
      onClose: mockHandleClose,
    });
    const menu = queryByRole('presentation');
    expect(menu).toBeNull();
  });

  it('calls onClose when onBlur event is triggered', () => {
    const { getByRole } = renderMenu({
      open: true,
      items: mockItems,
      anchorEl: mockAnchorEl,
      onClose: mockHandleClose,
    });
    const menu = getByRole('presentation');
    fireEvent.blur(menu);
    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });

  it('renders without items when items array is empty', () => {
    const { queryByText } = renderMenu({
      open: true,
      items: [],
      anchorEl: mockAnchorEl,
      onClose: mockHandleClose,
    });
    mockItems.forEach((item) => {
      const renderedItem = queryByText(item.content);
      expect(renderedItem).toBeNull();
    });
  });
});
