/* global document*/
import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import Root from './containers/Root';
import configureStore from './store/';

require('./sass/app.scss');

const store = configureStore();

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root'),
    () => hashHistory.replace('/')
);
