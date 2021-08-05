import { createTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const arcBlue = '#0b72b9';
const arcOrange = '#ffba60';

const theme = createTheme({
  palette: {
    common: {
      arcBlue: arcBlue,
      arcOrange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
});

export default theme;
