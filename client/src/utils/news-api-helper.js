import moment from 'moment';


export const parseQueryParams = ( dates, sources ) => {
    const parsedSources = parseSources(sources);
    console.log('news-api-helper - parsedSources: ', parsedSources);
    return;
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

const parseDates = dates => {
    return;
};
