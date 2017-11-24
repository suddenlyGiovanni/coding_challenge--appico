// ROUTE: --> /api/

const router = require( 'express' ).Router();
const { fetchNews } = require('../fetch/news-api');

// ROOT OF THE API _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
router.get( '/', ( req, res ) => {
    res.json( { message: 'api route working fine' } );
} );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _


router.get('/news', async (req, res, next) => {
    try {
        const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news';
        const data = await fetchNews(url);
        res.json({data});
    } catch (err) {
        next(err)
    }
} );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _















/* MODULE EXPORTS */
module.exports = router;
