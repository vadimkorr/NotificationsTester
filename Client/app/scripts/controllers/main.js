'use strict';

/**
 * @ngdoc function
 * @name pushClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pushClientApp
 */
angular.module('pushClientApp')
  .controller('MainCtrl', function ($scope, $log, push, url) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var updatePushToken = function() {
      $log.info('updatePushToken from observer');
      $scope.deviceToken = push.getDeviceCreds().PushToken;
      $scope.$apply();
    };

    push.registerObserverCallback(updatePushToken);

    $scope.SendMeNotification = function() {
      push.SendMeNotification(); 
      alert("Hide an app and wait about 2 seconds for notification.");   	
    }

    $scope.GetTest = function() {
    	push.GetTest(); 
    }
  });
