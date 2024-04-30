// Generated with scripts/create-component.js
import PropTypes from 'prop-types';
import MaterialMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme } from '@mui/material/styles';
import { baseFontSize, colors } from '../shared/theme';

const materialThemeOverride = createTheme({
  typography: {
    fontFamily: `"Nunito Sans", sans-serif`,
    fontSize: baseFontSize,
    allVariants: {
      color: colors.neutral[700],
    },
  },
  palette: {
    text: {
      primary: colors.neutral[700],
    },
  },
});

const Menu = (props) => {
  const {
    open,
    anchorEl,
    anchorOrigin,
    transformOrigin,
    onClose,
    items,
    keepMounted,
  } = props;

  const itemOnClick = (item) => {
    const { onClick } = item;
    onClick();
    onClose();
  };
  return (
    <MaterialMenu
      theme={materialThemeOverride}
      aria-labelledby="button"
      anchorReference="anchorEl"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      onBlur={onClose}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      keepMounted={keepMounted}
    >
      {items.map((item) => (
        <MenuItem
          key={item.id}
          onClick={() => itemOnClick(item)}
          theme={materialThemeOverride}
          color="textPrimary"
        >
          {item.content}
        </MenuItem>
      ))}
    </MaterialMenu>
  );
};

Menu.propTypes = {
  /** If true, the component is shown. */
  open: PropTypes.bool,
  /** Menu contents, has a content parameter, an id and a handleClick function. */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      content: PropTypes.ReactNode,
      onClick: PropTypes.func,
    }),
  ),
  /**	An HTML element, or a function that returns one. It's used to set the position of the menu. */
  anchorEl: PropTypes.object,
  /** The point on the anchor where the popover's anchorEl will attach to.
   * - vertical: "top", "bottom", "center"
   * - horizontal: "left", "center", "right"
   * */
  anchorOrigin: PropTypes.object,
  /** The point on the popover which will attach to the anchor's origin.
   * - vertical: "top", "bottom", "center"
   * - horizontal: "left", "center", "right"
   * */
  transformOrigin: PropTypes.object,
  /** Always keep the children in the DOM. */
  keepMounted: PropTypes.bool,
  /** Callback fired when the component requests to be closed. */
  onClose: PropTypes.func,
};

Menu.defaultProps = {
  open: false,
  items: [],
  anchorEl: null,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
  keepMounted: false,
  onClose: () => {},
};

export default Menu;
