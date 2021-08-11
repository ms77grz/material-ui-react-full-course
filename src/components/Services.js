import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ButtonArrow from '../components/ui/ButtonArrow';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles(theme => ({
  learnBtn: {
    ...theme.typography.learnBtn,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  servicesContainer: {
    marginTop: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
}));

export default function Services(props) {
  const { setValue, setSelectedIndex } = props;

  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container direction='column'>
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          marginTop: matchesSM ? '1em' : '2em',
        }}
      >
        <Typography
          variant='h2'
          gutterBottom
          align={matchesSM ? 'center' : undefined}
        >
          Services
        </Typography>
      </Grid>
      {/* ios/android section */}
      <Grid item>
        <Grid
          className={classes.servicesContainer}
          container
          justifyContent={matchesSM ? 'center' : 'flex-end'}
          style={{ marginTop: matchesSM ? '1em' : '5em' }}
        >
          <Grid
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
            item
          >
            <Typography variant='h4'>iOS/Android App Development</Typography>
            <Typography className={classes.subtitle} variant='subtitle1'>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant='subtitle1'>
              Integrate your web experience or create a standalone app{' '}
              {matchesSM ? null : <br />}with either mobile platform.
            </Typography>
            <Button
              component={Link}
              to='/mobileapps'
              className={classes.learnBtn}
              variant='outlined'
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid style={{ marginRight: matchesSM ? 0 : '5em' }} item>
            <img
              className={classes.icon}
              src={mobileAppsIcon}
              alt='mobile phone icon'
              width='250em'
            />
          </Grid>
        </Grid>
      </Grid>
      {/* end of ios/android section */}
      {/* custom software section */}
      <Grid item>
        <Grid
          className={classes.servicesContainer}
          container
          justifyContent={matchesSM ? 'center' : undefined}
        >
          <Grid
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
            item
          >
            <Typography variant='h4'>Custom Software Development</Typography>
            <Typography className={classes.subtitle} variant='subtitle1'>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant='subtitle1'>
              Complete digital solutions, from investigation to{' '}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              component={Link}
              to='/customsoftware'
              className={classes.learnBtn}
              variant='outlined'
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              src={customSoftwareIcon}
              alt='custom software icon'
            />
          </Grid>
        </Grid>
      </Grid>
      {/* end of custom software section */}
      {/* website section */}
      <Grid item>
        <Grid
          className={classes.servicesContainer}
          container
          justifyContent={matchesSM ? 'center' : 'flex-end'}
          style={{ marginBottom: '10em' }}
        >
          <Grid
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
            item
          >
            <Typography variant='h4'>Website Development</Typography>
            <Typography className={classes.subtitle} variant='subtitle1'>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant='subtitle1'>
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              component={Link}
              to='/websites'
              className={classes.learnBtn}
              variant='outlined'
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              className={classes.icon}
              src={websitesIcon}
              alt='website icon'
              width='250em'
            />
          </Grid>
        </Grid>
      </Grid>
      {/* end of website section */}
    </Grid>
  );
}
