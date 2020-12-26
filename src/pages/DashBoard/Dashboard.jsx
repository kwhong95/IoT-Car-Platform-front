import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';

import useStyles from './styles';

const Dashboard = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Sidebar />
      Dashboard Page
    </main>
  )
}

export default Dashboard
