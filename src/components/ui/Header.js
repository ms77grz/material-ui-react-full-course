import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
export default function Header() {
  return (
    <AppBar position='fixed' color='primary'>
      <Toolbar>
        <Typography variant='h6'>Arc Development</Typography>
      </Toolbar>
    </AppBar>
  );
}
