'use strict';

//Tests for MainCtrl
describe('Controller: MainCtrl', function () {

  //Load the controller's module
  beforeEach(module('wordScrambleGameApp'));

  var MainCtrl, scope;

  //Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
    });
  }));

  it('should initialize scope.word.unscrambled as an empty string', function () {
    expect(scope.word.unscrambled).toBe('');
  });

  it('should initialize scope.word.scrambled as an empty string', function () {
    expect(scope.word.scrambled).toBe('');
  });

  it('should initialize scope.word.user_response as an empty string', function () {
    expect(scope.word.user_response).toBe('');
  });

  it('should initialize scope.word.hint as an empty string', function () {
    expect(scope.word.hint).toBe('');
  });

  it('should initialize scope.word.show_hint as false', function () {
    expect(scope.word.show_hint).toBe(false);
  });

  it('should initialize scope.word.correct as false', function () {
    expect(scope.word.correct).toBe(false);
  });

  it('should initialize scope.word.attempt as false', function () {
    expect(scope.word.attempt).toBe(false);
  });
});

//Tests for all service factories

describe('Service: RandomWordFactory', function(){

  //Load the controller's module
  beforeEach(module('wordScrambleGameApp'));
  var service;

  beforeEach(inject(function(RandomWordFactory){
    service = RandomWordFactory;
  }));

  it('should return an object', function(){
    expect(typeof(service)).toBe('object');
  });

  it('should return a function for getRandomWord()', function(){
    expect(typeof(service.getRandomWord)).toBe('function');
  });
});

describe('Service: ScrambleWordFactory', function(){

  //Load the controller's module
  beforeEach(module('wordScrambleGameApp'));
  var service;

  beforeEach(inject(function(ScrambleWordFactory){
    service = ScrambleWordFactory;
  }));

  it('should return an object', function(){
    expect(typeof(service)).toBe('object');
  });

  it('should return a function for scrambleWord()', function(){
    expect(typeof(service.scrambleWord)).toBe('function');
  });
});

describe('Service: CheckAnswerFactory', function(){

  //Load the controller's module
  beforeEach(module('wordScrambleGameApp'));
  var service;

  beforeEach(inject(function(CheckAnswerFactory){
    service = CheckAnswerFactory;
  }));

  it('should return an object', function(){
    expect(typeof(service)).toBe('object');
  });

  it('should return a function for correctResponse()', function(){
    expect(typeof(service.correctResponse)).toBe('function');
  });
});

describe('Service: HintFactory', function(){

  //Load the controller's module
  beforeEach(module('wordScrambleGameApp'));
  var service;

  beforeEach(inject(function(HintFactory){
    service = HintFactory;
  }));

  it('should return an object', function(){
    expect(typeof(service)).toBe('object');
  });

  it('should return a function for firstLetter()', function(){
    expect(typeof(service.firstLetter)).toBe('function');
  });
});

describe('Service: PlayAgainFactory', function(){

  //Load the controller's module
  beforeEach(module('wordScrambleGameApp'));
  var service;

  beforeEach(inject(function(PlayAgainFactory){
    service = PlayAgainFactory;
  }));

  it('should return an object', function(){
    expect(typeof(service)).toBe('object');
  });

  it('should return a function for restart()', function(){
    expect(typeof(service.restart)).toBe('function');
  });
});
