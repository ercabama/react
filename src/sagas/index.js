import {takeLatest} from 'redux-saga/effects';
import {
    LOGIN_REQUESTED,
    LOGOUT_REQUESTED,
    SESSION_REQUESTED,
    PASS_CHANGE_REQUESTED    
} from '../actions/sessionActions';

import {login, logout, session, chgPass, visibleForms} from './session';

export default function* root() {
    yield [
        takeLatest(LOGIN_REQUESTED, login),
        takeLatest(LOGOUT_REQUESTED, logout),
        takeLatest(SESSION_REQUESTED, session),
        takeLatest(PASS_CHANGE_REQUESTED, chgPass)
        
    ];
}
