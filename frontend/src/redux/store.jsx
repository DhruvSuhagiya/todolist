import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import dataReducer from './reducer';
const rootReducer = combineReducers({
    dataReducer
})
const store = createStore(rootReducer ,composeWithDevTools(applyMiddleware(thunk)));

export default store;