import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignIn from './pages/Login/SignIn';
import DrivingPattern from './pages/DrivingPattern/DrivingPattern';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={SignIn} />
      <Route path="/drivingpattern" component={DrivingPattern} />
    </BrowserRouter>
  )
}

export default App;
