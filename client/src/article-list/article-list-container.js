// REACT
import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';

// UTILS
import Moment from 'react-moment';
import moment from 'moment';

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

export default connect( mapStateToProps )( ArticleListContainer );
