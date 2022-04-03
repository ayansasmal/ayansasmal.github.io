import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import {resumeReducer} from './reducers/resumeReducer';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {HashRouter} from 'react-router-dom';
import ReactDOMClient from 'react-dom/client';

const store = createStore(resumeReducer, applyMiddleware(thunk));

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(<React.StrictMode>
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>
</React.StrictMode>)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
