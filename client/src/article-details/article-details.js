// REACT
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// REDUX
import { connect } from 'react-redux';

// UTILS
import moment from 'moment';
import './article-detail.css';

// MATERIAL-UI
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';



class ArticleDetails extends Component {

    render(){
        if (!this.props.article) {
            return null;
        }
        const { classes } = this.props;
        const {
            title,
            author,
            publishedAt,
            description,
            source,
            urlToImage,
            url
        } = this.props.article;

        return (
            <div>
                <Grid container direction='column' justify='flex-start' alignItems='stretch' spacing={0}>

                    {/* HEADER */}
                    <header className='header'>
                        <h1 className='title'>{title}</h1>
                        <hr className='divider'/>
                        <h2 className='author'>by {author}</h2>
                        <h3 className='publishedAt'>{moment(publishedAt).format('ddd, MMM Do')}</h3>
                    </header>

                    {/* IMAGE */}
                    <div className='img-wrapper'>
                        <img className='img' src={urlToImage} alt={title} />
                    </div>


                    {/* DESCRIPTION */}
                    <div className='descr-wrapper'>
                        <p className='descr'>{description}</p>
                    </div>

                    {/* NAVIGATION */}
                    <div className='action-wrapper'>
                        <Button
                            dense
                            color='accent'
                            onClick={()=>this.props.history.go(-1)}>
                            Back
                        </Button>
                        <Button
                            dense
                            color='primary'
                            href={url}
                            target='_blank'>
                            Read More @{source.name}
                        </Button>
                    </div>
                </Grid>
            </div>
        );
    }
}


/* REDUX */
const mapStateToProps = (state, ownProps) => ({
    article: state.news.items && state.news.items[ownProps.match.params.artId]
});
export default connect( mapStateToProps )(ArticleDetails);
