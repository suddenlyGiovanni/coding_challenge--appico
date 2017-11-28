// ROUTE: --> /api/

const router = require( 'express' ).Router();
const { fetchNews } = require('../fetch/news-api');

// ROOT OF THE API _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
router.get( '/', ( req, res ) => {
    res.json( { message: 'api route working fine' } );
} );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _


router.post('/news', async (req, res, next) => {
    try {
        const queryParams = req.body.queryParams;
        console.log( '\nqueryParams: ', JSON.stringify(queryParams, 4, '\t') );
        const url = 'https://newsapi.org/v2/everything';
        const data = await fetchNews(url, queryParams);
        console.log( '\napi.js - "/api/news" - res.data: ', JSON.stringify(
            data, 4, '\t') );
        res.json({data});
    } catch (err) {
        next(err)
    }
} );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _















/* MODULE EXPORTS */
module.exports = router;
