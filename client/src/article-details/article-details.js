// REACT
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// REDUX
import { connect } from 'react-redux';

// UTILS
import moment from 'moment';

// MATERIAL-UI
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

const styles = theme => ( {
    card: {
        // maxWidth: 345
    },
    media: {
    }
} );

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
                <Paper>
                    <Grid container direction='column' justify='flex-start' alignItems='stretch' spacing={0}>

                        <Typography type='headline' component='h1'>
                            {title}
                        </Typography>
                        <Divider />

                        <Typography type='subheading' component='h2'>
                            {author}
                        </Typography>

                        <Typography type='subheading' component='h3'>
                            {publishedAt}
                        </Typography>

                        <img src={urlToImage} alt={title} />

                        <Typography component='p'>
                            {description}
                        </Typography>
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
                            Go to Article
                        </Button>
                    </Grid>
                </Paper>
            </div>
        );
    }
}


/* REDUX */
const mapStateToProps = (state, ownProps) => ({
    article: state.news.items && state.news.items[ownProps.match.params.artId]
});
export default connect( mapStateToProps )( withStyles(styles)(ArticleDetails) );
