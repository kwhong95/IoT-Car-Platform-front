import React from 'react';
import { createMuiTheme, Menu, MenuItem, ThemeProvider } from '@material-ui/core';

import useStyles from './styles';

const theme = createMuiTheme({
  overrides: {
    MuiMenu: {
      paper: {
        backgroundColor: '#424242',
      },
      list: {
        color: '#fafafa',
      }
    },
  }
})

const MenuList = ({ open, closeMenu }) => {
  const classes = useStyles();

  return (
    <nav className={classes.list}>
      <ThemeProvider theme={theme}>
        <Menu open={open} onClose={closeMenu} style={{left: '128px', top: '-340px' }} >
          <MenuItem>
            Dashboard
          </MenuItem>
          <MenuItem>
            Driving Pattern
          </MenuItem>
        </Menu>
      </ThemeProvider>
    </nav>
  )
}

export default MenuList;
