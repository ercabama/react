const winston = require('winston');
const pkg = require('../package.json');

// Extensions
require('./extensions/errorExtensions');
global.BusinessError = require('./extensions/BusinessError');

global.app = {name: pkg.name, version: pkg.version, description: pkg.description};
global.app.config = require('../config.json');

global.app.data = require('./data');
global.app.log = require('./logging');
global.app.server = require('./server');
global.app.validation = require('./validation');
global.app.security = require('./security');

global.app.start = () => {
    winston.info('Starting application...');
    // Setting environment flag.
    //if (global.app.config.mode == 'prod') {
    process.env.NODE_ENV = global.app.config.mode;
    //}
    /*global.app.data.oracle.connect(global.app.config.connectionStrings.app).then(
        () => {
            global.app.model = require('../model');
            return global.app.server.start();
        }
    ).catch(
        err => winston.error('Error starting app: %s', err)
    );*/
    return global.app.server.start();
};

module.exports = global.app;
