import { SELECT_SOURCES } from '../actions';

export const sources = ( state = {
    theVerge: true,
    techcrunch: true,
    hackerNews: true
}, action ) => {

    switch ( action.type ) {

        case SELECT_SOURCES: {
            return { ...state, ...action.sources };
        }

        default:
            return state;
    }
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
