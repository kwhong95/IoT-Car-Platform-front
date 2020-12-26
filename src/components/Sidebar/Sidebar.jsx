import React, { useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { CssBaseline, Drawer, IconButton, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { ChevronRight, ChevronLeft, Dashboard, BarChart } from '@material-ui/icons';

import useStyles from '../../components/Sidebar/styles';

const Sidebar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  }

  const handleDrawerClose = () => {
    setOpen(false);
  }

  return (
    <>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
        { open === true ?  
          (
          <>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
          <div className={classes.title}>
            <Typography variant="subtitle1">IoT-Driver-App</Typography>
          </div>
          </>
          )
          :
          (
            <IconButton onClick={handleDrawerOpen}>
            <ChevronRight />
          </IconButton>
          )
        }
        </div>
        <Divider />
        <List>
          <Link to="/">
            <ListItem button>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
          <Link to='/drivingpattern'>
            <ListItem button>
              <ListItemIcon>
                <BarChart />
              </ListItemIcon>
              <ListItemText primary="Driving Pattern" />
            </ListItem>
          </Link>
        </List>
        <Divider />
      </Drawer>
    </>
  )
}

export default Sidebar;
