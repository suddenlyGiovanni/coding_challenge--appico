import { combineReducers } from 'redux';
// IMPORT THE INDIVIDUAL REDUCERS:

import { news } from './news';
import { dates } from './dates';
import { sources } from './sources';

const rootReducer = combineReducers( {
    news,
    dates,
    sources
} );

export default rootReducer;
