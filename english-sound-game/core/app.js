"use strict";
var app = angular.module("app",[]);

app.controller("mainController", ["$scope", function($scope) {
  $scope.play = false;

  $scope.togglePlay = function() {
    $scope.play = !$scope.play;
  };

  $scope.qIndex = 0;

  $scope.questions = [
    {
      index: 0,
      question: "Name of main charcter?",
      answers: [
        "Tom Hanks",
        "Christopher Sly",
        "Friar Laurence",
        "Othello"
      ],
      correct: "Othello"
    },
    {
      index: 1,
      question: "Where is the war in the play?",
      answers: [
        "Carthage",
        "Vienna",
        "Cyprus",
        "Rome"
      ],
      correct: "Cyprus"
    },
    {
      index: 2,
      question: "Who is Cassio's lover?",
      answers: [
        "Bianca",
        "Desdemona",
        "Juliet",
        "Hera"
      ],
      correct: "Bianca"
    },
    {
      index: 3,
      question: "What is Othello's token given to Desdemona?",
      answers: [
        "Dagger",
        "Ring",
        "Handkerchief",
        "Bible"
      ],
      correct: "Handkerchief"
    },
  ];

  var soundID = "Fail";
  $scope.loadSound = function() {
    createjs.Sound.registerSound("core/sounds/fail1.wav", soundID);
    createjs.Sound.registerSound("core/sounds/win.mp3", "Win");
    createjs.Sound.registerSound("core/sounds/suc.mp3", "Success");
  };
  $scope.playSound = function() {
    createjs.Sound.play(soundID);
  };

  $scope.submit = function($index,answer) {
    if($scope.questions[$index].correct == answer) {
      $scope.qIndex += 1;
      if($scope.qIndex < $scope.questions.length) {
        createjs.Sound.play("Success");
      }
    } else {
      $scope.playSound();
      $scope.qIndex = -1;
    }
  };
  $scope.playWinSound = function() {
    createjs.Sound.play("Win");
  }
}]);
