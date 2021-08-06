import React, { useState, useEffect } from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button, makeStyles, Tab, Tabs } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import logo from '../../assets/logo.svg';

const paths = [
  { href: '/', label: 'home' },
  { href: '/services', label: 'services' },
  { href: '/revolution', label: 'the revolution' },
  { href: '/about', label: 'about us' },
  { href: '/contact', label: 'contact us' },
];

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
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
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

  const [anchorEl, setAnchorEl] = useState(null);

  const [open, setOpen] = useState(false);

  const handleChange = (e, index) => {
    setValue(index);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  useEffect(() => {
    const pathIndex = paths
      .map(path => path.href)
      .indexOf(window.location.pathname);
    setValue(pathIndex);
  }, [value]);

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link}
              to='/'
              className={classes.logoContainer}
              onClick={() => setValue(0)}
            >
              <img src={logo} alt='company logo' className={classes.logo} />
            </Button>
            <Tabs
              value={value}
              className={classes.tabContainer}
              onChange={handleChange}
              indicatorColor='primary'
            >
              {paths.map(path => (
                <Tab
                  aria-owns={anchorEl ? 'service-menu' : undefined}
                  aria-haspopup={anchorEl ? 'true' : undefined}
                  onMouseOver={event => handleClick(event)}
                  key={path.label}
                  label={path.label}
                  component={Link}
                  to={path.href}
                />
              ))}
            </Tabs>
            <Button
              variant='contained'
              color='secondary'
              className={classes.btn}
            >
              free estimate
            </Button>
            <Menu
              id='service-menu'
              anchorEl={anchorEl}
              keepMounted
              open={
                anchorEl?.attributes.href.textContent.includes('/services')
                  ? open
                  : null
              }
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem onClick={handleClose}>
                custom software development
              </MenuItem>
              <MenuItem onClick={handleClose}>mobile app development</MenuItem>
              <MenuItem onClick={handleClose}>website development</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </React.Fragment>
  );
}
