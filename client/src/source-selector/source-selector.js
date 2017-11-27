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
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (this.state.all) {
            this.dispatchSources( { theVerge: true, techcrunch: true, hackerNews: true } );
        }
    }

    componentDidUpdate( prevProps, prevState ) {
        // console.log('SourceSelector - componentDidUpdate: \nprevState: ', prevState, '\nnewState: ', this.state);
        // console.log('SourceSelector - componentDidUpdate: \nprevState === newState: ', prevState === this.state);
        if (prevState !== this.state) {
            let sources;
            if (this.state.all) {
                sources = { theVerge: true, techcrunch: true, hackerNews: true };
            } else {
                sources = this.state;
                delete sources.all;
            }
            this.dispatchSources( sources );
        }
    }

    handleChange(event) {
        const value = event.target.checked;
        const name = event.target.name;
        const stateToSave = this.handleStateLogicChange(name, value);
        // console.log('\nfn: handleChange - stateToSave: ', stateToSave);
        this.setState( stateToSave );
    }

    handleStateLogicChange( name, value ){
        const newSource = { [ name ]: value };
        const prevState = this.state;
        const nextState = { ...prevState, ...newSource };
        // console.log('\nfn: handleStateLogicChange',
        //     '\nnewSource: ', newSource ,
        //     '\nprevState: ', prevState,
        //     '\nnextState: ', nextState
        // );
        let newState;
        if ( name === 'all' ) {
            console.log('user selected: ', name);
            if (!prevState.all) {
                newState = { all: true, theVerge: false, techcrunch: false, hackerNews: false };
            }
        }
        if (name !== 'all') {
            console.log('user selected: ', name);
            if ( nextState.theVerge && nextState.techcrunch && nextState.hackerNews ) {
                newState = { all: true, theVerge: false, techcrunch: false, hackerNews: false };
            } else if ( !nextState.theVerge && !nextState.techcrunch && !nextState.hackerNews ) {
                newState = { ...nextState, all: true };
            } else {
                newState = { ...nextState, all: false };
            }
        }
        return newState;
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
                                    onChange = {this.handleChange}
                                    name = 'all'/>
                            }
                            label='All'/>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked = {this.state.theVerge}
                                    onChange = {this.handleChange}
                                    name = 'theVerge'/>
                            }
                            label='the Verge'/>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked = {this.state.techcrunch}
                                    onChange = {this.handleChange}
                                    name = 'techcrunch'/>
                            }
                            label='TechCrunch'/>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked = {this.state.hackerNews}
                                    onChange = {this.handleChange}
                                    name = 'hackerNews'/>
                            }
                            label='Hacker News'/>

                    </FormGroup>
                </FormControl>
            </div>
        );
    }
}


export default SourceSelector;
