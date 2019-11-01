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
  
  function handleChange(event) {
    if(event.target.id==='title') {
      setTitle(event.target.value);
    } else if(event.target.id==='content') {
      setContent(event.target.value);
    } else {
      console.error("id not recognized")
    }

  }

  function handleSubmit(event) {
    event.preventDefault();
    let date = new Date();
    
    console.log(date);
    props.addArticle({ title, date, content });
    setTitle("");
    setDate("");
    setContent("");
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
        />
        <Box direction="row">
          <Button color="primary" onClick={handleSubmit} className={classes.button}> Save </Button>
          <Button color="secondary" onClick={handleSubmit} className={classes.button}> Cancel </Button>
        </Box>
      </FormControl>
    </Box>
    );

}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;