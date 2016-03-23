angular.module('pushClientApp').run(function (push) {
    var InitPush = function() {
      var _push = PushNotification.init({
        android: {
          senderID: "405736466992"
        }
      });

      _push.on('registration', function(data) {
        // data.registrationId
        var deviceCreds = {
          PushToken: data.registrationId
        }
        //$log.log(data);
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
    };
    document.addEventListener('deviceready', InitPush, false);
  });