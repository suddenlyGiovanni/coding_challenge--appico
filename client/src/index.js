// REACT
import React from 'react';
import { render } from 'react-dom';

// MISC
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

// COMPONENTS
import Root from './root';

// REDUX STORE
export const store = configureStore();

render(
    <Root store={store}/>,
    document.getElementById( 'root' )
);

registerServiceWorker();
