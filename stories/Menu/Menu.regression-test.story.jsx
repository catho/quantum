// Generated with scripts/create-componnent.js

import { useState } from 'react';
import { Menu, Button } from '../../components';

export default {
  title: 'Menu',
  component: Menu,
};

const menuItems = [
  {
    id: 'test-candidate',
    content: 'Testar candidato',
    handleClick: () => {},
  },
  {
    id: 'print-cv',
    content: 'Imprimir currículo',
    handleClick: () => {},
  },
];

const Template = (args) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="button"
        aria-controls={open ? 'menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        items={menuItems}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        {...args}
      />
    </div>
  );
};

export const Default = Template.bind({});
