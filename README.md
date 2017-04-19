# IPC

## Setting dev environment

Environment tools required to use this project:

    gem install scss_lint
    npm install -g gulp

Before install the npm package you should [install OracleDb prerequisites](#oracle) and then run the installation

    npm install

To run the app you should use this command

    npm start

## Running the test suite.

    npm test

## Building and release

    npm run build

## <a name="oracle"></a> How to install OracleDb

1. Download Oracle instantclient-basic, instantclient-sdk, instantclient-sql*plus
2. Install C++ compiler v12 or later.

    `sudo apt-get -y install build-essential`

3. On Ubuntu install libaio:

    `sudo apt-get -y install libaio1`

4. Set environment variables:
    `
    export LD_LIBRARY_PATH=/opt/oracle/instantclient_12_1:$LD_LIBRARY_PATH
    export OCI_LIB_DIR=/opt/oracle/instantclient
    export OCI_INC_DIR=/opt/oracle/instantclient/sdk/include`

More info: https://github.com/oracle/node-oracledb#-installation