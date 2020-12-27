import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Router>
        <Header />
        <Route path='/' component={null} />
        <Route path='drivingpattern' component={null} />
      </Router>
    </main>
  )
}

export default App;
