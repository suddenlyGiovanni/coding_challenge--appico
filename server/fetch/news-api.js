const axios = require('axios');
const newsApiKey = process.env.NEWS_API_KEY || require('../../config/secrets.json').newsApiKey;

//  default config that will be applied to every request
axios.defaults.headers.common['Authorization'] = `Bearer ${newsApiKey}`;

// FETCH ERROR HANDLING:
const handleErrors = error => {
        const err = new Error('News API Error:');
    if ( error.response ) {
        const { data, status, headers } = error.response;
        const errorMessage = 'Fetch ERROR: \nThe request was made and the server RESPONDED with a status code that falls out of the range of 2xx'
        // console.log( errorMessage );
        // console.log( 'Error Data: \n', data );
        // console.log( 'Error Status: ', status );
        // console.log( 'Error Headers: \n', headers );
        err.message = err.message + '\n' + errorMessage + '\n' + data.message;
        err.status = status;
    } else if ( error.request ) {
        const errorMessage = 'Fetch ERROR: \nThe request was made but NO RESPONSE WAS RECEIVED';
        // console.log( errorMessage );
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log( 'Error Request: \n', error.request );
        err.message = err.message + '\n' + errorMessage;
        err.status = 400;
    } else {
        const errorMessage = 'Fetch ERROR: \nSomething happened in setting up the request that triggered an Error';
        // console.log( errorMessage );
        // console.log( 'Error message: ', error.message );
        err.message = err.message + '\n' + errorMessage;
        err.status = 400;
    }
    // console.log( 'Error Config: \n', error.config );
    throw err;
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


module.exports.fetchNews = async url => {
    try {
        const response = await axios(url);
        if (response.status !== 200) {
            throw Error(response)
        }
        return response.data.articles;
    } catch (err) {
        handleErrors(err)
    }
};
