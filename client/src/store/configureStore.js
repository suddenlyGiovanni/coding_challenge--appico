import { createStore, applyMiddleware } from 'redux';

// IMPORT MIDDLEWARE
import thunk from 'redux-thunk'
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';

// IMPORT THE COMBINE REDUCERS
import rootReducer from '../reducers';

// IMPORT REDUX DEVTOOLS
import { composeWithDevTools } from 'redux-devtools-extension';
const middlewares = [ thunk, reduxPromise, logger ];


const configureStore = ( initialState ) => (
    createStore(
        rootReducer,
        initialState,
        composeWithDevTools( applyMiddleware( ...middlewares ) ) )
);

export default configureStore;
