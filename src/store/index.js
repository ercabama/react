/* eslint global-require: "off" */
if (process.env.NODE_ENV === 'production') {
 //   module.exports = require('./configureStore.prod');
    module.exports = require('./configureStore.dev');
} else {
    module.exports = require('./configureStore.dev');
}
