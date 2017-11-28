/* eslint-disable react/no-unused-prop-types */

// REACT
import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { store } from '../index';
// ACTIONS
import { selectDates } from '../actions';

// COMPONENTS
import Grid from 'material-ui/Grid';


// COMPONENTS: REACT-DATES
import { DayPickerRangeController } from 'react-dates';
import { forbidExtraProps } from 'airbnb-prop-types';
// INITIALIZE
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
// SETTINGS
import ScrollableOrientationShape from './shapes/ScrollableOrientationShape';
import { START_DATE, END_DATE, HORIZONTAL_ORIENTATION } from './constants/constants';
import isInclusivelyBeforeDay from './utils/isInclusivelyBeforeDay';
// import isInclusivelyAfterDay from './utils/isInclusivelyAfterDay';

// UTILS
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import omit from 'lodash/omit';



const propTypes = forbidExtraProps( {
    // example props for the demo
    autoFocusEndDate: PropTypes.bool,
    showInputs: PropTypes.bool,
    initialStartDate: momentPropTypes.momentObj,
    initialEndDate: momentPropTypes.momentObj,

    keepOpenOnDateSelect: PropTypes.bool,
    minimumNights: PropTypes.number,
    isOutsideRange: PropTypes.func,
    isDayBlocked: PropTypes.func,
    isDayHighlighted: PropTypes.func,

    // DayPicker props
    enableOutsideDays: PropTypes.bool,
    numberOfMonths: PropTypes.number,
    orientation: ScrollableOrientationShape,
    withPortal: PropTypes.bool,
    initialVisibleMonth: PropTypes.func,
    renderCalendarInfo: PropTypes.func,
    firstDayOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),

    navPrev: PropTypes.node,
    navNext: PropTypes.node,

    onPrevMonthClick: PropTypes.func,
    onNextMonthClick: PropTypes.func,
    onOutsideClick: PropTypes.func,
    renderDay: PropTypes.func,

    // i18n
    monthFormat: PropTypes.string,

    isRTL: PropTypes.bool

} );

const defaultProps = {
    // example props for the demo
    autoFocusEndDate: false,
    initialStartDate: null,
    initialEndDate: null,

    // day presentation and interaction related props
    renderDay: null,
    minimumNights: 1,
    isDayBlocked: () => false,
    isOutsideRange: day => !isInclusivelyBeforeDay( day, moment() ),
    isDayHighlighted: () => false,
    enableOutsideDays: false,

    // calendar presentation and interaction related props
    orientation: HORIZONTAL_ORIENTATION,
    withPortal: false,
    initialVisibleMonth: null,
    numberOfMonths: 2,
    onOutsideClick() {},
    keepOpenOnDateSelect: false,
    renderCalendarInfo: null,
    isRTL: false,

    // navigation related props
    navPrev: null,
    navNext: null,
    onPrevMonthClick() {},
    onNextMonthClick() {},

    // internationalization
    monthFormat: 'MMMM YYYY'
};

class DayPickerRangeControllerWrapper extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            focusedInput: props.autoFocusEndDate
                ? END_DATE
                : START_DATE,
            startDate: props.initialStartDate,
            endDate: props.initialEndDate
        };

        this.onDatesChange = this.onDatesChange.bind( this );
        this.onFocusChange = this.onFocusChange.bind( this );
        this.dispatchDates = this.dispatchDates.bind( this );
    }

    componentDidMount(){
        const { startDate, endDate } = this.state;
        // console.log('inside component did mount', startDate, endDate);
        this.dispatchDates( { startDate, endDate, } );
    }

    onDatesChange( { startDate, endDate, } ) {
        this.setState( { startDate, endDate, } );
        if ( startDate &&  endDate ) {
            this.dispatchDates( { startDate, endDate, } );
        }
    }

    onFocusChange( focusedInput ) {
        this.setState( {
            // Force the focusedInput to always be truthy so that dates are always selectable
            focusedInput: !focusedInput
                ? START_DATE
                : focusedInput
        } );
    }

    dispatchDates(selectedDates){
        store.dispatch(selectDates(selectedDates));
    }

    render() {
        const { showInputs } = this.props;
        const { focusedInput, startDate, endDate, } = this.state;

        const props = omit( this.props, [ 'autoFocus', 'autoFocusEndDate', 'initialStartDate', 'initialEndDate', 'showInputs' ] );

        const startDateString = startDate && startDate.format( 'YYYY-MM-DD' );
        const endDateString = endDate && endDate.format( 'YYYY-MM-DD' );

        return (
            <div>
                <Grid container>

                    {
                        showInputs &&
                        <div style={{ marginBottom: 16}}>
                            <input type="text" name="start date" value={startDateString || ''} readOnly="readOnly"/>
                            <input type="text" name="end date" value={endDateString || ''} readOnly="readOnly"/>
                        </div>
                    }

                    <DayPickerRangeController {...props} onDatesChange={this.onDatesChange} onFocusChange={this.onFocusChange} focusedInput={focusedInput} startDate={startDate} endDate={endDate}/>
                </Grid>
            </div>
        );
    }
}

DayPickerRangeControllerWrapper.propTypes = propTypes;
DayPickerRangeControllerWrapper.defaultProps = defaultProps;

export default DayPickerRangeControllerWrapper;
