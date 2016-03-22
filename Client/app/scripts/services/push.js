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
    
    service.register = function() {
        InitPush();
        //document.addEventListener('deviceready', InitPush, false);
    }
    
    var InitPush = function() {
        _push = PushNotification.init({
            android: {
                senderID: "405736466992"
            }
        });
        _push.on('registration', function(data) {
            // data.registrationId
            var deviceCreds = {
                PushToken: data.registrationId
            }
            $log.log(data);
            service.onRegistration(deviceCreds);
        });
        _push.on('notification', function(data) {
            // data.message,
            // data.title,
            // data.count,
            // data.sound,
            // data.image,
            // data.additionalData
            service.onNotification(data);
        });
        _push.on('error', function(e) {
            // e.message
            service.onError(e);
        });
    }
    
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
        var onSuccess = function() {
            alert("Success");
        }
        var onError = function(e) {
            alert(e.Message);
        }
        var dto = {
            DeviceToken: service.deviceCreds.PushToken
        };
        $http.post(url.getReceiveNotificationUrl(), dto).then(onSuccess, onError);
    }

    service.GetTest = function() {
        var onSuccess = function(data) {
            alert(data.data);
        }
        var onError = function(e) {
            alert(e.Message);
        }
        $http.get(url.getTestUrl() + "World").then(onSuccess, onError);
    }


    return service;
});
