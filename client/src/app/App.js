// REACT
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// REDUX
// import { store } from '../index';
// ACTIONS
// import { fetchNewsRequest } from '../actions';

// COMPONENTS
import ArticleListContainer from '../article-list/article-list-container';
import ArticleDetails from '../article-details/article-details';

// UTILS
// import { parseQueryParams } from '../utils/news-api-helper';

// import './app.css';

export default class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <ul>
                            <li><Link to='/'>List</Link></li>
                            <li><Link to='/details'>Details</Link></li>
                        </ul>

                        <hr/>

                        <Route
                            exact={true}
                            path='/'
                            component={ArticleListContainer}/>

                        <Route
                            path='/details'
                            component={ArticleDetails}/>
                    </div>
                </Router>
            </div>
        );
    }
}
