import React, {PropTypes} from 'react';
import {Router, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import DevTools from './DevTools';
import routes from '../routes';

const Root = ({store}) => (
    <Provider store={store}>
        <div>
            <DevTools/>
            <Router history={hashHistory} routes={routes}/>
        </div>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.shape({})
};

Root.defaultProps = {
    store: undefined
};

export default Root;
