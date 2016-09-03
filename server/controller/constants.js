/**
 * The node-module to hold the constants for the server
 */
var constants = require('./constants'),
    myContext = this;

function define(obj, name, value) {
    Object.defineProperty(obj, name, {
        value: value,
        enumerable: true,
        writable: false,
        configurable: true
    });
}

var debugging = false;

exports.responseFlags = {};
exports.responseMessages = {};

    define(exports.responseMessages, 'PARAMETER_MISSING',                     'Some error occurred. Please refresh the page and try again.');
    define(exports.responseMessages, 'ACTION_COMPLETE',                       'Successful');
    define(exports.responseMessages, 'DATA_NOT_EXISTS',                       'There is no data to display.');
    define(exports.responseMessages, 'ACTION_NOT_COMPLETED',                  'Action not completed');
    
    define(exports.responseFlags, 'PARAMETER_MISSING',                   100);
    define(exports.responseFlags, 'ACTION_COMPLETE',                     200);
    define(exports.responseFlags, 'DATA_NOT_EXISTS',                     100);
    define(exports.responseFlags, 'ACTION_NOT_COMPLETED',                100);