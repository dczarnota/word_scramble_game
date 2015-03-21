'use strict';

angular.module('wordScrambleGameApp')
  .controller('MainCtrl', ['$scope', 'RandomWordFactory', 'ScrambleWordFactory', function($scope, RandomWordFactory, ScrambleWordFactory){

    RandomWordFactory.getRandomWord().then(function(data){
      $scope.word = ScrambleWordFactory.scrambleWord(data.data.word);
    });

  }]);
