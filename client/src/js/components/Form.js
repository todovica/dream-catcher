import React, { useState } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import {Editor, EditorState, convertToRaw, convertFromRaw } from 'draft-js';

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    }
}

function mapStateToProps(state) {
  return {
    articles: state.articles.slice(0, 10)
  };
}

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  main: {
    width: '500px',
    maxWidth: 360,
    overflow: 'auto',
  }
}));

function ConnectedForm(props) {

  const classes = useStyles();
  const localStorageContent = window.localStorage.getItem('content');

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [editorContent, setEditorContent] = useState((localStorageContent) ? EditorState.createWithContent(convertFromRaw(JSON.parse(localStorageContent))) : EditorState.createEmpty());
  //const [editorContent, setEditorContent] = useState(EditorState.createEmpty());
  const [email, setEmail] = useState("");
  const [author, setAuthor] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [authorError, setAuthorError] = useState(false);
  
  function onChange(editorState) {
    window.localStorage.setItem('content', JSON.stringify(convertToRaw(editorState.getCurrentContent())));
    console.log('content state', convertToRaw(editorState.getCurrentContent()));
    setEditorContent(editorState);

  }

  function handleChange(event) {
    if(event.target.id==='title') {
      setTitleError(false);
      setTitle(event.target.value);
    } else if(event.target.id==='email') {
      setEmailError(false);
      setEmail(event.target.value);
    } else if(event.target.id==='author') {
      setAuthorError(false);
      setAuthor(event.target.value);
    } else {
      console.error("id not recognized")
    }

  }

  function handleSubmit(event) {
    event.preventDefault();
    let date = new Date().toLocaleDateString();

    if(!title || !email || !author) {
      if(!title) setTitleError("Required");
      if(!email) setEmailError("Required");
      if(!author) setAuthorError("Required");
    } else if(props.articles.find((article) => article.title===title)) {
      setTitleError("Title must be unique");
    } else { 
      window.localStorage.setItem('content', '');
      props.addArticle({ title, date, content: convertToRaw(editorContent.getCurrentContent()), email, author });
      setTitle("");
      setDate("");
      setEditorContent(EditorState.createEmpty());
      setEmail("");
      setAuthor("");
      alert("Your story will apear on our page after you click on confirmation link we've sent to your email");
      props.handleClose();
    }
    
  }
    
  return (
    <Box className={classes.main}>
        <FormControl fullWidth>
        <TextField
          id="title"
          label="Title"
          value={title}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          helperText={(titleError) ? titleError : ""}
          error={(titleError) ? true : false}
        />
        
        <div className="editorContainer">
          <Editor editorState={editorContent} onChange={onChange} />
          
        </div>
        <TextField
          id="email"
          label="email"
          value={email}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          helperText={(emailError) ? emailError : ""}
          error={(emailError) ? true : false}
        />
        <TextField
          id="author"
          label="author"
          value={author}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          helperText={(authorError) ? authorError : ""}
          error={(authorError) ? true : false}
        />
        <Box direction="row">
          <Button color="primary" onClick={handleSubmit} className={classes.button}> Save </Button>
          <Button color="secondary" onClick={props.handleClose} className={classes.button}> Cancel </Button>
        </Box>
      </FormControl>
    </Box>
    );

}

const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);

export default Form;