// REACT
import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';
// ACTIONS
import { fetchNewsRequest } from '../actions';

// UTILS
import Moment from 'react-moment';
import moment from 'moment';
import { parseQueryParams } from '../utils/news-api-helper';

// COMPONENTS
import DayPickerRangeControllerWrapper from '../date-picker/day-picker-range-controller-wrapper';
import SourceSelector from '../source-selector/source-selector';

class ArticleListContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            todayDate: moment(),
        };
    }


    componentWillReceiveProps(nextProps){
        // console.log(
        //     '\nArticleListContainer - componentWillReceiveProps - nextProps: ',
        //     nextProps
        // );
        if ( ( nextProps.dates !== this.props.dates ) || ( nextProps.sources !== this.props.sources ) ) {
            const parsedQueryParams = parseQueryParams(nextProps.dates, nextProps.sources);
            this.props.fetchNewsRequest(parsedQueryParams);
        }
    }

    render(){
        // console.log(this.props);
        const { todayDate } = this.state;
        return (
            <div>
                <h1>ArticleListContainer</h1>
                <h2>News for  <Moment format='ddd, MMM DD' date={this.props.dates.endDate}/>
                </h2>
                <DayPickerRangeControllerWrapper
                    firstDayOfWeek={1}
                    numberOfMonths={1}
                    minimumNights={0}
                    showInputs={true}
                    autoFocusEndDate={true}
                    initialStartDate={todayDate}
                    initialEndDate={todayDate}
                />
                <SourceSelector />
            </div>
        );
    }
}

/* REDUX */
const mapStateToProps = state => ({
    news: state.news && state.news.data,
    dates: state.dates && state.dates,
    sources: state.sources && state.sources
});

const mapDispatchToProps = dispatch => ( {
    fetchNewsRequest: params => dispatch( fetchNewsRequest( params ) )
} );

export default connect( mapStateToProps, mapDispatchToProps )( ArticleListContainer );
