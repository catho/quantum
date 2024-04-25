// Generated with scripts/create-component.js
import { render, fireEvent } from '@testing-library/react';
import Menu from './Menu';

describe('<Menu />', () => {
  const mockItems = [
    { id: 'item-1', content: 'Item 1', handleClick: jest.fn() },
    { id: 'item-2', content: 'Item 2', handleClick: jest.fn() },
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
      handleClose: mockHandleClose,
    });

    mockItems.forEach((item) => {
      const renderedItem = getByText(item.content);
      expect(renderedItem).toBeInTheDocument();
    });
  });

  it('calls handleClose when an item is clicked', () => {
    const { getByText } = renderMenu({
      open: true,
      items: mockItems,
      anchorEl: mockAnchorEl,
      handleClose: mockHandleClose,
    });

    mockItems.forEach((item) => {
      const renderedItem = getByText(item.content);
      fireEvent.click(renderedItem);
      expect(item.handleClick).toHaveBeenCalledTimes(1);
    });
  });

  it('renders with anchorEl when open is true', () => {
    const { getByTestId } = renderMenu({
      open: true,
      items: mockItems,
      anchorEl: mockAnchorEl,
      handleClose: mockHandleClose,
    });
    const menu = getByTestId('menu');
    expect(menu).toBeInTheDocument();
  });

  it('does not render with anchorEl when open is false', () => {
    const { queryByTestId } = renderMenu({
      open: false,
      items: mockItems,
      anchorEl: mockAnchorEl,
      handleClose: mockHandleClose,
    });
    const menu = queryByTestId('menu');
    expect(menu).toBeNull();
  });

  it('calls handleClose when onBlur event is triggered', () => {
    const { getByTestId } = renderMenu({
      open: true,
      items: mockItems,
      anchorEl: mockAnchorEl,
      handleClose: mockHandleClose,
    });
    const menu = getByTestId('menu');
    fireEvent.blur(menu);
    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });

  it('renders without items when items array is empty', () => {
    const { queryByText } = renderMenu({
      open: true,
      items: [],
      anchorEl: mockAnchorEl,
      handleClose: mockHandleClose,
    });
    mockItems.forEach((item) => {
      const renderedItem = queryByText(item.content);
      expect(renderedItem).toBeNull();
    });
  });
});
