import React, { useState } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

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
  },
}));

function ConnectedForm(props) {

  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  
  function handleChange(event) {
    if(event.target.id==='title') {
      setTitleError(false);
      setTitle(event.target.value);
    } else if(event.target.id==='content') {
      setContentError(false);
      setContent(event.target.value);
    } else if(event.target.id==='email') {
      setEmailError(false);
      setEmail(event.target.value);
    } else {
      console.error("id not recognized")
    }

  }

  function handleSubmit(event) {
    event.preventDefault();
    let date = new Date().toLocaleDateString();

    if(!title || !content || !email) {
      if(!title) setTitleError("Required");
      if(!content) setContentError("Required");
      if(!email) setEmailError("Required");
    } else if(props.articles.find((article) => article.title===title)) {
      setTitleError("Title must be unique");
    } else { 
      props.addArticle({ title, date, content, email });
      setTitle("");
      setDate("");
      setContent("");
      setEmail("");
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
        <TextField
          id="content"
          label="Write your story here..."
          value={content}
          onChange={handleChange}
          multiline
          rows="10"
          margin="normal"
          variant="outlined"
          helperText={(contentError) ? contentError : ""}
          error={(contentError) ? true : false}
        />
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