export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGIN_INVALID = 'LOGIN_INVALID';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export function requestLogin(username, password, clear) {
    return {type: LOGIN_REQUESTED, username, password, clear};
}

export function receiveLogin(user) {
    return {type: LOGIN_SUCCEEDED, user};
}

export function receiveInvalidLogin() {
    return {type: LOGIN_INVALID};
}

export function handleErrorLogin(e) {
    return {type: LOGIN_FAILED, message: e.message};
}

export const LOGOUT_REQUESTED = 'LOGOUT_REQUESTED';
export const LOGOUT_RECEIVED = 'LOGOUT_RECEIVED';

export function requestLogout() {
    return {type: LOGOUT_REQUESTED};
}

export function receiveLogout() {
    return {type: LOGOUT_RECEIVED};
}

export const SESSION_REQUESTED = 'SESSION_REQUESTED';
export const SESSION_RECEIVED = 'SESSION_RECEIVED';

export function requestSession() {
    return {type: SESSION_REQUESTED};
}

export function receiveSession(user) {
    return {type: SESSION_RECEIVED, user};
}

export const PASS_CHANGE_REQUESTED = 'PASS_CHANGE_REQUESTED';
export const PASS_CHANGE_RECEIVED = 'PASS_CHANGE_RECEIVED';

export function requestPassChg(oPass, nPass, user) {
    return {type: PASS_CHANGE_REQUESTED, oPass, nPass, user};
}

export function receivePassChg(info) {
    return {type: PASS_CHANGE_RECEIVED, info};
}

/**acciones FORMS


export const SHOW_FORMS = 'SHOW_FORMS';
export const CONTROL_FORMS = 'CONTROL_FORMS'

export const showForms = (info) => ({
    type: SHOW_FORMS,
    info    
})

export const controlForms = active => ({
    type: CONTROL_FORMS,
    active
});

**/

