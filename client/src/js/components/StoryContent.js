import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { Editor, EditorState, convertToRaw, convertFromRaw } from 'draft-js';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function StoryContent(props) {

  const classes = useStyles();
  const convertedState = EditorState.createWithContent(convertFromRaw(props.content));
  const value = EditorState.createWithContent(convertedState.getCurrentContent());
    
  return (
    <Box className={classes.main}>
      <Typography color="textSecondary" component="div">
        <Box mb={2} fontSize="h5.fontSize">{props.title}</Box>
        <Editor editorState={value} onChange={()=>{}} />
        <Box textAlign="right" fontStyle="italic"> {'by ' + props.author}</Box>
      </Typography>
    </Box>
    );

}


export default StoryContent;