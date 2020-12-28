import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';

import useStyles from './styles';
import { theme } from './theme';

import Header from './components/Header/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import DrivingPattern from './pages/DrivingPattern';

const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className={classes.container}>
          <Header />
          <div className={classes.content}>
              <Route path="/" component={Home}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/drivingpattern" component={DrivingPattern}/>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App;
