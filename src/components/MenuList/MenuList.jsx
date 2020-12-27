import React from 'react';
import { Link } from 'react-router-dom'
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
      },
    },
    MuiButtonBase: {
      root: {
        color: '#fafafa',
        border: 'none'
      }
    }
  }
})

const MenuList = ({ open, closeMenu }) => {
  const classes = useStyles();

  return (
    <nav className={classes.list}>
      <ThemeProvider theme={theme}>
        <Menu open={open} onClose={closeMenu} style={{left: '128px', top: '-340px' }} >
          <Link to='/' onClick={closeMenu}>
            <MenuItem>
              Dashboard
            </MenuItem>
          </Link>
          <Link to='drivingpattern' onClick={closeMenu}>
            <MenuItem>
              Driving Pattern
            </MenuItem>
          </Link>
        </Menu>
      </ThemeProvider>
    </nav>
  )
}

export default MenuList;
