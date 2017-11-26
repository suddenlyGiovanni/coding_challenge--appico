export const LOAD_NEWS = 'LOAD_NEWS';
export const SET_DATES = 'SET_DATES';


// ACTION CREATORS:

export const loadNews = news => ( { type: LOAD_NEWS, news } );
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export const setDates = dates => ( { type: SET_DATES, dates } );
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
