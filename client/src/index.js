// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, } from 'react-router';

// REDUX
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// MISC
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// COMPONENTS
import App form './app/App';

// REDUX STORE
export const store = configureStore();


const router = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}/>
        </Router>
    </Provider>
);

ReactDOM.render( router, document.getElementById( 'root' ) );
registerServiceWorker();
