import React, { useState } from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { getStories, confirm } from "../actions/index";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function mapStateToProps(state) {
  return {
    articles: state.articles.slice(0, 20)
  };
}


function ConfirmPage (props) {
  const classes = useStyles();
  if(!props.articles.length) props.getStories();
  const { id } = props.match.params;

  let a = props.articles.find((a) => a._id===id);
  if(a){
    props.confirm(a);
  }
  
  return <Grid container
           direction="column"
           justify="center"
           alignItems="center">
              {(props.articles.find((a) => a._id===id)) ? 
                <>
                  <Typography variant="subtitle1">Your story is uploaded to our server.</Typography> 
                  <Box><Button href="/" color="primary" className={classes.button}>Check it out</Button> </Box>
                </> :
                <>
                  <Typography variant="subtitle1">Are you sure this is the right link?</Typography> 
                  <Box><Button href="/" color="primary" className={classes.button}>Back</Button> </Box>
                </>}
         </Grid>;
}


export default connect(
    mapStateToProps,
    { getStories, confirm }
)(ConfirmPage);