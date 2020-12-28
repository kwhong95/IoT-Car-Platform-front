import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  header : {
    display: 'flex',
    flexGrow: 1,
  },
  title: {
    display: 'flex',
    flexGrow: 1,
    margin: theme.spacing(1),
  },
}))

export default useStyles;