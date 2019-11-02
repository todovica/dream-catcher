import config from 'config';
import { authHeader } from '../helpers/auth-header';

import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types";

export function addArticle(payload) {
  let title = payload.title;
  let date = payload.date;
  let content = payload.content;
  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, date, content })
};

  return function(dispatch) {
    return fetch(`http://localhost:4000/users/addArticle`, requestOptions)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: ADD_ARTICLE, payload: json });
      });
    }
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