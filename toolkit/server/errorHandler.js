/*eslint no-unused-vars: ["off", { "argsIgnorePattern": "next" }]*/
let winston = require('winston');

module.exports = router => {
    router.use((error, req, res, next) => {
        let status = error.status || 500;
        let message = error.message || 'Unknown error';
        let info;
        if (status != 500) {
            info = error.data || {};
            info.message = message;
        } else {
            winston.error(error);
            info = {message};
            if (router.get('env') === 'development') {
                info.error = error;
            }
        }
        res.status(status).send(info);
    });

    return router;
};
