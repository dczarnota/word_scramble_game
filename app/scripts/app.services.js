'use strict';

angular.module('wordScrambleGameApp')
  .factory('RandomWordFactory', ['$http', function($http){
    var random_word = '';
    
    return {
      getRandomWord: function(){
        return $http({
          method: 'GET',
          url: 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=6&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
        }).success(function(data){
          console.log("Here's the answer in case you're struggling: " + data.word);
          random_word = data.word;
          return random_word;
        });
      }
    };
  }])

  .factory('ScrambleWordFactory', [function(){
    var scrambled_word;

    return {
      scrambleWord: function(word){
        var str = word.toLowerCase();
        var word_array = str.split('');
        var scrambled_word;
        
        scrambled_word = _.shuffle(word_array).join('');

        return scrambled_word;
      }
    };
  }])

  .factory('CheckAnswerFactory', [function(){
    return {
      correctResponse: function(word){
        var str = '';
        str = word.unscrambled.toLowerCase();
        if(word.user_response === str){
          word.correct = true;
          word.attempt = false;
          return word;
        } else {
          word.attempt = true;
        }
      }
    };
  }])

  .factory('HintFactory', [function(){
    return {
      firstLetter: function(word){
        var str = word.toLowerCase();
        var word_array = str.split('');
        return word_array;
      }
    };
  }])

  .factory('PlayAgainFactory', ['$window', function($window){
    return {
      restart: function(){
        $window.location.reload();
      }
    };
  }]);
