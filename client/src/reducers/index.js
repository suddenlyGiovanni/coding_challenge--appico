import { combineReducers } from 'redux';
// IMPORT THE INDIVIDUAL REDUCERS:

import { news, dates } from './news';

export default combineReducers( { news, dates } );
