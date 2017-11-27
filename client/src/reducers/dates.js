import { SELECT_DATES } from '../actions';
export const dates = ( state = {}, action ) => {

    switch ( action.type ) {

        case SELECT_DATES: {
            return { ...state, ...action.dates };
        }

        default:
            return state;
    }
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
