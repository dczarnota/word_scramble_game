'use strict';

angular.module('wordScrambleGameApp')
  .factory('RandomWordFactory', ['$http', function($http){
    return $http({
        method: 'GET',
        url: 'http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=6&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
      });
  }]);
