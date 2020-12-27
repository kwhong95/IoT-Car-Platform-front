import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    height: '30px',
    marginTop: '10',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  link: {
    display: 'flex',
    color: '#fafafa',
  },
  btncolor: {
    color: '#fafafa',
  }
}));

export default useStyles;