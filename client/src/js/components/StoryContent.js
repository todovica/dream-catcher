import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { Editor, EditorState, convertFromRaw } from 'draft-js';


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
        <Editor editorState={value} onChange={()=>{}} />
      </Typography>
    </Box>
    );

}


export default StoryContent;