import React from "react";
import { connect } from "react-redux";
import { getStories } from "../actions/index";
import CustomizedDialog from './CustomizedDialog';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

function mapStateToProps(state) {
  return {
    articles: state.articles.slice(0, 20)
  };
}
    

function List (props) {

  if(!props.articles.length){
    props.getStories();
    return <Grid container direction="row" justify="center" alignItems="center">
             <CircularProgress color="secondary" />
           </Grid>;
  }
  
  return <Grid container spacing={3}>
    {props.articles.map(el => (
      <Grid key={el.title} item sm={6} md={3}>
        <CustomizedDialog title={el.title} date={el.date} content={el.content} author={el.author} />
      </Grid>
    ))}
    </Grid>;

}


export default connect(
    mapStateToProps,
  { getStories }
)(List);