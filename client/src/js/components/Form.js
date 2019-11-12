import React, { useState } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import {Editor, EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import StoryContent from "./StoryContent";

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
    marginRight: theme.spacing(1),
  },
  editorContainer: {
    height: '250px',
    overflow: 'auto'
  },
  previewContainer: {
    height: '400px',
    overflow: 'auto'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function ConnectedForm(props) {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const localStorageContent = window.localStorage.getItem('content');

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [editorContent, setEditorContent] = useState((localStorageContent) ? EditorState.createWithContent(convertFromRaw(JSON.parse(localStorageContent))) : EditorState.createEmpty());
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
      alert("Now your story will temporarily appear on our site. After you click on the link we have sent to your email, your story will be permanently on our site.");
      props.handleClose();
    }
    
  }

  function getSteps() {
    return ['Write', 'Preview', 'Publish'];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <FormControl fullWidth>
                 <TextField id="title" label="Title" value={title} onChange={handleChange} margin="normal" helperText={(titleError) ? titleError : ""} error={(titleError) ? true : false} />
                 
                     <Editor fullWidth editorState={editorContent} onChange={onChange} placeholder="Tell a story..." />
  
               </FormControl>;
      case 1:
        return <StoryContent title={title} content={convertToRaw(editorContent.getCurrentContent())} author={author} />;
      case 2:
        return <FormControl fullWidth>
                 <Typography className={classes.instructions}>
                   Name of the author will be publicly visible. Use pseudonym or anything you like.
                 </Typography>
                 <Typography className={classes.instructions}>
                   Email address will not appear in public. It will be used strictly for authentication.
                 </Typography>
                 <TextField id="email" label="email" value={email} onChange={handleChange} margin="normal" helperText={(emailError) ? emailError : ""} error={(emailError) ? true : false} />
                 <TextField id="author" label="author" value={author} onChange={handleChange} margin="normal" helperText={(authorError) ? authorError : ""} error={(authorError) ? true : false} />
               </FormControl>;
      default:
        return 'Unknown step';
    }
  }

  const isStepOptional = step => {
    return step === 1;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    if(!activeStep && !title) {
      if(!title) setTitleError("Required");
    } else if(!activeStep && props.articles.find((article) => article.title===title)) {
      setTitleError("Title must be unique");
    }
    else {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Grid>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}> All steps completed - you&apos;re finished </Typography>
            <Button onClick={handleReset} className={classes.button}> Reset </Button>
          </div>
        ) : (
          <Grid>
            <Grid style={{ height: '380px'}}>{getStepContent(activeStep)}</Grid>
            <Grid>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}> Back </Button>
              {isStepOptional(activeStep) && (
                <Button variant="contained" color="primary" onClick={handleSkip} className={classes.button}>
                  Skip
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                className={classes.button} > {activeStep === steps.length - 1 ? 'Publish' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        )}
    </Grid>
  );
}

const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);

export default Form;