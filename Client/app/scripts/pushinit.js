angular.module('pushClientApp').run(function (push, $log) {
    var _push;

    var InitPush = function() {
        
        _push = PushNotification.init({
            android: {
                senderID: "405736466992"
            }
        });

        _push.on('registration', function(data) {
            // data.registrationId
            var deviceCreds = {
                PushToken: data.registrationid
            }
            $log.log(data);
            push.onRegistration(deviceCreds);
        });

        _push.on('notification', function(data) {
            // data.message,
            // data.title,
            // data.count,
            // data.sound,
            // data.image,
            // data.additionalData
            push.onNotification(data);
        });

        _push.on('error', function(e) {
            // e.message
            push.onError(e);
        });
    }

    //InitPush();
    /*function onDeviceReady() {
        InitPush();
    }
    document.addEventListener('deviceready', onDeviceReady);*/
});