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
    onClick: () => {},
  },
  {
    id: 'print-cv',
    content: 'Imprimir currículo',
    onClick: () => {},
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
        aria-controls="presentation"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
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
