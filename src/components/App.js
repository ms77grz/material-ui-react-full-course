import { ThemeProvider } from '@material-ui/core/styles';
import Header from './ui/Header';
import theme from '../components/ui/theme';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Typography variant='h2'>Can you see me now?</Typography>
      {[...new Array(100)]
        .map(
          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
        )
        .join('\n')}
    </ThemeProvider>
  );
}

export default App;
