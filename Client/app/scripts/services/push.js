'use strict';

/**
 * @ngdoc service
 * @name pushClientApp.push
 * @description
 * # push
 * Service in the pushClientApp.
 */
angular.module('pushClientApp')
  .service('push', function ($http, $log, url) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    var service = {};

    var deviceCreds = {
        PushToken: ""
    };

    var observerCallbacks = [];

    //register an observer
    service.registerObserverCallback = function(callback){
        observerCallbacks.push(callback);
    };

    //call this when you know 'foo' has been changed
    var notifyObservers = function(){
        angular.forEach(observerCallbacks, function(callback){
            $log.info("notifyObservers");
            callback();
        });
    };

    service.onRegistration = function(data) {
        deviceCreds.PushToken = data.PushToken;
        $log.info("service.onRegistration = " + data.PushToken);
        notifyObservers();
    }
    
    service.onNotification = function(data) {
        alert(data.data.Message);
    }
    
    service.onError = function(data) {
        alert(data.data.Message);
    }
    
    service.SendMeNotification = function() {
        var onSuccess = function() {
            alert("Success");
        }
        var onError = function(e) {
            alert(e.Message || "Something went wrong");
        }
        var dto = {
            DeviceToken: deviceCreds.PushToken
        };
        $http.post(url.getReceiveNotificationUrl(), dto).then(onSuccess, onError);
    }

    service.GetTest = function() {
        var onSuccess = function(data) {
            alert(data.data);
        }
        var onError = function(e) {
            alert(e.Message || "Something went wrong");
        }
        $http.get(url.getTestUrl() + "World").then(onSuccess, onError);
    }

    service.getDeviceCreds = function() {
        return deviceCreds;
    }

    return service;
});
