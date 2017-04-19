import {
    LOGIN_REQUESTED,
    LOGIN_SUCCEEDED,
    LOGIN_INVALID,
    LOGOUT_RECEIVED,
    SESSION_RECEIVED,
    LAST_CREDENTIALS_RECEIVED,
    PASS_CHANGE_RECEIVED

} from '../actions/sessionActions';

export default function ping(state = {}, action) {
    switch (action.type) {
        case LOGIN_REQUESTED:
            return Object.assign({}, state, {isLogging: true, invalidLogin: false});
        case LOGIN_INVALID:
            return Object.assign({}, state, {isLogging: false, invalidLogin: true});
        case LOGIN_SUCCEEDED:
            return Object.assign({}, state, {isLogging: false, user: action.user});
        case SESSION_RECEIVED:
            return Object.assign({}, state, {user: action.user});
        case LOGOUT_RECEIVED:
            return Object.assign({}, state, {user: null});
        case LAST_CREDENTIALS_RECEIVED:
            return Object.assign({}, state, {credentials: action.credentials});
        case PASS_CHANGE_RECEIVED:
            return Object.assign({}, state, {info: action.info});        
        default:
            return state;
    }
}

