import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types";

const initialState = {
    articles: [],
    update_id: null
  };
  
function rootReducer(state = initialState, action) {
  
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
        articles: state.articles.concat(action.payload),
        update_id: action.payload.id 
    });
  }
  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  

  return state;
};

export default rootReducer;