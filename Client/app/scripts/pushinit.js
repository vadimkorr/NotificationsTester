angular.module('pushClientApp').run(function ($log, push) {
    var InitPush = function() {
      var _push = PushNotification.init({
        android: {
          senderID: "405736466992"
        },
        ios: {
            alert: "true",
            badge: "true",
            sound: "true"
        },
        windows: {}
      });

      _push.on('registration', function(data) {
        // data.registrationId
        var deviceCreds = {
          PushToken: data.registrationId
        }
        $log.info("pushinit.js PushToken = " + deviceCreds.PushToken);
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
        push.onError(e.message);
      });
    };
    document.addEventListener('deviceready', InitPush, false);
  });