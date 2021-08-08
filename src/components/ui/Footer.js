import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import footerAdornment from '../../assets/Footer Adornment.svg';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
}));

export default function Footer(props) {
  const { setValue, setSelectedIndex } = props;

  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          className={classes.mainContainer}
          justifyContent='center'
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction='column'>
              <Grid
                item
                component={Link}
                to='/'
                className={classes.link}
                onClick={() => setValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/services'
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to='/customsoftware'
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                to='/mobileapps'
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                component={Link}
                to='/websites'
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/revolution'
                className={classes.link}
                onClick={() => setValue(2)}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                to='/revolution'
                className={classes.link}
                onClick={() => setValue(2)}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                to='/revolution'
                className={classes.link}
                onClick={() => setValue(2)}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to='/revolution'
                className={classes.link}
                onClick={() => setValue(2)}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/about'
                className={classes.link}
                onClick={() => setValue(3)}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                to='/about'
                className={classes.link}
                onClick={() => setValue(3)}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                to='/about'
                className={classes.link}
                onClick={() => setValue(3)}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/contact'
                className={classes.link}
                onClick={() => setValue(4)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        className={classes.adornment}
        src={footerAdornment}
        alt='black decorative slash'
      />
    </footer>
  );
}
