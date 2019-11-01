import React from "react";
import { connect } from "react-redux";
import ListItem from './ListItem';
import Grid from '@material-ui/core/Grid';

const mapStateToProps = state => {
    return { articles: state.articles }
}

const ConnectedList = ({articles}) => {
  console.log(articles)
  return <Grid container spacing={3}>
    {articles.map(el => (
      <>
        <Grid item sm={6} md={3} key={el.title}>
          <ListItem title={el.title} date={el.date} content={el.content} />
        </Grid>
      </>
    ))}
    </Grid>;
}

// List is the result of connecting the stateless component ConnectedList with the Redux store.
const List = connect(mapStateToProps)(ConnectedList);


export default List;