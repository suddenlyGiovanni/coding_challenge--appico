// REACT
import React, { Component } from 'react';

// REDUX
import { store } from '../index';
// ACTIONS
import { setSources } from '../actions/news';

// COMPONENTS
import {
    FormLabel,
    FormControl,
    FormGroup,
    FormControlLabel } from 'material-ui/Form';

import Checkbox from 'material-ui/Checkbox';

class SourceSelector extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            all: true,
            theVerge: false,
            techcrunch: false,
            hackerNews: false
        };
    }

    componentDidUpdate() {
        let sources;
        this.state.all
            ? (sources = { theVerge: true, techcrunch: true, hackerNews: true })
            : (sources = this.state);
        delete sources.all;
        this.dispatchSources( sources );
    }

    handleChange( event, checked ) {
        const name = event.target.value;
        const nextState = { ...this.state,[ name ]: checked };
        let nextStateToSave;

        if ( name === 'all' ) {
            !this.state.all && ( nextStateToSave = {
                all: true,
                theVerge: false,
                techcrunch: false,
                hackerNews: false,
            } );
        } else {
            if ( !nextState.all && nextState.theVerge && nextState.techcrunch && nextState.hackerNews ) {
                nextStateToSave = {
                    all: true,
                    theVerge: false,
                    techcrunch: false,
                    hackerNews: false,
                };
            } else {
                nextStateToSave = {...nextState, all: false, };
            }
        }
        this.setState( nextStateToSave );
    }


    dispatchSources( sources ) {
        store.dispatch( setSources( sources ) );
    }

    render() {
        // console.log('render: ', this.state);
        return (
            <div>
                <FormControl component='fieldset'>
                    <FormLabel component='legend'>
                        Select Sources:
                    </FormLabel>
                    <FormGroup>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked = {this.state.all}
                                    onChange = {(event, checked ) => this.handleChange( event, checked )}
                                    value = 'all'/>
                            }
                            label='All'/>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked = {this.state.theVerge}
                                    onChange = {(event, checked ) => this.handleChange( event, checked )}
                                    value = 'theVerge'/>
                            }
                            label='the Verge'/>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked = {this.state.techcrunch}
                                    onChange = {(event, checked ) => this.handleChange( event, checked )}
                                    value = 'techcrunch'/>
                            }
                            label='TechCrunch'/>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked = {this.state.hackerNews}
                                    onChange = {(event, checked ) => this.handleChange( event, checked )}
                                    value = 'hackerNews'/>
                            }
                            label='Hacker News'/>

                    </FormGroup>
                </FormControl>
            </div>
        );
    }
}


export default SourceSelector;
