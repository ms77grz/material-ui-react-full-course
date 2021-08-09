import { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import theme from '../components/ui/theme';
import Header from './ui/Header';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route
            path='/services'
            component={() => <div style={{ height: '680px' }}>Services</div>}
          />
          <Route
            exact
            path='/customsoftware'
            component={() => (
              <div style={{ height: '680px' }}>Custom Software</div>
            )}
          />
          <Route
            path='/mobileapps'
            component={() => <div style={{ height: '680px' }}>Mobile Apps</div>}
          />
          <Route
            exact
            path='/websites'
            component={() => <div style={{ height: '680px' }}>Websites</div>}
          />
          <Route
            path='/revolution'
            component={() => (
              <div style={{ height: '680px' }}>The Revolution</div>
            )}
          />
          <Route
            path='/about'
            component={() => <div style={{ height: '680px' }}>About</div>}
          />
          <Route
            path='/contact'
            component={() => <div style={{ height: '680px' }}>Contact Us</div>}
          />
          <Route
            path='/estimate'
            component={() => <div style={{ height: '680px' }}>Estimate</div>}
          />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
