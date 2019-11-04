// src/js/components/App.js
import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import List from "./List";
import ConfirmPage from "./ConfirmPage";
import AddNewDream from "./AddNewDream";
import backgroundImage from './background.png'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '350px',
    backgroundImage: `url(${backgroundImage})`,
    marginBottom: '20px'
  },
  titleFont: {
    fontStyle: 'italic',
    fontWeight: '400',
    padding: '20px',
    color: '#000067',
    fontFamily: 'cursive',
    
  },
}));

function App() {
  const classes = useStyles();
  
  return <React.Fragment>
           <Grid container
             direction="row"
             justify="space-between"
             alignItems="flex-start" className={classes.root} >
               <Typography variant="h2" component="h6" className={classes.titleFont} > {'Share your dream'} </Typography>
               <AddNewDream />
           </Grid>

           <Container>
             <BrowserRouter>  
               <Switch>
                 <Route exact path='/confirm/:id' component={ConfirmPage} />
                 <Route exact path='/' component={List} />
                 
               </Switch>
             </BrowserRouter>
           </Container>
         </React.Fragment>
};


export default App;