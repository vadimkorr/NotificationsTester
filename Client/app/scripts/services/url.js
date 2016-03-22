'use strict';

/**
 * @ngdoc service
 * @name pushClientApp.url
 * @description
 * # url
 * Service in the pushClientApp.
 */
angular.module('pushClientApp')
  .factory('url', function () {
    
    var service = {};
    var receiveNotification = "api/push/ReceiveNotification/"; 
    var test = "api/push/test/"; 

    function getFullUrl(baseUrl, restUrl) {
        if (baseUrl === undefined) {
            return undefined;
        } else {
            return baseUrl + restUrl;
        }
    }

    service.baseUrl = "http://192.168.50.107:61601/";

    service.getReceiveNotificationUrl = function () {
        return getFullUrl(service.baseUrl, receiveNotification);
    };
    service.getTestUrl = function () {
        return getFullUrl(service.baseUrl, test);
    };

    return service;
  });
