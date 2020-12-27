import React from 'react';
import Header from './components/Header/Header';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Header />
    </main>
  )
}

export default App;
