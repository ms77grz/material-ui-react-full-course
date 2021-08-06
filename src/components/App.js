import { ThemeProvider } from '@material-ui/core/styles';
import Header from './ui/Header';
import theme from '../components/ui/theme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={() => <div>home</div>} />
          <Route exact path='/services' component={() => <div>services</div>} />
          <Route
            exact
            path='/customsoftware'
            component={() => <div>custom software</div>}
          />
          <Route
            exact
            path='/mobileapps'
            component={() => <div>mobile apps</div>}
          />
          <Route exact path='/websites' component={() => <div>websites</div>} />
          <Route
            exact
            path='/revolution'
            component={() => <div>the revolution</div>}
          />
          <Route exact path='/about' component={() => <div>about</div>} />
          <Route
            exact
            path='/contact'
            component={() => <div>contact us</div>}
          />
          <Route exact path='/estimate' component={() => <div>estimate</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
