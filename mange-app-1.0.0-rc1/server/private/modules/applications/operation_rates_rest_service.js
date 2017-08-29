/**
 * Created by manoj on 8/15/17.
 */
const Q = require('q');
const boom = require('boom');
const Messages = require('../common/messages');
const config = require('../../config/application_config');
const wreck = require('wreck');

function  _invokeOperationRatesRestAdmin(apiName) {
    let deferred = Q.defer();

    let getEndpointUrl = function (apiName) {
        return config.rateServiceURL + 'apis/' + apiName + '/operations/operationrates';
    };

    let getRequestOptions = function () {
        return {
            json: true,
            headers: {}
        };
    };

    wreck.get(getEndpointUrl(apiName), getRequestOptions(), (error, res, payload) => {
        if (error) {
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        } else {
           // console.log('##############333' + JSON.stringify(payload));
            deferred.resolve(payload);
        }
    });
    return deferred.promise;
}

function  _invokeOperationRatesRest(apiName, operator) {
    let deferred = Q.defer();

    let getEndpointUrl = function (apiName) {
        return config.rateServiceURL + 'operators/' + operator + '/operatorrates?api=' + apiName;
    };

    let getRequestOptions = function () {
        return {
            json: true,
            headers: {}
        };
    };

  //  console.log("operator rates imported==========");

    wreck.get(getEndpointUrl(apiName), getRequestOptions(), (error, res, payload) => {
        if (error) {
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        } else {
            deferred.resolve(payload);
        }
    });
    return deferred.promise;
}

module.exports = {
    invokeOperationRatesRestAdmin: _invokeOperationRatesRestAdmin,
    invokeOperationRatesRest: _invokeOperationRatesRest

};
