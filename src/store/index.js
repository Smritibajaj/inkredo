import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import literals from '../reducers/lang.reducer';
import blogReducer from '../reducers/blog.reducer';


const rootReducer = combineReducers({
  literals,blogReducer
});


export default createStore(rootReducer,applyMiddleware(thunk));  