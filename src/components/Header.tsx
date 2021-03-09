import { AppBar, makeStyles, Toolbar } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    background: 'transparent',
    zIndex: 999,
  },
});

function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="fixed">
      <Toolbar />
    </AppBar>
  );
}

export default Header;
