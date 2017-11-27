import { REQUEST_NEWS, RECEIVE_NEWS, INVALIDATE_NEWS } from '../actions';


export const news = ( state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action ) => {

    switch ( action.type ) {

        case INVALIDATE_NEWS: {
            return Object.assign( {}, state, { didInvalidate: true } );
        }

        case REQUEST_NEWS: {
            return Object.assign( {}, state, {
                isFetching: true,
                didInvalidate: false,
            } );
        }

        case RECEIVE_NEWS: {
            return Object.assign( {}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.news
            } );
        }

        default:
            return state;
    }
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
