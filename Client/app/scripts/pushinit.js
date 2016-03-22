angular.module('pushClientApp').run(function (push) {
    var _push;

    function InitPush() {
        
        _push = PushNotification.init({
            android: {
                senderID: "pushtester-1257"
            }
        });

        _push.on('registration', function(data) {
            // data.registrationId
            var deviceCreds = {
                PushToken: data.regid
            }
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

    function onDeviceReady() {
        InitPush();
    }

    document.addEventListener('deviceready', onDeviceReady);
});