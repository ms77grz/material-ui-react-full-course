import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { animationData } from '../animations/landinganimation/data';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/ui/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles(theme => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  estimateBtn: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnBtnHero: {
    ...theme.typography.learnBtn,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  learnBtn: {
    ...theme.typography.learnBtn,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  btnContainer: {
    marginTop: '1em',
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
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
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      {/* hero section */}
      <Grid item>
        <Grid container justifyContent='flex-end' alignItems='center'>
          <Grid item sm className={classes.heroTextContainer}>
            <Typography align='center' variant='h2'>
              Bringin West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid
              container
              justifyContent='center'
              className={classes.btnContainer}
            >
              <Grid item>
                <Button className={classes.estimateBtn} variant='contained'>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button className={classes.learnBtnHero} variant='outlined'>
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
          </Grid>
        </Grid>
      </Grid>
      {/* end of hero section */}
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
            <Button className={classes.learnBtn} variant='outlined'>
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
      {/* ios/android section */}
      <Grid item>
        <Grid
          className={classes.servicesContainer}
          container
          justifyContent={matchesSM ? 'center' : 'flex-end'}
        >
          <Grid
            style={{
              textAlign: matchesSM ? 'center' : undefined,
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
            <Button className={classes.learnBtn} variant='outlined'>
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
            />
          </Grid>
        </Grid>
      </Grid>
      {/* end of ios/android section */}
      {/* website section */}
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
            <Typography variant='h4'>Website Development</Typography>
            <Typography className={classes.subtitle} variant='subtitle1'>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant='subtitle1'>
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button className={classes.learnBtn} variant='outlined'>
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
              src={websitesIcon}
              alt='website icon'
            />
          </Grid>
        </Grid>
      </Grid>
      {/* end of website section */}
    </Grid>
  );
}
