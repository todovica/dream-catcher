import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { articles: state.articles }
}

const ConnectedList = ({articles}) => {
  console.log(articles)
  return <ul>
    {articles.map(el => (
      <li key={el.title}>{el.title}</li>
    ))}
  </ul>;
}

// List is the result of connecting the stateless component ConnectedList with the Redux store.
const List = connect(mapStateToProps)(ConnectedList);


export default List;