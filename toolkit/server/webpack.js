const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../../webpack.config');
const compiler = webpack(config);

module.exports = router => {
    router.use(webpackMiddleware(compiler,{
        publicPath: config.output.publicPath,
    }));
    router.use(webpackHotMiddleware(compiler));
    return router;
};
