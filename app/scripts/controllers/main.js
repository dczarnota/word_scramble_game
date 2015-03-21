'use strict';

angular.module('wordScrambleGameApp')
  .controller('MainCtrl', ['$scope', 'RandomWordFactory', function($scope, RandomWordFactory){

    console.log(RandomWordFactory);

  }]);
