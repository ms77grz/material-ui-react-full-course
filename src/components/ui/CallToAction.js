import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../../components/ui/ButtonArrow';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

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
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit',
    },
  },
  estimateBtn: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5rem',
    marginRight: '5rem',
    marginLeft: '2em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

export default function CallToAction() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  // const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid
      container
      alignItems='center'
      className={classes.background}
      justifyContent={matchesSM ? 'center' : 'space-between'}
      direction={matchesSM ? 'column' : 'row'}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5rem',
          textAlign: matchesSM ? 'center' : 'inherit',
        }}
      >
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h2'>
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
            <Typography variant='subtitle2' style={{ fontSize: '1.5rem' }}>
              Take advantage of the 21st Century.
            </Typography>
            <Grid
              container
              item
              justifyContent={matchesSM ? 'center' : undefined}
            >
              <Button className={classes.learnBtn} variant='outlined'>
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button variant='contained' className={classes.estimateBtn}>
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}
