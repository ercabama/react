//const winston = require('winston');
const {Router} = require('express');
const {authenticate} = global.app.security;

module.exports = router => {

    router.get('/', authenticate(), (req, res) => res.render('index'));
    router.use('/public-api', require('./public-api')(Router()));
    router.get('/signIn', (req, res) => res.render('signIn'));

    router.get('/signOut', (req, res) => {
        delete req.session.user;
        res.redirect(global.app.config.auth.loginPage);
    });

    //winston.info('Loading public-api...', module);
    router.use('/api', require('./api')(Router().use(authenticate())));

};
