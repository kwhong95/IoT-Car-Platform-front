import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuList, MenuItem, ListItemIcon, Typography, Divider } from '@material-ui/core';
import { Dashboard , Assessment } from '@material-ui/icons'

const MenuItems = ({ anchorEl, closeMenu }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={closeMenu}
    >
      <MenuList>
        <Link to="/dashboard" onClick={closeMenu}>
          <MenuItem >
            <ListItemIcon>
              <Dashboard fontSize="small" />
            </ListItemIcon>
            <Typography>Dashboard</Typography>
          </MenuItem>
        </Link>
        <Divider />
        <Link to="/drivingpattern" onClick={closeMenu}>
          <MenuItem>
            <ListItemIcon>
              <Assessment fontSize="small" />
            </ListItemIcon>
            <Typography>Driving Pattern</Typography>
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  )
}

export default MenuItems;
