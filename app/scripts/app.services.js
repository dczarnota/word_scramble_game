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
          console.log(data.word);
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
        var random_index;
        var index = 0;
        var scrambled_word_array = [];

        while(word_array.length > 0){
          random_index = Math.floor(Math.random() * word_array.length);
          scrambled_word_array[index] = word_array[random_index];
          index++;
          word_array.splice(random_index, 1);
        }

        scrambled_word = scrambled_word_array.join('');
        return scrambled_word;
      }
    };
  }]);
