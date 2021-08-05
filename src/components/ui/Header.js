import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, Tab, Tabs } from '@material-ui/core';

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
      marginLeft: '25px',
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <img src={logo} alt='company logo' className={classes.logo} />
            <Tabs className={classes.tabContainer}>
              <Tab label='home' />
              <Tab label='services' />
              <Tab label='the revolution' />
              <Tab label='about us' />
              <Tab label='contact us' />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </React.Fragment>
  );
}
