import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '20px',
    backgroundColor: '#5a5c8d',
    boxShadow:' 0 1px 10px rgba(0,0,0,0.12), 0 1px 10px rgba(0,0,0,0.24)'
  },
}));

export default function Copyright() {
  const classes = useStyles();

  return (
    <Typography className={classes.root} variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://todovica.github.io/">
        Ana Todovic
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};