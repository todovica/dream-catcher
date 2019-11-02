import config from 'config';
import { authHeader } from '../helpers/auth-header';

import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types";

export function addArticle(payload) {
  // here we need to contact server to add new article to database
    return { type: ADD_ARTICLE, payload }
  };

  

export function getStories() {
  const requestOptions = {
      method: 'GET',
      headers: authHeader()
  };

  return function(dispatch) {
  return fetch("http://localhost:4000/users/getStories")
    .then(response => response.json())
    .then(json => {
      dispatch({ type: DATA_LOADED, payload: json });
    });
  }
}