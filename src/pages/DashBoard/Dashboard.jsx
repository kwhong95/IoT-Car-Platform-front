import React from 'react'

import useStyles from './styles';

const Dashboard = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      Dashboard Page
    </main>
  )
}

export default Dashboard
