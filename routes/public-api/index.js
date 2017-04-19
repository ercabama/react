const hash = global.app.security.hash;
const db = global.app.data;

module.exports = router => {
    router.post('/signIn', (req, res, next) => {
        if (!req.body.username || !req.body.password) {
            return res.status(400).json({message: 'Missing user or password!'});
        }
        const info = req.body;
        db.IPN.select().from('IPN_USUARIOS').whereRaw('username = ? and enable = 1',
            [info.username]
        ).then(user => {
            if (user[0].PASSWORD === hash(info.password)) {
                req.session.user = {_id: user[0].NAME, rol: user[0].ROL, user: info.username};
                return res.send({success: true});
            }
            return res.status(403).send({success: false});
        }).catch(() => next({err: 'User Invalid'}));
    });

    router.post('/updatePassword', (req, res, next) => {
        const session = req.session.user;
        db.IPN.select().from('IPN_USUARIOS').whereRaw('username = ? and enable = 1',
        [session.user]).then(data => {
            if (hash(req.body.oPass) === data[0].PASSWORD) {
                const nPass = hash(req.body.nPass);
                db.IPN('IPN_USUARIOS').where('USERNAME', '=', session.user)
                    .update({
                        PASSWORD: nPass,
                    });
                return res.send({success: true});
            }
            return res.status(403).send({success: false});
        });
    });

    router.post('/session', (req, res, next) => {
        if (req.session.user) {
            return res.send(req.session.user);
        }
    });

    router.get('/signOut', (req, res) => {
        console.log('esta');
        delete req.session.user;
        return res.redirect(global.app.config.auth.loginPage);
    });

    return router;
};
