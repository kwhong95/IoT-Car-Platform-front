import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumbs, IconButton, Typography } from '@material-ui/core';
import { DriveEta, Dashboard, KeyboardArrowDown, Assessment } from '@material-ui/icons';

import useStyles from './styles';
import MenuList from '../MenuList/MenuList';


const Header = () => {
  let location = window.location;
  const classes = useStyles();
  const pathnames = location.pathname.split('/').filter((x) => x);
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
          <Typography style={{marginLeft: '5px'}}>Driving Mate</Typography>
        </Link>
        <Link color="inherit" href="/" className={classes.link}>
          {pathnames.length === 0 ? (
            <>
              <Dashboard />
              <Typography style={{marginLeft: '5px'}}>Dashboard</Typography>
            </>
          ) : (
            <>
              <Assessment />
              <Typography style={{marginLeft: '5px'}}>Driving Pattern</Typography>
            </>
          )
          }
        </Link>
      </Breadcrumbs>
      <div className={classes.menu}>
        <IconButton onClick={openMenu} style={{ right: '10px' }}>
          <KeyboardArrowDown className={classes.btncolor} />
        </IconButton>
        <MenuList open={open} closeMenu={closeMenu} />
      </div>
    </div>
  )
}

export default Header
