// src/js/components/App.js
import React from "react";
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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '250px',
    backgroundImage: `-webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(59%, rgba(0, 0, 0, 0)), color-stop(10%, #f5f0f0)), -webkit-gradient(linear, left top, left bottom, color-stop(10%, rgba(0, 0, 0, 0)), color-stop(70%, rgba(0, 0, 0, 0)), color-stop(190%, #f5f0f0)), url(${backgroundImage})`,
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
               <Box>
                 <Typography variant="h2" component="h6" className={classes.titleFont} > {'Dream catcher'} </Typography>
                 <Typography variant="h4" component="h4" className={classes.titleFont} > {'Share your dream!!!'} </Typography>
               </Box>
               <AddNewDream icon={<AddIcon />}>
                 <Form />
               </AddNewDream>
               
           </Grid>

           <Container>
             <BrowserRouter>  
               <Switch>
                 <Route exact path='/dream-catcher/confirm/:id' component={ConfirmPage} />
                 <Route exact path='/dream-catcher' component={List} />
                 <Redirect from='*' to='/dream-catcher'/>
               </Switch>
             </BrowserRouter>
           </Container>
         </React.Fragment>
};


export default App;