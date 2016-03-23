'use strict';

/**
 * @ngdoc function
 * @name pushClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pushClientApp
 */
angular.module('pushClientApp')
  .controller('MainCtrl', function ($scope, push, url) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.deviceToken = push.deviceCreds.PushToken;

    $scope.SendMeNotification = function() {
    	push.SendMeNotification();    	
    }

    $scope.GetTest = function() {
    	push.GetTest(); 
    }
  });
