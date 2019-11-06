import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  main: {
    width: '700px',
    maxWidth: 700,
    maxHeight: '500px',
    overflow: 'auto',
  },
}));

function SotryContent(props) {

  const classes = useStyles();

    
  return (
    <Box className={classes.main}>
      <Typography color="textSecondary" component="div">
        <Box mb={2} fontSize="h5.fontSize">{props.title}</Box>
        <Box>{props.content}</Box>
        <Box textAlign="right" fontStyle="italic"> {'by ' + props.author}</Box>
      </Typography>
    </Box>
    );

}


export default SotryContent;