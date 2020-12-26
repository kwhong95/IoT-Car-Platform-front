import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './pages/Login/SignIn';
import DrivingPattern from './pages/DrivingPattern/DrivingPattern';
import Dashboard from './pages/DashBoard/Dashboard';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <BrowserRouter>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={SignIn} />
        <Route path="/drivingpattern" component={DrivingPattern} />
      </BrowserRouter>
    </main>
  )
}

export default App;
