const fs = require('fs'),
    winston = require('winston'),
    express = require('express'),
    _ = require('lodash');

function loadModules(folder, router) {
    // Loading modules dynamically
    _(folder).thru(fs.readdirSync)
        .reject(file => _.includes(file, '.'))
        .forEach(module => {
            winston.info('Loading %s api...', module);
            router.use(`/${module}`, require(`./${module}`)(express.Router()));
        });
}

module.exports = router => {
    loadModules('./routes/api', router);
    return router;
};
