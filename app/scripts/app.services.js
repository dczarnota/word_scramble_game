'use strict';

angular.module('wordScrambleGameApp')
  .factory('RandomWordFactory', ['$http', function($http){
    //RandomWordFactory retrieves a random word between 4-6 characters from the Wordnik API
    var random_word = '';
    
    return {
      getRandomWord: function(){
        return $http({
          method: 'GET',
          url: 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=6&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
        }).success(function(data){
          console.log("Here's the answer in case you're struggling: " + data.word.toLowerCase());
          //On successful GET request from the API, the data object contains the random word
          random_word = data.word.toLowerCase();
          return random_word;
        });
      }
    };
  }])

  .factory('ScrambleWordFactory', [function(){
    //ScrambleWordFactory takes the random word and scrambles it

    return {
      scrambleWord: function(word){
        //Convert the random word to lower case if it begins with a capital letter
        var str = word.toLowerCase();
        var word_array = str.split('');
        var scrambled_word;
        
        //Underscore shuffle is utilized here
          //Underscore shuffle returns a shuffled copy of the array
          //Uses a version of the Fisher-Yates shuffle
        scrambled_word = _.shuffle(word_array).join('');

        while(scrambled_word === str){
          scrambled_word = _.shuffle(word_array).join('');
        }

        return scrambled_word;
      }
    };
  }])

  .factory('CheckAnswerFactory', [function(){
    //CheckAnswerFactory checks the user response with the original random word

    return {
      correctResponse: function(word){
        var str = '';
        str = word.unscrambled.toLowerCase();

        if(word.user_response === str){
          //word.correct changes from false to true. This is used in the ng-show="word.correct" (main.html) to show the "correct!" text to the user
          word.correct = true;
        
          //word.attempt is set to false so that ng-show="word.attempt" (main.html) hides the "try again" text if the user has already attempted the problem
          word.attempt = false;
        
          return word;
        } else {
          //If a user incorrectly attempts a problem
          //Used in ng-show="word.attempt" to show the "try again" text to the user
          word.attempt = true;
        }
      }
    };
  }])

  .factory('HintFactory', [function(){
    //HintFactory returns the first letter of the unscrambled word as a hint to the user
    return {
      firstLetter: function(word){
        //Convert the unscrambled word to lower case if it begins with a capital letter
        var str = word.toLowerCase();
        var word_array = str.split('');
        return word_array;
      }
    };
  }])

  .factory('PlayAgainFactory', ['$window', function($window){
    //PlayAgainFactory restarts the app so the user can play again
    return {
      restart: function(){
        $window.location.reload();
      }
    };
  }]);
