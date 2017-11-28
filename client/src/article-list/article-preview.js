// REACT
import React from 'react';
import { Link } from 'react-router-dom'

// MATERIAL-UI
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent, CardActions} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';


const styles = theme => ( {
    card: {
        display: 'flex',
        flexDirection: 'row'
    },
    media: {
        width: 151,
        height: 151,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    }
} );


const ArticlePreview = ( {
    artId,
    title,
    author,
    description,
    source,
    urlToImage,
    classes,
    theme
} ) => {

    return (
        <div>
            <Card className={classes.card}>

                <CardMedia
                    className={classes.media}
                    image={urlToImage}
                    src='img'
                />

                <CardContent>
                    <Typography type='title' component='h2'>
                        {title}
                    </Typography>
                    <Typography type='subheading' component='h3'>
                        by {author}
                    </Typography>
                    <Typography component='p' noWrap>
                        {description}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button dense color='primary'>
                        <Link to={`/details/${artId}`}>Read More</Link>
                    </Button>
                </CardActions>
            </Card>
            {/* <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={urlToImage}
                    src='img'
                />
                <div className={classes.details}>

                    <CardHeader
                        title={title}
                        subheader={`by ${author}`}
                    />
                    <CardContent>
                        <Typography component='p'>
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button dense color="primary">
                            <Link to={`/details/${artId}`}>Read More</Link>
                        </Button>
                    </CardActions>
                </div>
            </Card> */}
        </div>
    );
};

export default withStyles(styles, { withTheme: true })(ArticlePreview);
