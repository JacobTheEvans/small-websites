var app = angular.module("main.extra",["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/extra", {
    templateUrl: "/views/templates/extra.tpl.html",
    controller: "extraController"
  })
}]);

app.controller("extraController", ["$scope", "$timeout", function($scope,$timeout) {
  $scope.$on('$viewContentLoaded', () => {
    $timeout(() => {
      componentHandler.upgradeAllRegistered();
    })
  });
}]);
