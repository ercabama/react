const config = require('./config.json');

module.exports = {
    default: {
        test: {
            client: 'mysql',
            connection: {
                user:config.MYSQLDB_USER,
                password: config.MYSQLDB_PASSWORD,
                dns: config.MYSQLDB_DNS,
                dataBaseName: config.MYSQLDB_DBNAME,
                utf: config.MYSQLDB_UTF
            },
            pool: {
                min: 3,
                max: 10
            },
            migrations: {
                tableName: 'migrations'
            }

        }
    }
};
