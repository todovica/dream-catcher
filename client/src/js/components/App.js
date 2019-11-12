// src/js/components/App.js
import React from "react";
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import List from "./List";
import Form from "./Form";
import ConfirmPage from "./ConfirmPage";
import AddNewDream from "./AddNewDream";
import backgroundImage from './background.png'
import AddIcon from '@material-ui/icons/Add';
import Copyright from './Copyright';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#655b7d' },
    secondary: { main: '#f3f3f3' },
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '40px',
    marginBottom: '40px',
    minHeight: '500px'
  },
  start: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',                     
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    paddingTop: '100px',
    paddingBottom: '160px',
    backgroundColor: '#eeeeee',
    boxShadow:' 0 1px 10px rgba(0,0,0,0.12), 0 1px 10px rgba(0,0,0,0.24)'
  },
  zoom: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  titleFont: {
    fontStyle: 'italic',
    fontWeight: '400',
    backgroundColor: '#f3f3f3',
    borderRadius: '1em',
    padding: '10px',
    margin: '20px',
    boxShadow:' 0 1px 10px rgba(0,0,0,0.12), 0 1px 10px rgba(0,0,0,0.24)'
  }
}));


function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.zoom}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};

function App(props) {
  const classes = useStyles();
  
  return <MuiThemeProvider theme={theme}>
           <CssBaseline />
           <Grid container className={classes.start} direction="column" justify="flex-start" alignItems="center" >
           <Toolbar id="back-to-top-anchor" />
           <Typography variant="h6" component="h5" color='primary' className={classes.titleFont} > {'Journey begins with one step, a great story begins here.'} </Typography>
           <AddNewDream icon={<AddIcon />} >
             <Form />
           </AddNewDream></Grid>
           <Container className={classes.root}>
           <BrowserRouter>  
             <Switch>
               <Route exact path='/dream-catcher/confirm/:id' component={ConfirmPage} />
               <Route exact path='/dream-catcher' component={List} />
               <Redirect from='*' to='/dream-catcher'/>
             </Switch>
           </BrowserRouter>

           </Container>
           <Copyright />
           <ScrollTop {...props}>
           <Grid container direction="row" justify="center" alignItems="center" >
             <Fab color="secondary" aria-label="scroll back to top">
               <KeyboardArrowUpIcon />
             </Fab>
             <AddNewDream icon={<AddIcon />}>
               <Form />
             </AddNewDream>
           </Grid>
           </ScrollTop>
           </MuiThemeProvider>
};


export default App;