angular.module('pushClientApp').run(function (push) {
    var push;

    push.on('registration', function(data) {
        // data.registrationId
        push.onRegistration(data);
    });

    push.on('notification', function(data) {
        // data.message,
        // data.title,
        // data.count,
        // data.sound,
        // data.image,
        // data.additionalData
        push.onNotification(data);
    });

    push.on('error', function(e) {
        // e.message
        push.onError(e);
    });

    function onDeviceReady() {
        push = PushNotification.init({
            android: {
                senderID: "pushtester-1257"
            },
            ios: {
                alert: "true",
                badge: "true",
                sound: "true"
            },
            windows: {}
        });
    }

    document.addEventListener('deviceready', onDeviceReady);
});