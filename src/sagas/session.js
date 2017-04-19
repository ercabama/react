import {call, put} from 'redux-saga/effects';
import {isEmpty} from 'lodash';
import {
    receiveLogin,
    receiveInvalidLogin,
    handleErrorLogin,
    receiveLogout,
    receiveSession,
    receivePassChg,
    controlForms
} from '../actions/sessionActions';
import SessionService from '../services/session';
import StorageService from '../services/storage';
import ControlServices from '../services/control';

export function* login(action) {
    try {
        const user = yield call(SessionService.login, action.username, action.password);
        if (!isEmpty(user)) {
            if (action.clear) {
                yield call(StorageService.clear);
            }
            yield put(receiveLogin(user));
        } else {
            yield put(receiveInvalidLogin());
        }
    } catch (e) {
        yield put(handleErrorLogin(e));
    }
}

export function* logout(action) {
    yield call(SessionService.logout, action);
    yield put(receiveLogout());
}

export function* session() {
    const user = yield call(SessionService.getCurrent);
    yield put(receiveSession(user));
}

export function* chgPass(action) {
    const info = yield call(SessionService.chgPass, action.nPass, action.oPass, action.user);
    yield put(receivePassChg(info));
}
