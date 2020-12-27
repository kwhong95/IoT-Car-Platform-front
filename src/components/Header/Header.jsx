import React, { useState } from 'react'
import { Breadcrumbs, Link, IconButton } from '@material-ui/core';
import { DriveEta, Dashboard, KeyboardArrowDown } from '@material-ui/icons';

import useStyles from './styles';
import MenuList from '../MenuList/MenuList';

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
  }

  const closeMenu = () => {
    setOpen(false);
  }

  return (
    <div className={classes.header}>
      <Breadcrumbs aria-label="breadcrumb" separator=">">
        <Link color="inherit" href="/" className={classes.link}>
          <DriveEta className={classes.icon} />
          Driving Mate
        </Link>
        <Link color="inherit" href="/" className={classes.link}>
          <Dashboard className={classes.icon} />
          Dashboard
        </Link>
      </Breadcrumbs>
      <div className={classes.menu}>
        <IconButton onClick={openMenu}>
          <KeyboardArrowDown className={classes.btncolor} />
        </IconButton>
        <MenuList open={open} closeMenu={closeMenu} />
      </div>
    </div>
  )
}

export default Header
