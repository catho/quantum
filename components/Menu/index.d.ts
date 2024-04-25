// Generated with scripts/create-component.js
import { FC } from 'react';

export interface MenuItemProps {
  id: string | number;
  content: React.ReactNode;
  handleClick: Function;
}

export interface MenuProps {
  open?: boolean;
  items?: MenuItemProps[];
  anchorEl?: Element | (() => Element) | null;
  anchorOrigin?: {
    vertical: 'top' | 'bottom' | 'center';
    horizontal: 'left' | 'center' | 'right';
  };
  transformOrigin?: {
    vertical: 'top' | 'bottom' | 'center';
    horizontal: 'left' | 'center' | 'right';
  };
  keepMounted?: boolean;
  handleClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
}

declare const Menu: FC<MenuProps>;
export default Menu;
