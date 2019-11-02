import { ADD_ARTICLE } from "../constants/action-types";

/*
function exampleMiddleware({ getState, dispatch }) {
  return function(next){
    return function(action){
      // do your stuff
      return next(action);
    }
  }
}
*/

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );
        if (foundWord.length) {
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }
      // always return next(action) in your middleware
      // if not the application will stop, and no other action will reach the reducer.
      return next(action);
    };
  };
}