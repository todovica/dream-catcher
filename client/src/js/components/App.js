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

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minHight: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',                     
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    marginBottom: '20px',
    minHeight: '500px'
  },
  zoom: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  titleFont: {
    fontStyle: 'italic',
    fontWeight: '400',
    fontFamily: 'cursive',
    color:"darkblue"
  }
}));


function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
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
  
  return <React.Fragment>
           <CssBaseline />
           <AppBar>
             <Toolbar>
               <Typography variant="h5" component="h5" className={classes.titleFont} > {'Dream catcher'} </Typography>
             </Toolbar>
           </AppBar>
           <Toolbar id="back-to-top-anchor" />
           <Container className={classes.root}>
           <Box align="center"> 
             <Typography variant="h6" component="h5" className={classes.titleFont} > {'Journey begins with one step, a great story begins here.'} </Typography>
             <AddNewDream icon={<AddIcon />} >
               <Form />
             </AddNewDream>
           </Box>
           <BrowserRouter>  
             <Switch>
               <Route exact path='/dream-catcher/confirm/:id' component={ConfirmPage} />
               <Route exact path='/dream-catcher' component={List} />
               <Redirect from='*' to='/dream-catcher'/>
             </Switch>
           </BrowserRouter>
           
           </Container>
           <BottomNavigation value={"sdfgh"} >
             <BottomNavigationAction label="Ana Todovic" value="Ana Todovic" icon={'by Ana Todovic'} />
           </BottomNavigation>
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
         </React.Fragment>
};


export default App;