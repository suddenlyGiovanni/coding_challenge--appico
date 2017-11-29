// REACT
import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';
// ACTIONS
import { fetchNewsRequest } from '../actions';

// UTILS
import moment from 'moment';
import { parseQueryParams } from '../utils/news-api-helper';

// COMPONENTS
import DayPickerRangeControllerWrapper from '../date-picker/day-picker-range-controller-wrapper';
import SourceSelector from '../source-selector/source-selector';
import ArticleList from './article-list';

// CSS
import './article-list-container.css';



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
        const { todayDate } = this.state;
        return (
            <div className='container'>

                <header className='title-wrapper'>
                    <h1 className='title'>News {this.composeHeader(this.props.dates)}</h1>
                </header>

                <div className='cal-sel-container'>

                    <div className='cal-wrapper'>
                        <DayPickerRangeControllerWrapper
                            firstDayOfWeek={1}
                            numberOfMonths={1}
                            minimumNights={0}
                            showInputs={false}
                            autoFocusEndDate={true}
                            initialStartDate={todayDate}
                            initialEndDate={todayDate}
                        />
                    </div>

                    <div className='sel-wrapper'>
                        <SourceSelector />
                    </div>

                </div>

                <section  className='list-wrapper'>
                    <ArticleList {...this.props}/>
                </section>

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

export default connect( mapStateToProps, mapDispatchToProps )(ArticleListContainer);
