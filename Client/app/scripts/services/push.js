'use strict';

/**
 * @ngdoc service
 * @name pushClientApp.push
 * @description
 * # push
 * Service in the pushClientApp.
 */
angular.module('pushClientApp')
  .service('push', function ($http, url) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    var service = {};
    service.onRegistration = function(data) {
        $http.post(url.getReceiveNotificationUrl(), {"DeviceToken": data.sdf});
    }
    
    service.onNotification = function(data) {
        alert(data);
    }
    
    service.onError = function() {}
    
    return service;
});
