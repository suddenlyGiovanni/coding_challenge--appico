// REACT
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// REDUX
import { connect } from 'react-redux';

// MATERIAL-UI
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


const styles = theme => ( {
    card: {
        maxWidth: 345
    },
    media: {
        height: 200
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
            description,
            source,
            urlToImage,
            url
        } = this.props.article;
        return (
            <div>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={urlToImage}
                        img='img'
                    />

                    <CardContent>
                        <Typography type='headline' component='h2'>
                            {title}
                        </Typography>
                        <Typography component='p'>
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions>
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

                    </CardActions>
                </Card>
            </div>
        );
    }
}


/* REDUX */
const mapStateToProps = (state, ownProps) => ({
    article: state.news.items && state.news.items[ownProps.match.params.artId]
});
export default connect( mapStateToProps )( withStyles(styles)(ArticleDetails) );
