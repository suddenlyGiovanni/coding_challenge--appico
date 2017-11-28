// REACT
import React from 'react';

// MATERIAL-UI
import { LinearProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';

// COMPONENTS
import ArticlePreview from './article-preview';

const ArticleList = ( { news, isFetching, location, history  } ) => {
    if ( !news || news.length === 0 ) {
        return null;
    }
    
    const articleList = news.map( ( article, i ) => {
        const {title, author, description, source, urlToImage} = article;
        return (
            <Grid key={i} item xs={12}>
                <ArticlePreview
                    key={i}
                    artId={i}
                    title={title}
                    author={author}
                    description={description}
                    source={source.name}
                    urlToImage={urlToImage}
                    location={location}
                    history={history}
                />
            </Grid>
        );
    } );

    return (
        <div>
            <Grid
                container
                direction='column'
                justify='flex-start'
                // alignItems='stretch'
                spacing={8}>
                { isFetching && <LinearProgress /> }
                { articleList }
            </Grid>
        </div>
    );

};

export default ArticleList;
