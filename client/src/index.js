// REACT
import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory, } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

// REDUX
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// MISC
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// COMPONENTS
import App from './app/App';

// REDUX STORE
export const store = configureStore();

const router = (
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
);

ReactDOM.render( router, document.getElementById( 'root' ) );
registerServiceWorker();
