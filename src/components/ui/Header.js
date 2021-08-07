import React, { useState, useEffect } from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
    height: '8em',
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: 25,
  },
  btn: {
    ...theme.typography.estimate,
    borderRadius: 50,
    marginLeft: 50,
    marginRight: 25,
    height: 45,
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const menuOptions = [
    { name: 'Services', link: '/services' },
    { name: 'Custom Software Development', link: '/customsoftware' },
    { name: 'Mobile App Development', link: '/mobileapps' },
    { name: 'Websites', link: '/websites' },
  ];

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/services' && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === '/revolution' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/about' && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === '/contact' && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === '/estimate' && value !== 5) {
      setValue(5);
    }
  }, [value]);

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to='/'
              className={classes.logoContainer}
              disableRipple
              onClick={() => setValue(0)}
            >
              <img src={logo} alt='company logo' className={classes.logo} />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor='primary'
            >
              <Tab
                className={classes.tab}
                label='Home'
                component={Link}
                to='/'
              />
              <Tab
                aria-owns={anchorEl ? 'services-menu' : undefined}
                aria-haspopup={anchorEl ? 'true' : undefined}
                className={classes.tab}
                label='Services'
                component={Link}
                onMouseOver={event => handleClick(event)}
                to='/services'
              />
              <Tab
                className={classes.tab}
                label='The Revolution'
                component={Link}
                to='/revolution'
              />
              <Tab
                className={classes.tab}
                label='About Us'
                component={Link}
                to='/about'
              />
              <Tab
                className={classes.tab}
                label='Contact Us'
                component={Link}
                to='/contact'
              />
            </Tabs>
            <Button
              variant='contained'
              color='secondary'
              className={classes.btn}
            >
              Free Estimate
            </Button>
            <Menu
              id='services-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              classes={{ paper: classes.menu }}
              MenuListProps={{ onMouseLeave: handleClose }}
              elevation={0}
            >
              {menuOptions.map((option, i) => (
                <MenuItem
                  key={option.name}
                  component={Link}
                  to={option.link}
                  classes={{ root: classes.menuItem }}
                  onClick={event => {
                    handleMenuItemClick(event, i);
                    setValue(1);
                    handleClose();
                  }}
                  selected={i === selectedIndex && value === 1}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </React.Fragment>
  );
}
