// REACT
import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';
// ACTIONS
import { fetchNewsRequest } from '../actions';

// UTILS
import moment from 'moment';
import { parseQueryParams } from '../utils/news-api-helper';

// MATERIAL-UI
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

// COMPONENTS
import DayPickerRangeControllerWrapper from '../date-picker/day-picker-range-controller-wrapper';
import SourceSelector from '../source-selector/source-selector';
import ArticleList from './article-list';


const styles = theme => ( {
    root: {
        flexGrow: 1,
        marginTop: 30
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
} );





class ArticleListContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            todayDate: moment(),
        };
    }

    componentDidMount(){
        const { dates, sources } = this.props;
        // console.log('\ndates: ', dates, '\nsources: ', sources);
        const parsedQueryParams = parseQueryParams( dates, sources );
        this.props.fetchNewsRequest(parsedQueryParams);
    }

    componentWillReceiveProps(nextProps){
        if ( ( nextProps.dates !== this.props.dates ) || ( nextProps.sources !== this.props.sources ) ) {
            const parsedQueryParams = parseQueryParams(nextProps.dates, nextProps.sources);
            this.props.fetchNewsRequest(parsedQueryParams);
        }
    }

    composeHeader({startDate, endDate}) {
        if (startDate && endDate) {
            const start = startDate.format('ddd, MMM Do');
            const end = endDate.format('ddd, MMM Do');
            if (start === end) {
                return `for ${start}`;
            } else {
                return `from ${start} to ${end}`;
            }
        }
        return null;
    }

    render(){
        // console.log(this.props);
        const { todayDate } = this.state;
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    {/* HEADING */}
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            News {this.composeHeader(this.props.dates)}
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={8}>
                        <DayPickerRangeControllerWrapper
                            firstDayOfWeek={1}
                            numberOfMonths={1}
                            minimumNights={0}
                            showInputs={false}
                            autoFocusEndDate={true}
                            initialStartDate={todayDate}
                            initialEndDate={todayDate}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <SourceSelector />
                    </Grid>
                    <Grid item xs={12}>
                        <ArticleList {...this.props}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

/* REDUX */
const mapStateToProps = state => ({
    news: state.news && state.news.items,
    isFetching: state.news && state.news.isFetching,
    dates: state.dates && state.dates,
    sources: state.sources && state.sources
});

const mapDispatchToProps = dispatch => ( {
    fetchNewsRequest: params => dispatch( fetchNewsRequest( params ) )
} );

export default connect( mapStateToProps, mapDispatchToProps )( withStyles(styles)(ArticleListContainer) );
