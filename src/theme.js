import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#212121',
      }
    }
  }
});