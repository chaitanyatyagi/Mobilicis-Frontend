import fetchProductReducer from "./reducer";
import { applyMiddleware, combineReducers } from "redux"
import { legacy_createStore } from 'redux';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    data: fetchProductReducer
})

const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export default store