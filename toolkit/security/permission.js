/* eslint  */
const debug = require('debug')('permission');
const every = require('lodash/every');
const includes = require('lodash/includes');
const castArray = require('lodash/castArray');

/**
 * Returns a middleware that checks the permission in the user's session
 * @param permissions
 * @returns (Function) A middleware that check the user's permission.
 */
module.exports = permissions =>
    (req, res, next) => {
        if (!permissions || every(castArray(permissions), permission => !includes(req.user.permissions, permission))) {
            debug('User has no permission');
            if (req.xhr) {
                // If ajax.
                return res.json(403, {message: 'You don\'t have permission to perform this action.'});
            }
            return res.redirect(global.app.config.auth.loginPage);
        }
        next();
    };
