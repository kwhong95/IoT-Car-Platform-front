import React from 'react'
import { Typography, Grid, Card, CardContent } from '@material-ui/core';
import RapidOperation from '../../components/Charts/RapidOperaction/RapidOperation';

import useStyles from './styles';
import Sidebar from '../../components/Sidebar/Sidebar';

const DrivingPattern = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Sidebar />
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title}>준비중입니다...</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card>
            <CardContent>
              <Typography className={classes.title}>급동작 분석</Typography>
              <RapidOperation />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </main>
  )
}

export default DrivingPattern;
