// ROUTE: --> /api/

const router = require( 'express' ).Router();
const { fetchNews } = require('../fetch/news-api');

// ROOT OF THE API _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
router.get( '/', ( req, res ) => {
    res.json( { message: 'api route working fine' } );
} );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _



router.get( '/news', ( req, res ) => {
    fetchNews('https://newsapi.org/v2/top-headlines?sources=bbc-news')
        .then(data => res.json({data}));
} );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _



















/* MODULE EXPORTS */
module.exports = router;
