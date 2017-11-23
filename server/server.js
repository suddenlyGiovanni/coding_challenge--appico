const express = require( 'express' ),
    path = require( 'path' ),
    logger = require( 'morgan' ),
    bodyParser = require( 'body-parser' ),
    compression = require( 'compression' );




// EXPRESS
const app = express();

// MIDDLEWARES:

// set the public folder where client stuff lives
// Express only serves static assets in production
if ( process.env.NODE_ENV === 'production' ) {
    app.use( express.static( path.join( __dirname, '../client/build' ) ) );
}

// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

// MORGAN HTTP LOGGER
app.use( logger( 'dev' ) );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

// COMPRESSION GZIP response before sending them
app.use( compression() );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _


// BODY PARSER
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _


// ERROR HANDLER
app.use( function ( err, req, res, next ) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get( 'env' ) === 'development'? err : {};

    res.status( err.status || 500 );
    console.log( err );
    res.sendStatus( 500 );
} );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

// ROUTING _____________________________________________________________________
/* SERVE THE STATIC FILES - APP */

app.get( '/', ( req, res ) => {
    res.sendFile( path.resolve( __dirname, '../client/build', 'index.html' ) );
} );

/* SERVE THE API ROUTES */
app.use( '/api', require( './routes/api' ) );


module.exports = app;
