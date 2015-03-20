'use strict';

/**
 * @ngdoc function
 * @name wordScrambleGameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wordScrambleGameApp
 */
angular.module('wordScrambleGameApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
