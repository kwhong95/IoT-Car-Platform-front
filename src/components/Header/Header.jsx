import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Breadcrumbs } from '@material-ui/core';
import { Settings, MenuOpen } from '@material-ui/icons';
import useStyles from './styles';
import MenuItems from './MenuList/MenuList';

const breadcrumbNameMap = {
  '/': 'DriverMate',
  '/dashboard': 'Dashboard',
  '/drivingpattern': 'Driving Pattern',
}

const Header = () => {
  const classes = useStyles();
  const pathnames = window.location.pathname.split('/').filter((x) => x);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const closeMenu = () => {
    setAnchorEl(false);
  }
  
  return (
    <div className={classes.header}>
      <AppBar position="static">
        <Toolbar>
        <IconButton onClick={handleClick}>
          <MenuOpen />
        </IconButton>
          <Breadcrumbs className={classes.title} separator=">">
            <Link to='/'>
              <Typography>Driver Mate</Typography>
            </Link>
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;

              return last? (
                <Typography className={classes.lasttitle} color="textPrimary" key={to}>
                  {breadcrumbNameMap[to]}
                </Typography>
              ):
              <Link to={to} key={to}>
                  <Typography>{breadcrumbNameMap[to]}</Typography>
              </Link>
            })}
          </Breadcrumbs>
          <IconButton>
            <Settings />
          </IconButton>
        </Toolbar>
      </AppBar>
      <MenuItems 
        anchorEl={anchorEl}
        closeMenu={closeMenu}
      />
    </div>
  )
}

export default Header
