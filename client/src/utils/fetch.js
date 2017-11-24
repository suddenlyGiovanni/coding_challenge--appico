import axios from 'axios';
import { store } from '../index.js';
import { loadNews } from '../actions/news';

// FETCH ERROR HANDLING:
const handleErrors = error => {
    if ( error.response ) {
        const { data, status, headers, } = error.response;
        console.log( 'Fetch ERROR: \nThe request was made and the server responded with a status code that falls out of the range of 2xx' );
        console.log( 'Error Data: \n', data );
        console.log( 'Error Status: ', status );
        console.log( 'Error Headers: \n', headers );
    } else if ( error.request ) {
        console.log( 'Fetch ERROR: \nThe request was made but no response was received' );
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log( 'Error Request: \n', error.request );
    } else {
        console.log( 'Fetch ERROR: \nSomething happened in setting up the request that triggered an Error' );
        console.log( 'Error message: ', error.message );
    }
    console.log( 'Error Config: \n', error.config );
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export const fetchNews = () => {
    return axios.get( '/api/news' )
        .then( res => store.dispatch( loadNews( res.data ) ) )
        .catch( err => handleErrors( err ) );
};
