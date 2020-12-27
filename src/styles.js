import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  header: {
    height: '30px',
    marginTop: '10',
  },
  link: {
    color: '#fafafa',
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  }
}));

export default useStyles;