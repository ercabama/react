const _ = require('lodash/sampleSize');

module.exports.generate = length => _.sampleSize('abcdefghijklmnopqrstufwxyzABCDEFGHIJKLMNOPQRSTUFWXYZ1234567890', length || 12).join('');
