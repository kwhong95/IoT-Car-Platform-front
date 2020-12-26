import React from 'react'
import { Route, Router } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import Dashboard from '../DashBoard/Dashboard';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Sidebar />
      <Route path="/" component={Dashboard} />
    </main>
  )
}

export default Home
