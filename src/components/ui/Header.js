import React, { useState } from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button, makeStyles, Tab, Tabs } from '@material-ui/core';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },
  logo: {
    height: '7em',
  },
  tabContainer: {
    marginLeft: 'auto',
    '& .MuiTab-wrapper': {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: 25,
      marginRight: 25,
    },
  },
  btn: {
    ...theme.typography.estimate,
    borderRadius: 50,
    marginLeft: 50,
    marginRight: 25,
    height: 45,
  },
}));

export default function Header(props) {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (e, index) => {
    setValue(index);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <img src={logo} alt='company logo' className={classes.logo} />
            <Tabs
              value={value}
              className={classes.tabContainer}
              onChange={handleChange}
              indicatorColor='primary'
            >
              <Tab label='home' />
              <Tab label='services' />
              <Tab label='the revolution' />
              <Tab label='about us' />
              <Tab label='contact us' />
            </Tabs>
            <Button
              variant='contained'
              color='secondary'
              className={classes.btn}
            >
              free estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </React.Fragment>
  );
}
