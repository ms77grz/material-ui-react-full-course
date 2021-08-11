import { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import theme from './ui/theme';
import Header from './ui/Header';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import Services from './Services';
import CustomSoftware from './CustomSoftware';

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
          <Route
            exact
            path='/'
            render={props => (
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path='/services'
            render={props => (
              <Services
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path='/customsoftware'
            render={props => (
              <CustomSoftware
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
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
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
