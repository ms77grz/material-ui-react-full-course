import { ThemeProvider } from '@material-ui/styles';
import Header from './ui/Header';
import theme from '../components/ui/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
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
