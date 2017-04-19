let _ = require('lodash');

let validation = module.exports;
validation.validate = {};

/**
 * Validates if the object has defined the required values.
 * @param obj A object to tested.
 * @param fields A list of required fields.
 * @returns {Array} Returns the list of required missing fields.
 */
validation.validate.required = (obj, fields) => _.filter(fields, fieldName => _.isNil(_.get(obj, fieldName)));

/**
 * Validates if the given value is a valid email address.
 * @param email A value to test.
 * @returns {boolean} Returns true when the value is a valid email address, otherwise false.
 */
validation.validate.email = email => new RegExp('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$').test(email);

validation.validate.password = function (pass) {
    if (pass.length < 6) {
        return 'Password must be 6 characters long.';
    }

    if (!/[A-Z]/.test(pass) && !/[a-z]/.test(pass)) {
        return 'Password must have at least one letter.';
    }

    if (!/\d/.test(pass)) {
        return 'Password must have at least one number.';
    }
};

/**
 * Validates if the given value is a valid object id.
 * @param objectId A value to test.
 * @returns {boolean} true when the value is a valid object id, otherwise false.
 */
validation.validate.objectId = objectId => new RegExp('^[0-9a-fA-F]{24}$').test(objectId);
