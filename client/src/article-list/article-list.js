// REACT
import React from 'react';

// MATERIAL-UI
import Paper from 'material-ui/Paper';
import { LinearProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';

// COMPONENTS
import ArticlePreview from './article-preview';

const ArticleList = ( { news, isFetching } ) => {
    if ( !news || isFetching || news.length === 0 ) {
        return null;
    }
    console.log( 'ArticleList - news: ', news );

    const articleList = news.map( ( article, i ) => {
        const {title, author, description, source, urlToImage} = article;
        return (
            <Grid item xs={12}>
                <ArticlePreview
                    key={i}
                    artId={i}
                    title={title}
                    author={author}
                    description={description}
                    source={source.name}
                    urlToImage={urlToImage}
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
                spacing={24}>
                {articleList}
            </Grid>
        </div>
    );

};

export default ArticleList;
