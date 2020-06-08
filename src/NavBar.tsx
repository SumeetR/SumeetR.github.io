import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.common.black
    },
    title: {
      alignItems: 'right',
      flexGrow: 1,
    },
  }),
);

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} color="inherit" position="static" variant="elevation">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            sumcho.com
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}