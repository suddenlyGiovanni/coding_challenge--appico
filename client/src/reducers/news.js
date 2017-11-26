import { LOAD_NEWS, SET_DATES, SET_SOURCES } from '../actions/news';

export const news = ( state = {}, action ) => {

    switch ( action.type ) {

        case LOAD_NEWS: {
            state = Object.assign({}, state, action.news);
            break;
        }

        default:
            return state;
    }

    return state;
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export const dates = ( state = {}, action ) => {

    switch ( action.type ) {

        case SET_DATES: {
            state = Object.assign({}, state, action.dates);
            break;
        }

        default:
            return state;
    }

    return state;
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export const sources = ( state = {}, action ) => {

    switch ( action.type ) {

        case SET_SOURCES: {
            state = Object.assign({}, state, action.sources);
            break;
        }

        default:
            return state;
    }

    return state;
};
