import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { fetchNews } from '../utils/fetch';

import ArticleListContainer from '../article-list/article-list-container';
import ArticleDetails from '../article-details/article-details';

// import './app.css';

export default class App extends Component {

    componentDidMount() {
        fetchNews();
    }

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
