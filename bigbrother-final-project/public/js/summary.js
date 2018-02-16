var app = angular.module("main.sum",["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/summary", {
    templateUrl: "/views/templates/summary.tpl.html",
    controller: "summaryController"
  })
}]);

app.controller("summaryController", ["$scope", "$timeout", function($scope,$timeout) {
  $scope.$on('$viewContentLoaded', () => {
    $timeout(() => {
      componentHandler.upgradeAllRegistered();
    })
  });
}]);
