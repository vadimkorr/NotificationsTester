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

    service.deviceCreds = {};
    service.onRegistration = function(data) {
        service.deviceCreds = {
            PushToken: data.PushToken
        }
    }
    
    service.onNotification = function(data) {
        alert(data);
    }
    
    service.onError = function(data) {
        alert(data);
    }
    
    service.SendMeNotification = function() {
        var onSuccess = function() {alert("Success");}
        var onError = function(e) {alert(e.Message);}
        $http.post(url.getReceiveNotificationUrl(), {DeviceToken: service.deviceCreds.PushToken}).then(onSuccess, onError);
    }

    service.GetTest = function() {
        var onSuccess = function(data) {alert(data);}
        var onError = function(e) {alert(e.Message);}
        $http.get(url.getTestUrl() + "World").then(onSuccess, onError);
    }


    return service;
});
