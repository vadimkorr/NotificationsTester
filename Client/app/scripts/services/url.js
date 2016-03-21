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
    var receiveNotification = "api/push/receiveNotification/";  

    function getFullUrl(baseUrl, restUrl) {
        if (baseUrl === undefined) {
            return undefined;
        } else {
            return baseUrl + restUrl;
        }
    }

    service.baseUrl = "http://10.50.18.47/";

    service.getReceiveNotificationUrl = function () {
        return getFullUrl(service.baseUrl, receiveNotification);
    };

    return service;
  });
