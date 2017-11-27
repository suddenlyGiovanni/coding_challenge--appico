import { fetchNews } from '../utils/fetch';


export const LOAD_NEWS = 'LOAD_NEWS';
export const SET_DATES = 'SET_DATES';
export const SET_SOURCES = 'SET_SOURCES';



// ACTION CREATORS:

export const loadNews = news => ( { type: LOAD_NEWS, news } );
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export const setDates = dates => ( { type: SET_DATES, dates } );
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export const setSources = sources => ( { type: SET_SOURCES, sources } );
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
