import { LOAD_NEWS } from '../actions/news';

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
