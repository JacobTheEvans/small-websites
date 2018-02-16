var app = angular.module("main.char",["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/characters", {
    templateUrl: "/views/templates/char.tpl.html",
    controller: "charController"
  })
}]);

app.controller("charController", ["$scope", "$timeout", function($scope,$timeout) {
  $scope.$on('$viewContentLoaded', () => {
    $timeout(() => {
      componentHandler.upgradeAllRegistered();
    })
  });
}]);
