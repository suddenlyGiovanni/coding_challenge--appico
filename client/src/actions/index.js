import { fetchNews } from '../utils/fetch';

// NEWS ACTIONS:
export const INVALIDATE_NEWS = 'INVALIDATE_NEWS';
export const REQUEST_NEWS = 'REQUEST_NEWS';
export const RECEIVE_NEWS = 'RECEIVE_NEWS';

// news api fetching actions:
export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// DATE ACTIONS:
export const SELECT_DATES = 'SELECT_DATES';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// SOURCES ACTIONS:
export const SELECT_SOURCES = 'SELECT_SOURCES';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// DATES ACTIONS CREATORS
export const selectDates = dates => ( { type: SELECT_DATES, dates } );
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// SOURCES ACTIONS CREATORS
export const selectSources = sources => ( { type: SELECT_SOURCES, sources } );
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// NEWS ACTIONS CREATORS
export const invalidateNews = () => ( { type: INVALIDATE_NEWS } );


export const requestNews = () => ( { type: REQUEST_NEWS } );


export const receiveNews = news => ( { type: RECEIVE_NEWS, news } );




// REDUX-THUNK ACTION CREATOR
export const fetchNewsRequest = queryParams => {
    console.log('REDUX-THUNK fn: fetchNewsRequest');
    return dispatch => {
        console.log('REDUX-THUNK fn: fetchNewsRequest - inside dispatch()');
        dispatch(requestNews());
        return fetchNews(queryParams)
            .then(response => {
                console.log('REDUX-THUNK fn: fetchNewsRequest - response', response);
                dispatch(receiveNews(response));
            });
    };
};




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
