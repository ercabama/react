module.exports.get = req => {
    let port = req.app.settings.port;
    return `${req.protocol}://${req.hostname}${port == 80 || port == 443 ? '' : ':' + port}`;
};
