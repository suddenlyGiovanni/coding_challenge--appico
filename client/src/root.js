// REACT
import React from 'react';
import PropTypes from 'prop-types';
// REDUX
import { Provider } from 'react-redux';
// REACT-ROUTER
import { BrowserRouter as Router, Route, } from 'react-router-dom';
// COMPONENTS
import App from './app/App';

const Root = ( { store } ) => (
    <Provider store={store}>
        <Router>
            <Route path='/' component={App}/>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
