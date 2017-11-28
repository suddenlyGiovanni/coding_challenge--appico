// REACT
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// COMPONENTS
import ArticleListContainer from '../article-list/article-list-container';
import ArticleDetails from '../article-details/article-details';

export default class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route
                            exact={true}
                            path='/'
                            component={ArticleListContainer}/>

                        <Route
                            path='/details/:artId'
                            component={ArticleDetails}/>
                    </div>
                </Router>
            </div>
        );
    }
}
