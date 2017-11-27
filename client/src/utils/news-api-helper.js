import moment from 'moment';

/*
SOURCES:
    A comma-seperated string of identifiers (maximum 20) for the news sources or
    blogs you want headlines from. Use the /sources endpoint to locate these
    programmatically or look at the sources index.
    es::: 'sources=the-next-web,the-verge'
*/

/*
FROM:
    A date and optional time for the oldest article allowed.
    This should be in ISO 8601 format (e.g. 2017-11-27 or 2017-11-27T19:36:03)
    Default: the oldest according to your plan.
TO:
    A date and optional time for the newest article allowed.
    This should be in ISO 8601 format (e.g. 2017-11-27 or 2017-11-27T19:36:03)
    Default: the newest according to your plan.
    es::: 'from=2017-11-26&to=2017-11-26'
*/

/*
SORTBY:
    The order to sort the articles in. Possible options:
    relevancy, popularity, publishedAt.
    relevancy = articles more closely related to q come first.
    popularity = articles from popular sources and publishers come first.
    publishedAt = newest articles come first.
    Default: publishedAt
*/



export const parseQueryParams = ( dates, sources ) => {
    let objToReturn = {};
    const parsedDates = parseDates(dates);
    objToReturn.from = parsedDates[0];
    objToReturn.to = parsedDates[1];
    const parsedSources = parseSources(sources);
    objToReturn.sources = parsedSources.join(',');
    objToReturn.sortBy = 'popularity';
    return objToReturn;
};


const parseDates = dates => {
    let datesArr = [];
    const start = dates.startDate && dates.startDate.format('YYYY-MM-DD');
    const end = dates.endDate && dates.endDate.format('YYYY-MM-DD');
    datesArr.push(start, end);
    return datesArr;
};

const parseSources = sources => {
    let sourcesArr = [];

    function parseSourcesName(str) {
        // console.log('\nnews-api-helpoer - fn. parseSourcesName - str:', str);
        return str
            .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
            .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);
    }

    for (const prop in sources) {
        if (sources.hasOwnProperty(prop)) {
            // console.log('\nnews-api-helpoer - fn. parseSources - props:', prop);
            if (sources[prop]) {
                sourcesArr.push(parseSourcesName(prop));
            }
        }
    }

    // console.log('\nnews-api-helpoer - fn. parseSources - sourcesArr:', sourcesArr);
    return sourcesArr;
};
