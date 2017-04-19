import React, {PropTypes} from 'react';
import {Router, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import routes from '../routes';

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.shape({})
};

export default Root;
