'use strict';

angular.module('wordScrambleGameApp')
  .controller('MainCtrl', ['$scope', '$window', 'RandomWordFactory', 'ScrambleWordFactory', 'CheckAnswerFactory', 'HintFactory', 'PlayAgainFactory', function($scope, $window, RandomWordFactory, ScrambleWordFactory, CheckAnswerFactory, HintFactory, PlayAgainFactory){

    $scope.word = {
      unscrambled: '',
      scrambled: '',
      user_response: '',
      hint: '',
      show_hint: false,
      correct: false,
      attempt: false
    };

    RandomWordFactory.getRandomWord().then(function(data){
      $scope.word.scrambled = ScrambleWordFactory.scrambleWord(data.data.word);
      $scope.word.unscrambled = data.data.word;
      $scope.word.hint = HintFactory.firstLetter($scope.word.unscrambled);
      return $scope.word;
    });

    $scope.checkUserResponse = CheckAnswerFactory.correctResponse;
    $scope.playAgain = PlayAgainFactory.restart;
  }]);
