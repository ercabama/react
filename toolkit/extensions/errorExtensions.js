let _ = require('lodash');

Error.create = (msg, data, inner) => {
    data = data || {};

    var err = new Error(msg || 'Unknown error');
    var innerValue = inner || (_.isError(data) ? data : null);

    if (innerValue) err.inner = innerValue;

    err.data = data;
    err.when = new Date();
    return err;
};

Error.http = (code, msg, data, inner) => {
    if (_.isString(code)) {
        inner = data;
        data = msg;
        msg = code;
        code = 500;
    }

    code = code || 500;
    msg = msg || Error.http.code[code.toString()] || 'Unknown error';

    var err = Error.create(msg, data, inner);
    err.status = code;
    return err;
};

Error.toJson = err => {
    if (_.isString(err)) {
        return {message: err};
    }

    var info = {};
    if (_.isError(err)) {
        info.message = err.message;
        info.stack = err.stack.split('\n');
    }

    if (_.isObject(err) === 'object') {
        for (var prop in err) {
            var value = err[prop];
            info[prop] = _.isError(value) ? Error.toJson(value) : value;
        }
    }
    return info;
};

Error.http.code = {
    '400': 'Bad Request',
    '401': 'Unauthorized',
    '402': 'Payment Required',
    '403': 'Forbidden',
    '404': 'Not Found',
    '405': 'Method Not Allowed',
    '406': 'Not Acceptable',
    '407': 'Proxy Authentication Required',
    '408': 'Request Timeout',
    '409': 'Conflict',
    '410': 'Gone',
    '411': 'Length Required',
    '412': 'Precondition Failed',
    '413': 'Request Entity Too Large',
    '414': 'Request-URI Too Long',
    '415': 'Unsupported Media Type',
    '416': 'Requested Range Not Satisfiable',
    '417': 'Expectation Failed',
    '418': 'I\'m a teapot',
    '422': 'Unprocessable Entity',
    '423': 'Locked',
    '424': 'Failed Dependency',
    '425': 'Unordered Collection',
    '426': 'Upgrade Required',
    '428': 'Precondition Required',
    '429': 'Too Many Requests',
    '431': 'Request Header Fields Too Large',
    '500': 'Internal Server Error',
    '501': 'Not Implemented',
    '502': 'Bad Gateway',
    '503': 'Service Unavailable',
    '504': 'Gateway Timeout',
    '505': 'HTTP Version Not Supported',
    '506': 'Variant Also Negotiates',
    '507': 'Insufficient Storage',
    '508': 'Loop Detected',
    '510': 'Not Extended',
    '511': 'Network Authentication Required'
};
