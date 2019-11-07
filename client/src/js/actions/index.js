import config from 'config';
import { authHeader } from '../helpers/auth-header';

import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types";

export function addArticle(payload) {
  let title = payload.title;
  let date = payload.date;
  let content = payload.content;
  let email = payload.email;
  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, date, content, email })
};

  return function(dispatch) {
    return fetch(`https://test-server-express-2.herokuapp.com/email/addArticle`, requestOptions)
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
  return fetch("https://test-server-express-2.herokuapp.com/email/getStories")
    .then(response => response.json())
    .then(json => {
      dispatch({ type: DATA_LOADED, payload: json });
    });
  }
}


export function confirm(payload) {
  let title = payload.title;
  let date = payload.date;
  let content = payload.content;
  let email = payload.email;
  
  console.log(" confirm(payload)");
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, date, content, email })
};

  return function(dispatch) {
    return fetch(`https://test-server-express-2.herokuapp.com/email/confirm`, requestOptions)
      .then(response => response.json())
      .then(json => {
        console.log("updated")
        //dispatch({ type: ADD_ARTICLE, payload: json });
      });
    }
  };