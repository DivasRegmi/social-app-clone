import { createMuiTheme } from '@material-ui/core/styles';
import {teal} from '@material-ui/core/colors';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: {
      main: teal[500],
      
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;