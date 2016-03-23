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

    $scope.deviceToken = push.deviceCreds.PushToken;
    $scope.$watch(function() { 
            return push.deviceCreds; 
        }, 
        function(newValue, oldValue) {
            $log.log("push.deviceCreds.PushToken = " + push.deviceCreds.PushToken);
            $scope.deviceToken = push.deviceCreds.PushToken;
        }, true);

    $scope.SendMeNotification = function() {
    	push.SendMeNotification();    	
    }

    $scope.GetTest = function() {
    	push.GetTest(); 
    }
  });
